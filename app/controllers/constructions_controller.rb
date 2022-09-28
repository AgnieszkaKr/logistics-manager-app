class ConstructionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    wrap_parameters format: []
    def index

    end

    def show

    end
    def show_constructions
        id =  session[:user_id]
        if id 
            logisticsManager = LogisticsManager.find_by(user_id: id)
            construction = Construction.find_by(id: logisticsManager.construction_id )
            render json: construction
        else 
            render json: {"error": "Not found "}
        end
    end


    def create_new_site 
        construction = Construction.create!(permitted_params)
        logistics_manager = LogisticsManager.create!(user_id: session[:user_id], construction_id: construction.id  )     
        render json: {
            "construction": construction,
            "manager": logistics_manager
        }
 
    end

    private 

    def permitted_params
        params.permit(:address_city, :address_street, :address_building_number, :address_zip, :building_name, :layout_plan)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end


end


