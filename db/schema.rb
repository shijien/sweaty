# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_06_051443) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "exercises", force: :cascade do |t|
    t.string "map", null: false
    t.string "name", null: false
    t.string "exercise_type", null: false
    t.string "location", null: false
    t.float "distance", null: false
    t.float "start_lnt", null: false
    t.float "start_lat", null: false
    t.float "end_lnt", null: false
    t.float "end_lat", null: false
    t.integer "duration"
    t.integer "user_id", null: false
    t.boolean "done", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["distance"], name: "index_exercises_on_distance"
    t.index ["exercise_type"], name: "index_exercises_on_exercise_type"
    t.index ["location"], name: "index_exercises_on_location"
    t.index ["user_id"], name: "index_exercises_on_user_id"
  end

  create_table "friend_requests", force: :cascade do |t|
    t.integer "request_from_id", null: false
    t.integer "request_to_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["request_from_id"], name: "index_friend_requests_on_request_from_id"
    t.index ["request_to_id"], name: "index_friend_requests_on_request_to_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "from_user_id", null: false
    t.integer "to_user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["from_user_id"], name: "index_friendships_on_from_user_id"
    t.index ["to_user_id"], name: "index_friendships_on_to_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "fname"
    t.string "lname"
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "username", null: false
    t.string "city"
    t.string "state"
    t.string "country"
    t.integer "height"
    t.integer "weight"
    t.date "birthday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
