Rails.application.routes.draw do
  resources :reservations
  resources :deliveries
  resources :equipment
  resources :contractors
  resources :logistics_managers
  resources :constructions
  resources :users

end
