module Jazz
  module Generators
    class Controller < Thor::Group
    	include Thor::Actions
    	
    	attr_accessor :name
    	
    	def self.source_root
        File.join(File.dirname(__FILE__))
      end
    	
      def create
        create_controller
      end
      
      def create_controller
        template  "templates/controller.js", "app/controllers/#{name.downcase.pluralize}_controller.js"
      end
      
    end
  end
end