Rails.application.routes.draw do
  resources :spreadsheets
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'spreadsheets#index'
end
