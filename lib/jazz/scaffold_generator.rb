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
      template "templates/model.js", "#{app_path}/app/models/#{name.downcase}.js"
      template "templates/db.js", "#{app_path}/db/create_#{name.downcase.pluralize}.js"
    end
    
    def build_the_controller
      template "templates/scaffold_controller.js", "#{app_path}/app/controllers/#{name.downcase.pluralize}_controller.js"
    end
    
#    def build_the_views
#      template "templates/scaffold_index.html", "#{public_path}/#{name.downcase.pluralize}.html"
#      template "templates/scaffold_partial.html.mustache", "#{app_path}/app/views/#{name.downcase.pluralize}/_#{name.downcase}.html.mustache"
#      template "templates/scaffold_edit.html.mustache", "#{app_path}/app/views/#{name.downcase.pluralize}/edit.html.mustache"
#    end
  
    def farewell
      $stdout.puts "Your scaffold is ready to rumble!"
    end

  end
end