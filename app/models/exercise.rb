class Exercise < ApplicationRecord
  validates :image, presence: true
  validates :name, presence: true
  validates :description, presence: true

  has_many :reviews
  has_many :clients, through: :reviews
end
