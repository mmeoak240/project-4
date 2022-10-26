

class ReviewsController < ApplicationController
  wrap_parameters format: []

  def create
    review = Review.create(review_params)
    if review.valid?
    render json: review, status: :created
    else
      render json: {errors: review.errors.full_messages}, status: :unprocessable_entity
    end

  end

  def index
    render json: Review.all, status: :ok
  end

  def show
    review = Review.find_by(id:params[:id])
    if review
      render json: review, status: :ok
    else
      render json: {error: "review not found"}, status: :not_found
    end
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

  def destroy
    review = Review.find_by(id:params[:id])
    if review
      review.destroy
      head :no_content
    else
      render json: {error: "review not found"}, status: :not_found
    end
  end

  

  private

  def review_params
    params.permit(:id, :username, :content, :exercise_id, :client_id)
  end
end
