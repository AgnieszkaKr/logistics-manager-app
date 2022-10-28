class Site < ApplicationRecord
    validates :layout_plan, presence: true
    validates :building_name, presence: true
    has_many :equipments
    has_many :invitations


    
end
