Rails.application.routes.draw do
  
 post "/signup", to: "clients#create"
 get "/me", to: "clients#show"

 post "/login", to: "sessions#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
