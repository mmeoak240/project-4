class ExercisesController < ApplicationController
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

end
