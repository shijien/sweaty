class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :fname
      t.string :lname
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :username, null: false
      t.integer :friend_id
      t.string :city
      t.string :state
      t.string :country
      t.integer :height 
      t.integer :weight
      t.date :birthday

      t.timestamps
    end
    add_index :users, :email, unique: true
    add_index :users, :username, unique: true
    add_index :users, :friend_id
    add_index :users, :fname
    add_index :users, :lname
    #Ex:- add_index("admin_users", "username")
  end
end
