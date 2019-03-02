class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])
        
        if @user
            login!(@user)
            render 'api/users/show'
        else
            render json: ['Invalid email/password, please try it again!'], status: 401
        end
    end

    def destroy
        if logout!
            render json: {} 
        else
            render json: ['Current User is not found. Please make sure you are logged in.'], status: 404
        end
    end
    
end
