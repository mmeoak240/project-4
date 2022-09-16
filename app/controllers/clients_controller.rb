class ClientsController < ApplicationController

  def create
    client = Client.create(user_params)
    if client.valid?
      session[:client_id] = client.id
      render json: client, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    client = Client.find_by(id: session[:user_id])
    render json: client
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :goals)
  end

end
