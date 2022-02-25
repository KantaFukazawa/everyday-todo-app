class Api::V1::EventsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :create, :update, :destroy]

  def index
    events = Event.all.order(:start)
    render json: events
  end

  def show
  end

  def create
    event = current_user.events.build(event_params)
    if event.save
      render json: event
    else
      render json: event.errors, status: 422
    end
  end

  def update
    event = current_user.events.find(params[:id])
    if events.update(event_params)
      render json: events
    else
      render json: events.errors, status: 422
    end
  end

  def destroy
    event = current_user.events.find(params[:id])
    event.destroy!
    redirect_to root_path, notice: '削除しました'
  end

  private
  def event_params
    params.require(:event).permit(:title, :content, :start, :end)
  end

end
