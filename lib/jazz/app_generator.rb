module Jazz
  class AppGenerator < Thor::Group
    include Thor::Actions
    include Jazz::AppDetector
    
    desc "Creates a new Jazz app"
  
    argument :name
    
    def self.source_root
      File.join(File.dirname(__FILE__), '..', '..')
    end
  
    def greeting
      $stdout.puts "Creating new Jazz app #{name}"
    end
    
    def build_the_app
      directory "templates/app_root", new_app_path
      directory 'dist/jazz', "#{new_app_path}/lib/jazz"
      directory 'dist/hashchange', "#{new_app_path}/vendor/hashchange"
      directory 'dist/jquery', "#{new_app_path}/vendor/jquery"
      directory 'dist/mustache', "#{new_app_path}/vendor/mustache"
      directory 'dist/require', "#{new_app_path}/vendor/require"
      directory 'dist/underscore', "#{new_app_path}/vendor/underscore"
      
      template "templates/application.js", "#{new_app_path}/config/application.js"
      template "templates/index.html", "#{new_app_path}/index.html"
      
    end
  
    def farewell      
      $stdout.puts "Thank you for installing Jazz"
    end
    
  end
end