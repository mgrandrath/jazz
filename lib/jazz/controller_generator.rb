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
      template "templates/controller.js", "#{app_path}/app/controllers/#{name.downcase}_controller.js"
      empty_directory "#{app_path}/app/views/#{name.downcase}"
    end
  
    def farewell
      $stdout.puts "Your controller is ready to rule!"
    end
  end
end