source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.0'
# Use postgresql as the database for Active Record
gem 'pg', '>= 0.18', '< 2.0'
# Use Puma as the app server
gem 'puma', '~> 3.11'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use bulma.io for stylesheets framework
gem 'bulma-rails', '~> 0.7.1'
gem 'bulma-extensions-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false
# Haml is a templating engine for HTML.
gem 'haml', '~> 5.0', '>= 5.0.4'
# Central point to collect locale data for use in Ruby on Rails.
gem 'rails-i18n', '~> 5.0', '>= 5.0.4'
# Font-Awesome web fonts and stylesheets as a Rails engine for use with the
# asset pipeline.
gem 'font-awesome-rails'
# This gem helps you to add this fantastic icon collection.
gem 'material_icons'
# Provides a collection of all country flags in SVG
gem 'flag-icons-rails'
# Devise is a flexible authentication solution for Rails based on Warden.
gem 'devise'
# Simple Form aims to be as flexible as possible while helping you with powerful
# components to create your forms.
gem 'simple_form'
# Provides a simple helper to get an HTML select list of countries using
# the ISO 3166-1 standard.
gem 'country_select'

group :development, :test do
  gem 'awesome_print', require: 'ap'
  gem 'better_errors'
  gem 'binding_of_caller', '~> 0.7.2'
  gem 'factory_bot'
  gem 'pry-rails', group: :development
  gem 'rails-perftest'
  gem 'rspec-rails', '~> 3.7'
  gem 'rubocop', require: false
  # SimpleCov is a code coverage analysis tool for Ruby.
  gem 'simplecov', require: false, group: :test
end

group :development do
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Access an interactive console on exception pages or by calling
  # 'console' anywhere in the code.
  gem 'web-console', '>= 3.3.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '>= 2.15', '< 4.0'
  gem 'selenium-webdriver'
  # Easy installation and use of chromedriver to run system tests with Chrome
  gem 'chromedriver-helper'
end
