module Jazz
  module Generators
    class Project < Thor::Group
    	include Thor::Actions
    	
    	attr_accessor :name
    	
    	def self.source_root
        File.join(File.dirname(__FILE__))
      end
    	
      def create
        unless !File.directory?(self.name) 
          say "#{name} already exists"
          exit 0
        end
        create_project
      end
      
      def create_project
        directory "templates/app_root", name
        template  "templates/application.js", "#{name}/config/application.js"
      end
      
    end
  end
end