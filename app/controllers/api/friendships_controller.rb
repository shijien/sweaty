class Api::FriendshipsController < ApplicationController
    
    def index
        @user = User.find(params[:user_id])
        render "api/users/show"
    end

    def create
        @user = current_user
        @current_friendship = Friendship.find_by(from_user_id: params[:friendship][:from_user_id], to_user_id: params[:friendship][:to_user_id])
        if @current_friendship.nil?
            @current_friendship = Friendship.find_by(to_user_id: params[:friendship][:from_user_id], from_user_id: params[:friendship][:to_user_id])
        end 

        unless @current_friendship.nil? 
            render "api/users/show"
            return 
        end

        @friendship1 = Friendship.new(friend_params)
        @friendship2 = Friendship.new(to_user_id: params[:friendship][:from_user_id], from_user_id: params[:friendship][:to_user_id])
        if @friendship1.save && @friendship2.save
            remove_from_friend_requests
            render "api/users/show"
        else 
            render json: ['Can\'t friend this user'], status: 404
        end 
    end

    def destroy
        @friendship = Friendship.find(params[:id])
        @user = current_user
        @friendship.delete
        render "api/users/show"
    end

    private 

    def remove_from_friend_requests
        friendReq = FriendRequest.find_by(request_from_id: params[:friendship][:from_user_id], request_to_id: params[:friendship][:to_user_id])
        friendReq.delete unless friendReq.nil?
        friendReq = FriendRequest.find_by(request_to_id: params[:friendship][:from_user_id], request_from_id: params[:friendship][:to_user_id])
        friendReq.delete unless friendReq.nil?
    end

    def friend_params
        params.require(:friendship).permit(:from_user_id, :to_user_id)
    end
    

    
end
