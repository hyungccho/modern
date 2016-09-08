Rails.application.routes.draw do
  root to: 'static_pages#root'

  get '*path', to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    namespace :v1 do
      resources :accounts, only: [:create, :update, :destroy]
      resource :session, only: [:create, :destroy]
      resources :businesses, only: [:index, :create, :update, :destroy]
    end
  end
end
