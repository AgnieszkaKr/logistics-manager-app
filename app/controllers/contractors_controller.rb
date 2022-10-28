class ContractorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 
    def index
        render json: Contractor.all, status: :ok
    end
    def show
        contractors = Contractor.where(site_id: params[:id])
        render json: contractors, include: ["contractors.id", "contractors.site_id" ,"contractors.user.email", "user.name"], status: :ok
    end

    def show_contractor_sites
        id = session[:user_id]
        # if id.exists?
        #     render json: contractors = Contractor.where(user_id: id)
        #     # if contractors.exists?
        #     #     constructions = contractors.map do |contractor|
        #     #     Site.find_by(contractor.site_id)
        #     #     end
        #     #     render json: constructions
        #     # end
        # else
        #     render json: {"hej": "hej"}
        # end
        
        render json: {"hej": "hej"}
    end

    def destroy
        contractor = Contractor.find(params[:id])
        contractor.destroy
        head :no_content
    end

    private
    def render_not_found
        render json: {"error": "not found"}, status: :not_found
    end
    
    def render_unprocessable_entity_response(exception)
        render json: {"errors": exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end