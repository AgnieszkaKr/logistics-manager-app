class Delivery < ApplicationRecord
    validates :finish_time, presence: true
    validates :start_time, presence: true
    validates :store_place, presence: true
    belongs_to :user
    belongs_to :construction
end
