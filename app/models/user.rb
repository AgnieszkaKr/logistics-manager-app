class User < ApplicationRecord
    has_many :contractors
    has_many :logistics_managers
    has_many :deliveries
end