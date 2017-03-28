require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Crossover
  class Application < Rails::Application
    %w(services).each do |dir|
      config.autoload_paths << Rails.root.join('app', dir)
    end

    config.assets.prefix = '/backend-assets'
  end
end
