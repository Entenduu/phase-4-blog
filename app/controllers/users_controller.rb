class UsersController < ApplicationController


  # GET /users
  def index
    users = User.all
    render json: users
  end

  # GET /users/1
  def show
    user = User.find_by(id: session[:user_id])
        render json: user
  end

  # POST /users
  def create
    user = User.create(user_params)
    if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
    else
        render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  
  private
    # Only allow a list of trusted parameters through.
    
      def user_params
        params.permit(:username, :password, :password_confirmation)
      end
end
