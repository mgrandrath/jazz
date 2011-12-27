module Jazz
  module Generators
    class Scenario < Thor::Group
    	include Thor::Actions
    	
    	attr_accessor :name
    	
    	def self.source_root
        File.join(File.dirname(__FILE__))
      end
    	
      def create
        create_scenario
      end
      
      def create_scenario
        template  "templates/scenario.js", "app/scenarios/#{name.downcase.pluralize}_scenario.js"
      end
      
    end
  end
end