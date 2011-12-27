Jazz.Route = {}

Jazz.Route.routes = {}

Jazz.Route.initialize = function(){
  Jazz.Route.navigate();
  $(window).hashchange(
    function(){
      Jazz.Route.navigate()
    }
  );
}

Jazz.Route.draw = function(routes){
  if (!routes) return this;
	var now = this.routes;
	
  for (var route in routes) {
    var val = routes[route];
        
    if (!_.isEqual(now[route], val)) {
      now[route] = val;
    }
        
  }
  return this;
}

Jazz.Route.navigate = function(){
    
  //set current url
  Jazz.Now.url = location.hash.replace( /^#/, '' );
    
  var current_url_parts = Jazz.Now.url.split('/');
    
  var match_rank = 0;
  var current_match_rank = 0;
  var best_matching_route = {};
  best_matching_route.params = [];
    
  _.each(
    this.routes,
    function(action, route){
      parts = route.split('/');
      for (var part in parts){
        if(parts[part] == current_url_parts[part]){
          current_match_rank++;
        }
      }
        
      if(current_match_rank > match_rank){
        best_matching_route.url = parts;
        match_rank = current_match_rank;
      }
      current_match_rank = 0;
    }
  );

  for (var part in best_matching_route.url){
    if(best_matching_route.url[part].search(":") >= 0){
      best_matching_route.params.push(current_url_parts[part]);
    }
  }
    
  best_matching_route.url = best_matching_route.url.join('/');
  best_matching_route.params = '"' + best_matching_route.params.join('","') + '"';
    
  best_matching_route_action = this.routes[best_matching_route.url];
       
	controller_action = best_matching_route_action.split('#');
  Jazz.Now.controller = controller_action[0];
  Jazz.Now.action = controller_action[1];
		
	return_function = new Function(Jazz.Now.controller + '.' + Jazz.Now.action + '(' + best_matching_route.params + ')');
		
	try {
    return return_function();
  }
  catch(err)
  {
    this.rescue();
  }
}

Jazz.Route.redirect = function(to){
  window.location.hash = to;
}

Jazz.Route.rescue = function(){
  delete Jazz.Now.controller;
  delete Jazz.Now.action;
  Jazz.Helper.showError('Cannot Find Route Or Action');
}

redirect = Jazz.Route.redirect;