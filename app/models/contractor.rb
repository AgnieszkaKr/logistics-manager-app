class Contractor < ApplicationRecord
    validates :user_id, presence: true
    validates :site_id, presence: true
    belongs_to :user
    belongs_to :site
    
end