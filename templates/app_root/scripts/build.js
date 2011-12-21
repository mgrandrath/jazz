({
    paths: {
      order:       'vendor/require/order',
      jquery:      'vendor/jquery/',
      underscore:  'vendor/underscore/',
      handlebars:  'vendor/handlebars/',
      haschange:   'vendor/hashchange/',
      
      jazz:        'lib/jazz/',
      
      helpers:     'app/helpers/',
      controllers: 'app/controllers/',
      models:      'app/models/',
      views:       'app/views/'
    },
    
    appDir: "../development/",
    
    baseUrl: "./",
    
    dir: "../release",
    
    optimize: "uglify",
    
    modules: [
        {
            name: "config/boot"
        }
    ]
})