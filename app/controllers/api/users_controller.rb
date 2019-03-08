class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_message, status: 401
        end
    end

    def show
        @user = User.find(params[:id])
        if @user
            render "api/users/show"
        else 
            render json: ['User does not exist'], status: 404
        end
    end

    def update 
        @user = User.find(params[:id])
        if @user.update(user_params)
            render "api/users/show"
        else 
            render json: [@user.errors.full_message], status: 401
        end
    end

    def index 
        @users = User.where("fname ILIKE ? OR lname ILIKE ? OR username ILIKE ?","%#{params[:data][:nameQuery]}%", "%#{params[:data][:nameQuery]}%", "%#{params[:data][:nameQuery]}%")
        render "api/users/index"
     end




    private 
    def user_params
        params.require(:user).permit(:username, :email, :password, :fname, :lname)
    end



end
