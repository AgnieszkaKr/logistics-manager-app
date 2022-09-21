class Reservation < ApplicationRecord
    belongs_to :delivery
    belongs_to :equipment
end
