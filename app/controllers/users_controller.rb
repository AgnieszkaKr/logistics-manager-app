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
        render json: { "user": session[:user_id]}
        else
        render json: { error: session[:user_id] }, status: :unauthorized
        end
    end

    def create
        user = User.new(permitted_params)
        if user.save
            session[:user_id] = user.id
            render json: {"info": user}
        end
    end

    def update
        user = User.find(params[:id])
        user.update(permitted_params)
        render json: user
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end
    def construction

    end
    private 

    def permitted_params
        params.permit(:name, :last_name, :company, :title, :email, :phone_number, :password)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
