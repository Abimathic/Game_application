class GamesController < ApplicationController
	before_action :set_game, only: [:show, :edit, :update, :destroy]

  def new
  	@game = Game.new
  	2.times do 
  		@game.team_details.build
    end
  end

  def create
    @game = Game.new(game_params)
    respond_to do |format|
      if @game.save
        format.html { redirect_to games_path, notice: 'Game was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @game.update(game_params)
        format.html { redirect_to games_path, notice: 'Game was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @game.destroy
    respond_to do |format|
      format.html { redirect_to games_path, notice: 'Game was successfully destroyed.' }
    end
  end


  def index
  end

  def data_team_details
  end

  private
  	def set_game
      @game = Game.find(params[:id])
   	end

   	def game_params
   		params.require(:game).permit(:name, team_details_attributes: [:id, :team_id, :score, :win, :loss])
   	end
end
