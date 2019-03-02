class CreateExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :exercises do |t|
      t.string :map, null: false
      t.string :name, null: false
      t.string :exercise_type, null: false
      t.string :location, null: false
      t.integer :distance, null: false
      t.float :start_lnt, null: false
      t.float :start_lat, null: false
      t.float :end_lnt, null: false
      t.float :end_lat, null: false
      t.integer :duration
      t.integer :user_id, null: false
      t.boolean :done, null: false 

      t.timestamps
    end
    add_index :exercises, :exercise_type
    add_index :exercises, :location
    add_index :exercises, :distance
    add_index :exercises, :user_id
    #Ex:- add_index("admin_users", "username")
  end
end
