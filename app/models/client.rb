class Client < ApplicationRecord
  has_secure_password

  has_many :reviews
  has_many :exercises, through: :reviews
end
