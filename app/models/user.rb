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

class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true

    after_initialize :ensure_session_token!

    attr_reader :password

    has_many :exercises,
        foreign_key: :user_id,
        class_name: :Exercise
        
    has_many :send_friend_requests,
        foreign_key: :request_from_id,
        class_name: :FriendRequest
    
    has_many :receive_friend_requests,
        foreign_key: :request_to_id,
        class_name: :FriendRequest

    has_many :from_friendships,
        foreign_key: :from_user_id,
        class_name: :Friendship
    
    has_many :to_friendships,
        foreign_key: :to_user_id,
        class_name: :Friendship
    
    has_many :from_friends,
        through: :to_friendships,
        source: :from_user
    
    has_many :to_friends,
        through: :from_friendships,
        source: :to_user
    
    

    

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email);
        if user && user.is_password?(password)
            return user
        end 
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def reset_session_token!
        
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token!
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
