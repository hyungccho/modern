Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    namespace :v1 do
      resources :accounts, only: [:create, :update, :destroy]
      resources :session, only: [:create, :destroy]
    end
  end
end
