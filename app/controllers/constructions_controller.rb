class ConstructionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    def index
        constructions = Construction.all
        render json: constructions
    end

    def show
        construction = Construction.find(params[:id])
        render json: construction
    end

    def create
        construction = Construction.create!(permitted_params)
        render json: construction
    end

    def update
        construction = Construction.find(params[:id])
        construction.update(permitted_params)
        render json: construction
    end

    # When user delete account construction is destroyed
    # def destroy

    # end

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
