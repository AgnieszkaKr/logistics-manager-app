class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :site_id

  has_one :user, serializer: UserSerializer
end
