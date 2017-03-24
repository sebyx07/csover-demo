module Api::V1
  class BaseControllerController < ApplicationController
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end

    def check_logged_in
      current_user.present?
    end

    protected :current_user, :check_logged_in
  end
end