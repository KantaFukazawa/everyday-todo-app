Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  authenticated :user do
    root :to => 'calendars#index', :as => "user_authenticated_root"
  end

  resource :profile, only: [:show, :edit, :update]

  namespace :api do
    namespace :v1 do
      resources :events, only:[:index, :show , :new, :create]
    end
  end
  
  root :to => 'calendars#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
