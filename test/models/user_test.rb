# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  fname           :string
#  lname           :string
#  session_token   :string           not null
#  password_digest :string           not null
#  username        :string           not null
#  city            :string
#  state           :string
#  country         :string
#  height          :integer
#  weight          :integer
#  birthday        :date
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
