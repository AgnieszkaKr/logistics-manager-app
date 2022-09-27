class User < ApplicationRecord
    has_secure_password
    has_many :logistics_managers
    has_many :constractors

end
