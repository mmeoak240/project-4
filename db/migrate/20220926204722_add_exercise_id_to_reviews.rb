class AddExerciseIdToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :exercise_id, :integer
  end
end
