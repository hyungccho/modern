Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, format: { default: :json } do
    resources :accounts, only: [:create, :update, :destroy]
    resources :session, only: [:create, :destroy]
  end
end
