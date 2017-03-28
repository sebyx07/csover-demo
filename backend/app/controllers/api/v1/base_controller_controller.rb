module Api::V1
  class BaseControllerController < ApplicationController
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end

    def check_logged_in
      if current_user.nil?
        head :not_found
      end
    end

    protected :current_user, :check_logged_in
  end
end