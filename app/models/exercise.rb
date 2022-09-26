class Exercise < ApplicationRecord
  has_many :reviews
  has_many :clients, through: :reviews
end
