$LOAD_PATH.unshift File.join(File.dirname(__FILE__), '..')

require 'sprockets'
require 'sprockets/templates/handlebars'


APP_ROOT = File.expand_path('.')

map '/' do
  environment = Sprockets::Environment.new
	
	environment.register_engine '.handlebars', Handlebars
  environment.append_path "#{APP_ROOT}/"

  run environment
end