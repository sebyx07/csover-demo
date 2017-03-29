Rails.application.routes.draw do
  root to: redirect('/login')

  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  namespace :api do
    namespace :v1 do
      jsonapi_resources :users do
        jsonapi_relationships
      end
      jsonapi_resources :support_requests do
        jsonapi_relationships

        collection do
          get 'generate-pdf', action: 'generate_pdf'
        end
      end

      namespace :sessions do
        post 'login', action: 'login'
        post 'logout', action: 'logout'
        post 'register', action: 'register'
        get 'current', action: 'current'
      end
    end
  end
end
