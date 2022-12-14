class EquipmentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def index
        render json: Equipment.all
    end

    def show
        eqipment = Equipment.find(params[:id])
        render json: eqipment, status: :ok
    end

    def show_site_equipment
        render json: Equipment.where(site_id: params[:id]), status: :ok
    end
    # def show_site_equipment_contractor
    #     equipments= Equipment.where(site_id: params[:id])
    #     id = session[:user_id]
    #     ifChange = equipments.map do |equipment|
    #         if(equipment.user_id != id)
    #             return equipment
    #         end
    #     end
    #     render json: ifChange, status: :ok
    # end

    def create
        equipment = Equipment.create!(permitted_params)
        render json: equipment, status: :ok
    end

    def destroy
        equipment = Equipment.find(params[:id])
        equipment.destroy
        head :no_content
    end

    private 

    def permitted_params
        params.permit(:name, :site_id)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
