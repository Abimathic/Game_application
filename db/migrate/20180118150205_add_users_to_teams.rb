class AddUsersToTeams < ActiveRecord::Migration[5.1]
  def change
    add_column :teams, :users, :text, array:true, default: []
  end
end
