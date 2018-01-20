class CreateTeamDetails < ActiveRecord::Migration[5.1]
  def change
    create_table :team_details do |t|
      t.integer :team_id
      t.integer :score
      t.integer :win
      t.integer :loss
      t.integer :game_id

      t.timestamps
    end
  end
end
