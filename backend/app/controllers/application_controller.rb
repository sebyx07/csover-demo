class ApplicationController < ActionController::Base
  def check_recaptcha
    unless verify_recaptcha
      render json: {recaptcha: 'Invalid recaptcha'}, status: 422
    end
  end

  def render_errors(model)
    render json: model.errors, status: 422
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def check_logged_in
    if current_user.nil?
      head :not_found
    end
  end

  protected :check_recaptcha, :render_errors, :current_user, :check_logged_in
end
