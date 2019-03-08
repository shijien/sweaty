# == Schema Information
#
# Table name: exercises
#
#  id            :bigint(8)        not null, primary key
#  map           :string           not null
#  name          :string           not null
#  exercise_type :string           not null
#  location      :string           not null
#  distance      :float          not null
#  start_lnt     :float            not null
#  start_lat     :float            not null
#  end_lnt       :float            not null
#  end_lat       :float            not null
#  duration      :integer
#  user_id       :integer          not null
#  done          :boolean          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Exercise < ApplicationRecord
    validates :map, :name, :location, :distance, :start_lat, :start_lnt, :end_lat, :end_lnt, :user_id, presence: true
    validates :exercise_type, presence: true, inclusion: {in: ["running", "in-place", "hiking", "walking", "biking"]}
    validates :done, presence: true, inclusion: {in: [true, false]}

    belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

end
