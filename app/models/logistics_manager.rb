class LogisticsManager < ApplicationRecord
    has_many :deliveries, through: :user
    has_many :constructions
    has_many :equipments, through: :constructions
    has_many :contractors, through: :constructions
end
