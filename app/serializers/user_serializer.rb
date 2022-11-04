class UserSerializer < ActiveModel::Serializer
  attributes :name, :last_name, :company, :title, :email
end
