class Construction < ApplicationRecord
    validates :layout_plane, presence: true
    validates :building_name, presence: true
    
    belongs_to :logistics_manager
    has_many :equipments
    has_many :contractors
    has_many :deliveries
    has_many :reservations, through: :deliveries
    
end
