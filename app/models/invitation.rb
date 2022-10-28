class Invitation < ApplicationRecord
    validates :email, presence: true
    validates :company, presence: true
    belongs_to :site

    
end