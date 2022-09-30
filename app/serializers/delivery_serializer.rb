class DeliverySerializer < ActiveModel::Serializer
  attributes :equipment_id, :finish_time, :start_time, :title
end
