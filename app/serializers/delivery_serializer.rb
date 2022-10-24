class DeliverySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :equipment_id, :finish_time, :start_time, :title
end
