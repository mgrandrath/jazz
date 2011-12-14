var <%= name.capitalize.pluralize -%>Controller = Jazz.Controller.create(
  {
    initialize: function(){},
    
    index: function(){},
    
    show: function(){},
    
    create: function(){},
    
    edit: function(){},
    
    destroy: function(){},
    
  }
);

<%= name.pluralize -%>_controller = new <%= name.capitalize.pluralize -%>Controller;