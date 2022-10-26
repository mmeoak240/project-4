class Review < ApplicationRecord
  validates :content, presence: true
  
  belongs_to :client
  belongs_to :exercise
end
