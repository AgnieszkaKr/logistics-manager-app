class ContractorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    def index
        contractors = Contractor.all
        render json: contractors
    end

    def show
        contractor = Contractor.find(params[:id])
        render json: contractor
    end

    def create
        contractor = Contractor.create!(permitted_params)
        render json: contractor
    end 

    def update
        contractor = Contractor.find(params[:id])
        contractor.update(permitted_params)
    end

    def destroy
        contractor = Contractor.find(params[:id])
        contractor.destroy
        head :no_content
    end

    private

    def permitted_params
        params.permit(:user_id, :construction_id)
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end


end
