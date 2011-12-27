var <%= name.singularize.capitalize %> = {}

<%= name.singularize.capitalize %>.initialize = function(){
  Jazz.Route.initialize();
  application_scenario.applicationHasLaunched();
}

$(document).ready(
  function(){
    <%= name.singularize.capitalize %>.initialize();
  }
);