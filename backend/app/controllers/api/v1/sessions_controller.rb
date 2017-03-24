module Api::V1
  class SessionsController < Api::V1::BaseControllerController
    before_action :check_logged_in, only: [:current]

    def current
      render json: serialize_user(current_user)
    end

    def register
      user = UserRegistrationService.register(params)
      if user.valid?
        set_session(user)
        render json: serialize_user(user)
      else
        render_errors(user)
      end
    end

    def login
      username = params[:username]
      password = params[:password]

      user = User.find_by(username: username)
      if user && user.authenticate(password)
        set_session(user)
        render json: serialize_user(user)
      else
        head :not_found
      end
    end

    def set_session(user)
      session[:user_id] = user.id
    end

    def logout
      session[:user_id] = nil
      head :ok
    end

    def serialize_user(user)
      JSONAPI::ResourceSerializer.new(Api::V1::UserResource)
          .serialize_to_hash(Api::V1::UserResource.new(user, nil))
    end

    private :set_session, :serialize_user
  end
end