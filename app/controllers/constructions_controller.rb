class ConstructionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    wrap_parameters format: []
    def index

    end

    def show

    end
    def show
        id =  session[:user_id]
        if id 
            construction = Construction.where(user_id: id )
            render json: construction; 
        else 
            render json: {"error": "Not found "}
        end
    end


    def create
        user = User.find_by(id: session[:user_id])
        construction = Construction.create!(permitted_params)
        construction.update(user_id: user.id)
        render json: construction, status: :ok
 
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


