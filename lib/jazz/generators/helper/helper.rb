module Jazz
  module Generators
    class Helper < Thor::Group
    	include Thor::Actions
    	
    	attr_accessor :name
    	
    	def self.source_root
        File.join(File.dirname(__FILE__))
      end
    	
      def create
        create_helper
      end
      
      def create_helper
        template  "templates/helper.js", "app/helpers/#{name.downcase.pluralize}_helper.js"
      end
      
    end
  end
end