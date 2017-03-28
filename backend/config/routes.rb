Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  namespace :api do
    namespace :v1 do
      jsonapi_resources :users

      namespace :sessions do
        post 'login', action: 'login'
        post 'logout', action: 'logout'
        post 'register', action: 'register'
        get 'current', action: 'current'
      end
    end
  end
end
