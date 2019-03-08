user.from_friendships.each do |friend|
    json.set! friend.id do
        json.extract! friend, :id, :from_user_id, :to_user_id
    end
end

user.to_friendships.each do |friend|
    json.set! friend.id do
        json.extract! friend, :id, :from_user_id, :to_user_id
    end
end