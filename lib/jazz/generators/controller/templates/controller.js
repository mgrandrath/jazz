var <%= name.capitalize.pluralize %>Controller = Jazz.Controller.create(
  { 
  
    initialize : function(){
    
    },
     
    index      : function(){
    
    },
    
    show       : function(){
    
    },
    
    make       : function(){
    
    },
    
    edit       : function(){
    
    },
    
    create     : function(){
    
    },
    
    update     : function(){
    
    },
    
    destroy    : function(){
    
    }
  }
);

<%= name.downcase.pluralize -%>_controller = new <%= name.capitalize.pluralize -%>Controller;
