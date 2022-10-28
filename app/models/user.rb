class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true
    validates :phone_number, presence: true
    validates :company, presence: true
    has_many :sites
    has_many :contractors
    has_many :managers

    

end
