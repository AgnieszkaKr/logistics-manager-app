if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_My-logistics-Manager', domain: 'http://localhost:4000/'
  else
    Rails.application.config.session_store :cookie_store, key: '_My-logistics-Manager'

  end