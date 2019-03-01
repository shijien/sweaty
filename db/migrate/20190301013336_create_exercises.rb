class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :map
      t.string :name
      t.string :exercise_type
      t.string :location
      t.integer :distance
      t.string :git
      t.string :status

      t.timestamps
    end
  end
end
