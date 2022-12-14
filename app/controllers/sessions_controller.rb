class SessionsController < ApplicationController
# signin

  wrap_parameters format: []
  skip_before_action :authorized, only: :create
  def new
    @user = User.new()
  end

  def create
    user = User.find_by(email: user_params[:email])
    if user && user.authenticate(user_params[:password])
      session[:user_id] = user.id
      render json: { "response": session[:user_id]}, status: :ok
    else 
      render json: {"error": "Password or email is not valid. Please, try again."}, status: :unauthorized
    end
  end

  def destroy
      
      reset_session
      render json: {"response": session[:user_id]}
      
  end 

  private 

  def user_params
    params.permit(:email, :password)
  end

end
