Rails.application.routes.draw do

#  resources :reviews, only: [:index, :show, :create, :update, :destroy]
resources :exercises, only: [:index, :create, :destroy]
  
 post "/signup", to: "clients#create"
 get "/me", to: "clients#show"

 post "/login", to: "sessions#create"
 delete "/logout", to: "sessions#destroy"

#  get "/exercises", to: "exercises#index"
#  post "/exercises", to: "exercises#create"
#  delete "/exercises/:name", to: "exercises#destroy"

 post "/reviews", to: "reviews#create"
 get "/reviews", to: "reviews#index"
 get "/reviews/:id", to: "reviews#show"
 patch "/reviews/:id", to: "reviews#update"
 delete "/reviews/:id", to: "reviews#destroy"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
