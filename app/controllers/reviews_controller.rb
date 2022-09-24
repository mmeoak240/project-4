class ReviewsController < ApplicationController
  wrap_parameters format: []

  def create
    review = Review.create(review_params)
    render json: review, status: :created
  end

  private

  def review_params
    params.permit(:username, :content)
  end
end
