class EquipmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :site_id

  has_many :deliveries
end
