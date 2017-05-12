Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :stores do
        get '/find', to: 'find_stores#index'
      end
      resources :stores, only: [:index, :show]
      resources :store_types
    end
  end
end
