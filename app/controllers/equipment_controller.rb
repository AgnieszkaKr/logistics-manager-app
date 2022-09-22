class EquipmentController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def index
        render json: Equipment.all
    end

    def show
        eqipment = Equipment.find(params[:id])
        render json: eqipment
    end

    def create
        equipment = Equipment.create!(permitted_params)
        render json: equipment
    end

    def update
        eqipment = Equipment.find(params[:id])
        updated = eqipment.update(permitted_params)
        render json: updated
    end

    def destroy
        eqipment = Equipment.find(params[:id])
        eqipment.destroy
        head :no_content
    end

    private 

    def permitted_params
        params.permit(:name, :construction_id)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
