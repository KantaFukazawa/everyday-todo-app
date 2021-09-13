class EventsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :create, :update, :destroy]

  def index
    @events = Event.all
    @event = Event.new
  end

  def create
    @event = current_user.events.build(event_params)
    @event.save!
    render json: @event
  end

  # def update
  #   @event = current_user.events.find(params[:id])
  #   if @event.update(event_params)
  #     redirect_to root_path
  #   else
  #     flash.now[:error] = '更新できませんでした'
  #   end
  # end

  # def destroy
  #   @event = current_user.events.find(params[:id])
  #   event.destroy!
  #   redirect_to root_path, notice: '削除しました'
  # end

  private
  def event_params
    params.require(:event).permit(:title, :content, :start, :end)
  end

end
