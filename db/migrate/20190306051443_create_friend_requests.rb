class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :request_from_id, null: false
      t.integer :request_to_id, null: false

      t.timestamps
    end
    add_index :friend_requests, :request_from_id
    add_index :friend_requests, :request_to_id
    #Ex:- add_index("admin_users", "username")
  end
end
