module Jazz
  class ModelGenerator < Thor::Group
    include Thor::Actions
    include Jazz::AppDetector

    desc "Creates a new Jazz model"
    argument :name
    argument :attrs, :type => :array
  
    def self.source_root
      File.join(File.dirname(__FILE__), '..', '..')
    end
  
    def greeting
      $stdout.puts "Creating new Jazz model #{name}"
    end
  
    def build_the_model
      template "templates/model.js", "#{app_path}/app/models/#{name.downcase}.js"
      template "templates/db.js", "#{app_path}/db/create_#{name.downcase.pluralize}.js"
    end
  
    def farewell
      $stdout.puts "Your model is ready to rock!"
    end
  end
end