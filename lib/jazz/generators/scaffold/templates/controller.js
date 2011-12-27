var <%= name.capitalize.pluralize %>Controller = Jazz.Controller.create(
  { 
  
    initialize : function(){
    
    },
     
    index      : function(){
      <%= name.downcase.pluralize -%> = <%= name.capitalize.singularize -%>.all(); 
      render({view: '<%= name.downcase.pluralize -%>_index', to: '#yield', data: {<%= name.downcase.pluralize -%>: <%= name.downcase.pluralize -%>}});
    },
    
    show       : function(){
      <%= name.downcase.singularize -%> = <%= name.capitalize.singularize -%>.findBy({uid: params['<%= name.downcase.singularize -%>_id']});
      render({view: '<%= name.downcase.pluralize -%>_show', to: '#yield', data: {<%= name.downcase.singularize -%>: <%= name.downcase.singularize -%>}});
    },
    
    make       : function(){
      <%= name.downcase.singularize -%> = new <%= name.capitalize.singularize -%>();
      render({view: '<%= name.downcase.pluralize -%>_new', to: '#yield', data: {<%= name.downcase.singularize -%>: <%= name.downcase.singularize -%>}});
    },
    
    edit       : function(){
      <%= name.downcase.singularize -%> = <%= name.capitalize.singularize -%>.findBy({uid: params['<%= name.downcase.singularize -%>_id']});
      render({view: '<%= name.downcase.pluralize -%>_edit', to: '#yield', data: {<%= name.downcase.singularize -%>: <%= name.downcase.singularize -%>}});
    },
    
    create     : function(){
      //TODO
      //<%= name.downcase.singularize -%> = new <%= name.capitalize.singularize -%>();
      //redirect('#/<%= name.downcase.pluralize -%>/:id');
    },
    
    update     : function(){
      //TODO
      //<%= name.downcase.singularize -%> = new <%= name.capitalize.singularize -%>();
      //redirect('#/<%= name.downcase.pluralize -%>/:id');
    },
    
    destroy    : function(){
      //TODO
      //<%= name.downcase.singularize -%> = <%= name.capitalize.singularize -%>.findBy({id: params[id]});
      //render({view: '<%= name.downcase.pluralize -%>_show', to: '#yield', data: {<%= name.downcase.singularize -%>: <%= name.downcase.singularize -%>}});
    }
  }
);

<%= name.downcase.pluralize -%>_controller = new <%= name.capitalize.pluralize -%>Controller;

