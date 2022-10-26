class Client < ApplicationRecord
  has_secure_password

  validates :username, presence: true
  validates :username, uniqueness: true
  # validates :password_digest, presence: true
  # validates :password_digest, uniqueness: true
  validates :password_confirmation, presence: true

  has_many :reviews
  has_many :exercises, through: :reviews
end
