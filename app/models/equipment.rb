class Equipment < ApplicationRecord
    belongs_to :construction
    has_many :reservations
end
