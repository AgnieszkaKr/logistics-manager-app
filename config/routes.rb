Rails.application.routes.draw do

  
  resources :equipment
  resources :contractors
  resources :logistics_managers
  # resources :sites
  resources :users
  get '/me', to: 'users#show'
  get '/sign_out', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/sites', to: 'sites#show'
  get '/sites/:id', to: 'sites#index'
  post '/newSite', to: 'sites#create'
  get '/equipment/site/:id', to: 'equipments#show_site_equipment'
  post '/equipments', to: 'equipments#create'
  get '/equipments/:id', to: 'equipments#show'
  delete '/deliveries/:id', to: 'deliveries#destroy' 
  patch '/deliveries/:id', to: 'deliveries#update' 
  post '/deliveries', to: 'deliveries#create'
end
