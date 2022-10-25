class Equipment < ApplicationRecord
    validates :name, presence: true
    validates :site_id, presence: true
    belongs_to :site
    has_many :deliveries
end
