class RemoveFriendIdFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :friend_id, :string
  end
end
