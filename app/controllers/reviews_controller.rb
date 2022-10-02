

class ReviewsController < ApplicationController
  wrap_parameters format: []

  def create
 byebug
    review = Review.create(review_params)
    render json: review, status: :created

  end

  def index
    render json: Review.all, status: :ok
  end

  def update
    review = Review.find_by(id:params[:id])
    if review
      review.update(review_params)
      render json: review, status: :accepted
    else
      render json: {error: "review not found"}, status: :not_found
    end
  end

  

  private

  def review_params
    params.permit(:id, :username, :content, :exercise_id, :client_id)
  end
end
