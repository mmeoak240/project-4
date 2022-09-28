

class ReviewsController < ApplicationController
  wrap_parameters format: []

  def create
 
    review = Review.create(review_params)
    render json: review, status: :created

  end

  def index
    render json: Review.all, status: :ok
  end

  

  private

  def review_params
    params.permit(:content, :exercise_id, :client_id)
  end
end
