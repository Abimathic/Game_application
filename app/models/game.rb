class Game < ApplicationRecord
	has_many :team_details, dependent: :destroy
  	accepts_nested_attributes_for :team_details
end
