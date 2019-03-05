json.key_format! camelize: :lower
@exercises.each do |exercise|
    json.set! exercise.id do
        json.extract! exercise, :id, :map, :name, :exercise_type, :location, :distance, :start_lnt, :start_lat, :end_lnt, :end_lat, :duration, :user_id, :done, :created_at, :updated_at
        json.extract! exercise.user, :username, :fname, :lname, :email
    end
end