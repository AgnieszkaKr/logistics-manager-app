class InvitationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def index
        render json: Invitation.all, status: :ok
    end

    def show_site_invitations
    invitations = Invitation.where(site_id: params[:site_id])
    render json: invitations, status: :ok
    end


    def create 
        user = User.find_by(email: params[:email])
        if user
            invitation = Contractor.create!(site_id: params[:site_id], user_id: user.id)
        else
            invitation = Invitation.create!(permitted_params)
        end
        render json: invitation, status: :ok
    end

    
     
    private

     def permitted_params
        params.permit(:email, :site_id)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end