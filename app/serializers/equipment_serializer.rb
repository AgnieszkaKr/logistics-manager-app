class EquipmentSerializer < ActiveModel::Serializer
  has_many :deliveries
end
