Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  authenticated :user do
    root :to => 'events#index', :as => "user_authenticated_root"
    resources :events, only:[:index, :show , :new, :create] 
  end
  root 'top#index'
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
