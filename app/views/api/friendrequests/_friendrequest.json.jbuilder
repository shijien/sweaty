user.send_friend_requests.each do |request| 
    json.set! request.id do
        json.extract! request, :id, :request_from_id, :request_to_id
    end
end
user.receive_friend_requests.each do |request|
    json.set! request.id do
        json.extract! request, :id, :request_from_id, :request_to_id
    end
end