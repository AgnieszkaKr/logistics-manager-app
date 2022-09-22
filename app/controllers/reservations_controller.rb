class ReservationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def index
        render json: Reservation.all
    end

    def show
        reservation = Reservation.find(params[:id])
        render json: reservation
    end

    def create
        reservation = Reservation.create!(permitted_params)
        render json: reservation
    end

    def update

    end

    def destroy

    end

    private 

    def permitted_params
        params.permit(:delivery_id, :equipment_id)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
