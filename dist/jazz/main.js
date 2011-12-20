var Jazz = {
  _:{
    _app: "",
    _files: [
      'vendor/jquery/jquery.js',
      'vendor/hashchange/jquery.ba-hashchange.js',
      'vendor/mustache/mustache.js',
      'vendor/underscore/underscore.js',
      'lib/jazz/lib/helper.js',
      'lib/jazz/lib/model.js',
      'lib/jazz/lib/db.js',
      'lib/jazz/lib/route.js',
      'lib/jazz/lib/view.js',
      'lib/jazz/lib/controller.js',
      'config/application.js',
      'config/glue.js',
      'config/routes.js'
    ]
  },
  
  Helper: function(){},
  Now: {},
  initialize: function(){
    this.load(
      glue,
      function(){
        window[Jazz._._app].initialize();
        Jazz.Route.initialize();
      }
    );
  },
  
  load: function(path, callback){
    
    if (!path) return this;
    
    files = [];
    
    if (typeof path == "string")
      files.push(path);
    else
      files = path;
    
    for (file in files) {
      files[file] = 'vendor/require/order!' + files[file];
    }
    
    require(
      {
        baseUrl:""
      },
      files,
      callback
    );    
  },
  
  setup: function(name){
    //Set Appname
    this._._app = name;
  }
}

Jazz.load(Jazz._._files, function(){
  Jazz.initialize();
});