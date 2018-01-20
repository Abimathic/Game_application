Rails.application.routes.draw do
 
  resources :users, :teams
  resources :games do
  	 collection do
  	 	get :data_team_details
  	 end
  end
  root :to => "users#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
