module Jazz
  module Generators
    class Model < Thor::Group
    	include Thor::Actions
    	
    	attr_accessor :name, :attributes
    	
    	def self.source_root
        File.join(File.dirname(__FILE__))
      end
    	
      def create
        convert_attributes        
        create_model
        create_database
        create_fixture
      end
      
      def create_model
        template  "templates/model.js", "app/models/#{name.singularize.downcase}.js"
      end
      
      def create_database
        template  "templates/database.js", "db/create/create_#{name.pluralize.downcase}.js"
      end
      
      def create_fixture
        template  "templates/fixture.js", "db/fixtures/#{name.pluralize.downcase}.js"
      end
      
      def convert_attributes
        @attribute_hash = Hash.new
        
        attributes.each do |attribute|
          val = attribute.split(':')
          if val[0] && val[1]
            @attribute_hash[val[0]] = val[1]
          end
          
        end
        
        self.attributes = {}
        self.attributes = @attribute_hash
      end
      
      
      
    end
  end
end