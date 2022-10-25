class InvitationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def show
        render json: Invitation.all, status: :ok
    end
end