module Jazz
  
  module AppDetector
    
    def new_app_path
      @new_app_path ||= if rack_app?
        $stdout.puts "public folder detected, installing to public/javascripts"
        'public/javascripts'
      else
        name
      end
    end
    
    def app_path
      @app_path ||= if rack_app?
        $stdout.puts "public folder detected, installing to public/javascripts"
        'public/javascripts'
      else
        '.'
      end
    end
    
    def public_path
      @public_path ||= if rack_app?
        'public'
      else
        '.'
      end
    end
    
    def prefix
      '/public/' if rack_app?
    end
    
    def rack_app?
      File.exists?('public')
    end
    
    def generate_controller
      template "templates/controller.js", "#{app_path}/app/controllers/#{name.downcase.pluralize}_controller.js"
    end
    
    def generate_model
      template "templates/model.js", "#{app_path}/app/models/#{name.downcase}.js"
    end
    
    def generate_db
      template "templates/db.js", "#{app_path}/db/create_#{name.downcase.pluralize}.js"
    end
    
    def generate_helper
      template "templates/helper.js", "#{app_path}/app/helpers/#{name.downcase.pluralize}_helper.js"
    end
    
    def generate_views
      empty_directory "#{app_path}/app/views/#{name.downcase.pluralize}"
      template "templates/view_create.html", "#{app_path}/app/views/#{name.downcase.pluralize}/create.html"
      template "templates/view_index.html", "#{app_path}/app/views/#{name.downcase.pluralize}/index.html"
      template "templates/view_show.html", "#{app_path}/app/views/#{name.downcase.pluralize}/show.html"
      template "templates/view_update.html", "#{app_path}/app/views/#{name.downcase.pluralize}/update.html"
    end
    
    def generate_glue
      @files = Dir.glob('db/*') + Dir.glob('app/models/*') + Dir.glob('app/helpers/*') + Dir.glob('app/controllers/*')
		  puts @files
      template "templates/boot.js", "#{app_path}/config/boot.js", {:force => true}
    end
    
  end
  
end