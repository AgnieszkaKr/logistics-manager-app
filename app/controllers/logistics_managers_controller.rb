class LogisticsManagersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def index
        render json: LogisticsManager.all
    end

    def show
        logisticsManager = LogisticsManager.find(params[:id])
        render json: logisticsManager
    end

    def create
        newManager = LogisticsManager.create!(permitted_params)
        render json: newManager
    end

    def update
        logisticsManager = LogisticsManager.find(params[:id])
        updatedManager =  logisticsManager.update(permitted_params)
    end

    def destroy
        logisticsManager = LogisticsManager.find(params[:id])
        logisticsManager.destroy
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
