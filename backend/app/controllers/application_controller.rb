class ApplicationController < ActionController::Base
  def check_recaptcha
    unless verify_recaptcha
      render json: {recaptcha: 'Invalid recaptcha'}, status: 422
    end
  end

  def render_errors(model)
    render json: model.errors, status: 422
  end

  protected :check_recaptcha, :render_errors
end
