Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  authenticated :user do
    root :to => 'schedules#index', :as => "user_authenticated_root"
  end
  root 'top#index'
  get 'schedules/show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
