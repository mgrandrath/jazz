//Do not touch this file
require.config(
  {
    baseUrl: "",
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
    }
  }
);

var JazzApplication = {}

JazzApplication.loadBase = function(){
  require(
    [
      'order!jquery/jquery',
      'order!underscore/underscore',
      'order!handlebars/handlebars',
      'order!haschange/hashchange',

      'order!jazz/module',
    ],
    function(){
      JazzApplication.loadGlue();
    }
  )
}

JazzApplication.loadGlue = function(){
  require(
    [
      'order!config/glue'
    ],
    function(){
      JazzApplication.loadApplication();
    }
  );
}

JazzApplication.loadApplication = function(){
  require(
    [
      'order!config/routes',
      <% @files.each_with_index do |file, index| %>'order!<%= file %>',
      <% end %>
      'order!config/application.js'
    ],
    function(){
      JazzApplication.runApplication();
    }
  );
}

JazzApplication.loadBase();