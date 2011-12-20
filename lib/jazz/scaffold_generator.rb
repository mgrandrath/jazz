module Jazz
  class ScaffoldGenerator < Thor::Group
    include Thor::Actions
    include Jazz::AppDetector
  
    desc "Creates a new Jazz scaffold"
  
    argument :name
    argument :attrs, :type => :array
  
    def self.source_root
      File.join(File.dirname(__FILE__), '..', '..')
    end
  
    def self.destination_root
      "#{name}"
    end
  
    def greeting
      $stdout.puts "Creating new Jazz scaffold, model controller and views for #{name}"
    end
  
    def build_the_model
      generate_model
      generate_db
    end
    
    def build_the_controller
      generate_controller
    end
    
    def build_the_views
      generate_views
    end
    
    def build_the_helper
      generate_helper
    end

    def build_the_glue
      generate_glue
    end
  
    def farewell
      $stdout.puts "Your scaffold is ready to rumble!"
    end

  end
end