class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :construction_id

  has_many :deliveries
end
