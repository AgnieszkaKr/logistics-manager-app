class ManagersController < ApplicationController
    def index
        render json: Manager.all, status: :ok
    end

    def show_manager_sites
        id = session[:user_id]
        if id
            managers = Manager.where(user_id: id) 
            constructions = managers.map do |manager|
                Site.find_by(id: manager.site_id)
            end
            render json: constructions
        else
            render status: :not_found
        end
        
    end



end


