class User < ApplicationRecord
    has_secure_password
    has_many :constructions
    has_many :contractors
    has_many :managers
end
