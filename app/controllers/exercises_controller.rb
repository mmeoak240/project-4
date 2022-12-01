class ExercisesController < ApplicationController

  def create
    exercise = Exercise.create(exercise_params)
    if exercise.valid?
    render json: exercise, status: :created
    else
      render json: {errors: exercise.errors.full_messages}, status: :unprocessable_entity
    end

  end

  def index
    render json: Exercise.all, status: :ok
  end

  def show
    exercise = Exercise.find_by(id:params[:id])
    if exercise
      render json: exercise, status: :ok
    else
      render json: {error: "exercise not found"}
  end
end

def destroy
  exercise = Exercise.find_by(id:params[:id])
  if exercise
    exercise.destroy
    head :no_content
  else
    render json: {error: "exercise not found"}, status: :not_found
  end
end

private

def exercise_params
  params.permit(:id, :image, :name, :description)
end

end
