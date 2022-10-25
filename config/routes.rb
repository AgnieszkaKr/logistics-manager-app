Rails.application.routes.draw do

  
  resources :equipment
  get '/users', to: 'users#index'
  get '/me', to: 'users#show'
  post '/users', to: 'users#create'
  get '/sign_out', to: 'sessions#destroy'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/sites', to: 'sites#show'
  get '/sites/:id', to: 'sites#index'
  post '/sites', to: 'sites#create'
  get '/equipment/site/:id', to: 'equipments#show_site_equipment'
  post '/equipments', to: 'equipments#create'
  get '/equipments/:id', to: 'equipments#show'
  delete '/deliveries/:id', to: 'deliveries#destroy' 
  patch '/deliveries/:id', to: 'deliveries#update' 
  post '/deliveries', to: 'deliveries#create'
  get '/contractors', to: 'contractors#show'
  get '/invitations', to: 'invitations#index'
  post '/invitations', to: 'invitations#create'
  get 'invitations/site/:site_id', to: 'invitations#show_site_invitations'
end
