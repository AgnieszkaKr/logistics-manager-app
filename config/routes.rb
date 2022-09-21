Rails.application.routes.draw do
  resources :reservations
  resources :deliveries
  resources :equipment
  resources :contractors
  resources :logistics_managers
  resources :constructions
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
