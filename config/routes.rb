Rails.application.routes.draw do
  get 'jasmine', to: 'jasmine#index' if Rails.env.development? || Rails.env.test?
end
