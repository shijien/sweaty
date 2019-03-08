Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "static_pages#root"

  namespace :api, defaults: {format: 'json'} do
    resources :users, only:[:create, :show, :update, :index] do 
      resources :friend_requests, only:[:index]
      resources :friendships, only:[:index]
    end
    resources :exercises, only:[:index, :show,:edit, :update, :destroy, :create]
    resources :friendships, only:[:create, :destroy]
    resources :friend_requests, only: [:create, :destroy]
    resource :session, only:[:create, :destroy]
  end
end
