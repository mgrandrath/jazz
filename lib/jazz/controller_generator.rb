module Jazz
  class ControllerGenerator < Thor::Group
    include Thor::Actions
    include Jazz::AppDetector
  
    desc "Creates a new Jazz controller"
  
    argument :name
  
    def self.source_root
      File.join(File.dirname(__FILE__), '..', '..')
    end
  
    def greeting
      $stdout.puts "Creating new Jazz controller #{name.pluralize}Controller"
    end
  
    def build_the_controller
      generate_controller
    end
    
    def build_the_views
      generate_views
    end
    
    def build_the_glue
      generate_glue
    end
  
    def farewell
      $stdout.puts "Your controller is ready to rule!"
    end
  end
end