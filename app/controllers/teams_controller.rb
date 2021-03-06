class TeamsController < ApplicationController
	before_action :set_team, only: [:show, :edit, :update, :destroy]

  def new
  	@team = Team.new
  end

  def create
  	@team = Team.new(name: params[:team][:name], users: params[:team][:users].reject(&:blank?))
    respond_to do |format|
      if @team.save
        format.html { redirect_to teams_path, notice: 'Team was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  def index
  	@teams = Team.all
  end

  def edit
  end
  def update
    respond_to do |format|
      if @team.update(name: params[:team][:name], users: params[:team][:users].reject(&:blank?))
        format.html { redirect_to teams_path, notice: 'Team was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  def destroy
    @team.destroy
    respond_to do |format|
      format.html { redirect_to teams_path, notice: 'Team was successfully destroyed.' }
    end
  end


  private
  def set_team
      @team = Team.find(params[:id])
   end


  def team_params
  	params.require(:user).permit(:name, users: [])
  end
end
