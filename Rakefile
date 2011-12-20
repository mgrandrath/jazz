# encoding: utf-8

require 'rubygems'
require 'rake'
require 'bundler'
require 'jeweler'
require 'rake/testtask'
require 'rcov/rcovtask'

PKG_FILES = FileList[
	'bin/**/*',
	'dist/**/*',
	'lib/**/*',
	'templates/**/*'
]

begin
  Bundler.setup(:default, :development)
  rescue Bundler::BundlerError => e
  $stderr.puts e.message
  $stderr.puts "Run `bundle install` to install missing gems"
  exit e.status_code
end


Jeweler::Tasks.new do |gem|
  # gem is a Gem::Specification... see http://docs.rubygems.org/read/chapter/20 for more options
  gem.name = "jazz-jss"
  gem.version = "0.0.2"
  gem.executables = "jazz"
  gem.homepage = "https://github.com/purpled/jazz"
  gem.license = "MIT"
  gem.summary = "A lightweight javascript MVC framework."
  gem.email = "f.schade@purpled.de"
  gem.authors = ["Florian Schade"]
  gem.files = PKG_FILES.to_a
  gem.require_path = "lib"
  gem.has_rdoc = false
  # dependencies defined in Gemfile
end

Jeweler::RubygemsDotOrgTasks.new
