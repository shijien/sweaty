# == Schema Information
#
# Table name: friend_requests
#
#  id              :bigint(8)        not null, primary key
#  request_from_id :integer          not null
#  request_to_id   :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class FriendRequest < ApplicationRecord

    validates :request_from_id, :request_to_id, presence: true

    belongs_to :request_from,
        foreign_key: :request_from_id,
        class_name: :User

    belongs_to :request_to,
        foreign_key: :request_to_id,
        class_name: :User

end
