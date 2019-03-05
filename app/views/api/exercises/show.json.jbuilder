json.key_format! camelize: :lower
json.partial! 'exercise', exercise: @exercise
json.extract! @exercise.user, :username, :fname, :lname, :email
