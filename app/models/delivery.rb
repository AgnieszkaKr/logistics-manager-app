class Delivery < ApplicationRecord
    validates :finish_time, presence: true
    validates :start_time, presence: true
    validates :title, presence: true
    belongs_to :equipment
   

end
