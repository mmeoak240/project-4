

class ReviewsController < ApplicationController
  wrap_parameters format: []

  def create
    byebug
    review = Review.create(review_params)
    render json: review, status: :created

  end

  

  private

  def review_params
    params.permit(:content, :exercise_id)
  end
end
