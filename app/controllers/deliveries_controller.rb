class DeliveriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def index
        render json: Delivery.all
    end

    def show
        delivery = Delivery.find(params[:id])
        render json: delivery
    end

    def create
        id = session[:user_id]
        delivery = Delivery.new(permitted_params)
        delivery.update(user_id: id)
        delivery.save()
        render json: delivery
    end

    def update
        delivery = Delivery.find(params[:id])
        updated = delivery.update(permitted_params)
        render json: updated
    end

    def destroy
        delivery = Delivery.find(params[:id])
        delivery.destroy
        head :no_content
    end

    private 

    def permitted_params
        params.permit(:start_time, :finish_time, :title, :equipment_id)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
