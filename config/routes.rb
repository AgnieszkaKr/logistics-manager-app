Rails.application.routes.draw do
  
  
  
  
  
  
    resources :users
    resources :constructions
    resources :reservations
    resources :deliveries
    resources :equipment
    resources :contractors
    resources :logistics_managers


  post '/login', to: 'sessions#create' 
  post './logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'



end
