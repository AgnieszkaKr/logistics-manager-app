class EquipmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def index
        render json: Equipment.all
    end

    def show
        eqipment = Equipment.find(params[:id])
        render json: eqipment
    end

    def show_site_equipment
        render json: Equipment.where(construction_id: params[:id])
    end

    def create
        construction = Construction.find_by(id: params[:construction_id])
        equipment = Equipment.create!(permitted_params)
        render json: {
            equipment: equipment, 
            construction: construction
        }
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
