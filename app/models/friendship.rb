# == Schema Information
#
# Table name: friendships
#
#  id           :bigint(8)        not null, primary key
#  from_user_id :integer          not null
#  to_user_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Friendship < ApplicationRecord

    validates :from_user_id, :to_user_id, presence: true

    belongs_to :from_user,
        foreign_key: :from_user_id,
        class_name: :User
    
    belongs_to :to_user,
        foreign_key: :to_user_id,
        class_name: :User
end
