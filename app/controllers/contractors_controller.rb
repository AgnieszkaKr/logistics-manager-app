class ContractorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response 

    def show
        contractors = Contractor.all
        render json: contractors, include: ["contractors.id", "contractors.site_id" ,"contractors.user.email", "user.name"], status: :ok
    end
end