class Construction < ApplicationRecord
    validates :layout_plan, presence: true
    validates :building_name, presence: true
    has_many :equipments
    # belongs_to :user


    
end
