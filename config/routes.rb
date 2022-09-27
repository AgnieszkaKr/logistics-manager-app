Rails.application.routes.draw do

  resources :deliveries
  resources :equipment
  resources :contractors
  resources :logistics_managers
  # resources :constructions
  resources :users
  get '/me', to: 'users#show'
  get '/sign_out', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/constructions', to: 'constructions#show_constructions'
  get '/equipment/site/:id', to: 'equipment#show_site_equipment'


end
