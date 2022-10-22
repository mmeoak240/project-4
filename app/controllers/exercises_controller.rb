class ExercisesController < ApplicationController

  def create
    exercise = Exercise.create(exercise_params)
    render json: exercise, status: :created

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
  byebug
  exercise = Exercise.find_by(name:params[:name])
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
