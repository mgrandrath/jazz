module Jazz
  module Generators
    class Scaffold < Thor::Group
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
        create_controller
        create_helper
        create_scenario
        create_views
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
      
      def create_views
        template  "templates/view_form.handlebars", "app/views/#{name.pluralize.downcase}/_form.handlebars"
        template  "templates/view_edit.handlebars", "app/views/#{name.pluralize.downcase}/edit.handlebars"
        template  "templates/view_index.handlebars", "app/views/#{name.pluralize.downcase}/index.handlebars"
        template  "templates/view_new.handlebars", "app/views/#{name.pluralize.downcase}/new.handlebars"
        template  "templates/view_show.handlebars", "app/views/#{name.pluralize.downcase}/show.handlebars"
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
      
      def create_controller
        template  "templates/controller.js", "app/controllers/#{name.downcase.pluralize}_controller.js"
      end
      
      def create_helper
        template  "templates/helper.js", "app/helpers/#{name.downcase.pluralize}_helper.js"
      end
      
      def create_scenario
        template  "templates/scenario.js", "app/scenarios/#{name.downcase.pluralize}_scenario.js"
      end
      
    end
  end
end