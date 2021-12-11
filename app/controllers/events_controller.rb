class EventsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :create, :update, :destroy]

  def index
    @events = Event.all
    @event = Event.new
    respond_to do |format|
      format.html
      format.json {render :json => @events}
    end
  end

  def show
    date = params[:date]
    query = "select * from events where to_char(start, 'YYYY-MM-DD') = ?"
    @event = Event.find_by_sql([query, date]);
  end

  def create
    @event = current_user.events.build(event_params)
    @event.save!
    respond_to do |format|
      format.html
      format.json {render :json => @events}
    end
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
