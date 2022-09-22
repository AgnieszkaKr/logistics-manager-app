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
        
    end

    def update

    end

    def destroy

    end

    private 

    def permitted_params
        params.permit()
    end

    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
