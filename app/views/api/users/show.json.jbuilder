
json.user do
    json.partial! "/api/users/user", user: @user
    
end

json.friendRequests do 
    json.partial! "api/friendrequests/friendrequest", user: @user
end

json.friendships do
    json.partial! "api/friendships/friendship", user: @user
end

json.friends do 
    @user.from_friends.each do |friend|
        json.set! friend.id do 
            json.partial! "api/users/user", user: friend
        end 
    end
end

json.friends do 
    @user.to_friends.each do |friend|
        json.set! friend.id do 
            json.partial! "api/users/user", user: friend
        end 
    end
end