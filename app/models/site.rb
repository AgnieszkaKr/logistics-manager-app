class Site < ApplicationRecord
    validates :layout_plan, presence: true
    validates :building_name, presence: true
    has_many :equipments
    blongs_to :manager
    blongs_to :contractor
    has_many :invitations


    
end
