Rails.application.routes.draw do
  get 'welcome/index'
  root 'welcome#index'

  def default_url_options(_options = {})
    { locale: I18n.locale == I18n.default_locale ? nil : I18n.locale }
  end
end
