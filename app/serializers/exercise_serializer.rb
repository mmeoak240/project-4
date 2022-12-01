class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :description, :reviews, :clients

  has_many :reviews
  has_many :clients
end
