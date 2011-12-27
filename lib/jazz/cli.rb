module Jazz
  module Generators
    class Cli < Thor
      include Thor::Actions

      ####################################################################################
      ####################################################################################   
      
      desc "server", "Lets play Jazz"
  		def server
    		system "rackup #{File.dirname(__FILE__)}/rack/config.ru"
  		end
  		
  		####################################################################################
  		####################################################################################
            
      desc "new [NAME]", "Generates new Jazz application…"
      def new name=nil
        unless name
          say "Please provide a Jazz Application name"
          exit 0
        end
        new_app = Jazz::Generators::Project.new
        new_app.name = name
        new_app.create
      end
      
      ####################################################################################
      ####################################################################################
      
      desc "generate [TYPE] [NAME] [ATTRIBUTES]", "Generates new Jazz Resource"
      def generate type=nil, name=nil, *attributes
        
        unless type
          say "Please provide a resource type"
          exit 0
        end
        
        unless name
          say "Please provide a resource name"
          exit 0
        end
        
        case type
          when "controller"
            new_controller = Jazz::Generators::Controller.new
            new_controller.name = name
            new_controller.create
          when "model"
            new_model = Jazz::Generators::Model.new
            new_model.name = name
            new_model.attributes = attributes
            new_model.create
          when "scenario"
            new_scenario = Jazz::Generators::Scenario.new
            new_scenario.name = name
            new_scenario.create
          when "helper"
            new_helper = Jazz::Generators::Helper.new
            new_helper.name = name
            new_helper.create
          when "scaffold"
            new_scaffold = Jazz::Generators::Scaffold.new
            new_scaffold.name = name
            new_scaffold.attributes = attributes
            new_scaffold.create
          else
            say "Available types are: scaffold, controller, model, helper and scenario"
            exit 0
        end
      end
      
      ####################################################################################
      ####################################################################################
      
    end
  end
end
