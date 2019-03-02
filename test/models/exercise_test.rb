# == Schema Information
#
# Table name: exercises
#
#  id            :bigint(8)        not null, primary key
#  map           :string           not null
#  name          :string           not null
#  exercise_type :string           not null
#  location      :string           not null
#  distance      :integer          not null
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

require 'test_helper'

class ExerciseTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
