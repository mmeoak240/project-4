class ExercisesController < ApplicationController
  def index
    render json: Exercise.all, status: :ok
  end
end
