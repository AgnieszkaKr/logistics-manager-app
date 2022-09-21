class Contractor < ApplicationRecord
    belongs_to :construction
    belongs_to :user
    has_many :deliveries, through: :user
end
