module RailsAdmin
  class MainController < RailsAdmin::ApplicationController
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end

    def check_logged_in
      if current_user.nil? && current_user.admin?
        redirect_to '/login/'
      end
    end
  end
end