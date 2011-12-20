Jazz.Route = { 
  routes: {},
  
  initialize: function(){
    Jazz.Route.navigate();
    $(window).hashchange(
      function(){
        Jazz.Route.navigate()
      }
    );
    
  },
  
  draw: function(routes){
    if (!routes) return this;
		  var now = this.routes;
			
      // Update attributes.
      for (var route in routes) {
        var val = routes[route];
        
        if (!_.isEqual(now[route], val)) {
          now[route] = val;
        }
        
      }

    return this;
  },
  
  navigate: function(){

    action = this.getActionForRoute(location.hash.replace( /^#/, '' ))
    
    if (!action) {
      this.rescue();
      return this
    };
    
    var parts = action.split('#');
    Jazz.Now.controller = parts[0];
    Jazz.Now.action = parts[1];
    
    func = new Function(Jazz.Now.controller + '.' + Jazz.Now.action + '()');
    
    try {
      return func();
    }
    catch(err)
    {
      this.rescue();
    }
  },
  
  getActionForRoute: function(route){
			
      Jazz.Now.url = route;
      
      action = route == "" ? '/' : route;
      action = this.routes[route] ? this.routes[route] : false;
  		return action;
  },
  
  redirect: function(to){
  
  },
  
  rescue: function(){
    delete Jazz.Now.controller;
    delete Jazz.Now.action;
    Jazz.Helper.showError('Cannot Find Route Or Action');
  },
  
};
