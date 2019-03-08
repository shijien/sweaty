@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :fname, :lname, :username, :from_friendships, :to_friendships, :send_friend_requests, :receive_friend_requests, :from_friends, :to_friends  
  end
end 