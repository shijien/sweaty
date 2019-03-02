class ApplicationController < ActionController::Base
    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login!(user)
        user.reset_session_token!
        @current_user = user
        session[:session_token] = user.session_token
    end

    def logged_in?
        !!current_user
    end

    def logout!
        unless current_user
            return nil
        end
        current_user.reset_session_token!
        session[:session_token] = nil
        return true 
    end
end
