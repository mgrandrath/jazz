var Jazz = {
  _:{
    requires:[
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
      'config/routes.js',
      'config/glue.js'
    ]
  },
  Helper:{
    addOrderToRequires:function (collection, path) {
      path = path ? path : '';
      //Load order is importent so add it by default
      for (file in collection) {
        collection[file] = collection[file] != "" ? 'vendor/require/order!' + path + collection[file] : "";
      }
      return collection;
    }
  },
  Now:{},
  Config:{}
}


require(
  {
    baseUrl:""
  },
  Jazz.Helper.addOrderToRequires(Jazz._.requires),
  function () {
    _.extend(
      Jazz.Helper.getApp(),
      {
        _:{
          requires:[]
        }
      }
    );

    _.each(
      Glue,
      function (val, key) {
        var path;
        switch (key) {
          case "Db":
            path = "db/"
            break;
          default:
            path = "app/" + key + '/'
            break;
        }

        Jazz.Helper.getApp()._.requires.push(Jazz.Helper.addOrderToRequires(val, path));
      }
    );

    Jazz.Helper.getApp()._.requires = _.flatten(Jazz.Helper.getApp()._.requires);

    require(
      Jazz.Helper.getApp()._.requires,
      function () {
        eval(Jazz.Config.appName + '.initialize()');
        Jazz.Route.initialize();
      }
    );
  }
);