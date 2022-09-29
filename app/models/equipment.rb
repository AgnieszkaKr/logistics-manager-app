class Equipment < ApplicationRecord
    validates :name, presence: true
    validates :construction_id, presence: true
    belongs_to :construction
    has_many :deliveries
end
