class LogisticsManager < ApplicationRecord
    has_many :constructions
    has_many :deliveries

end
