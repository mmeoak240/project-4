class ClientSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :goals, :admin

  has_many :exercises
  has_many :reviews
end
