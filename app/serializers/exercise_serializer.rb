class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :image, :name, :description

  has_many :reviews
  has_many :clients
end
