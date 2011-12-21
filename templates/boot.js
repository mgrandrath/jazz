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

require(
  [
    'order!config/glue'
  ],
  function(){
    require(
      [
        'order!jazz/module',
      ],
      function(){
        require(
          [
            'order!config/routes',
            <% @files.each_with_index do |file, index| %>'order!<%= file %>',
            <% end %>'order!config/application.js'
          ]
        );
      }
    )
  }
);