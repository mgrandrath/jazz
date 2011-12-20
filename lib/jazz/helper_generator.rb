module Jazz
  class HelperGenerator < Thor::Group
    include Thor::Actions
    include Jazz::AppDetector
  
    desc "Creates a new Jazz helper"
  
    argument :name
  
    def self.source_root
      File.join(File.dirname(__FILE__), '..', '..')
    end
  
    def greeting
      $stdout.puts "Creating new Jazz helper #{name.pluralize}Helper"
    end
  
    def build_the_helper
      generate_helper
    end
    
    def build_the_glue
      generate_glue
    end
    
    def farewell
      $stdout.puts "Your helper is ready to rule!"
    end
  end
end