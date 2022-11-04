class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create, :index, :show]
    # rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    
    def index
        render json: User.all
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
        render json: user,  status: :ok
        else
        render json: {error: "Invalid login"}, status: 418
        end
    end

            


   
    def create 
        new_user = User.create!(permitted_params)
        if new_user.valid?
            session[:user_id] = new_user.id
            invitations = Invitation.where(email: params[:email])
            if invitations
                invitations.each do |invitation|
                Contractor.create!(site_id: invitation.site_id, user_id: new_user.id)
                end
            end
            invitations.destroy_all
            render json: new_user, status: :created
        else
            new_user.validate
            render json: new_user.errors
        end
        
    end


    def update
        user = User.find(params[:id])
        user.update(permitted_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
   
    private 

    def permitted_params
        params.permit(:name, :last_name, :company, :title, :email, :password)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end

   
end


