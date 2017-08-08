class TicketsController < ApplicationController
  def index
  	@tickets = Ticket.all 
  	respond_to do |format|
  	  format.json { render json: @tickets }
    end
  end

  def show
  end

  def new
  end

  def create
  	respond_to do |format|
  	  format.json { render json: Ticket.create(ticket_params) }
  	end
  end

  def edit
  end

  def update
  end

  private

    def ticket_params
      params.require(:ticket).permit(:subject,:description)
    end
end
