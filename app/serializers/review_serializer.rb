class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :username, :content, :client_id, :exercise_id
  belongs_to :exercise
  belongs_to :client
end
