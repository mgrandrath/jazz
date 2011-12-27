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
      render({view: '<%= name.downcase.pluralize -%>_show', to: '#yield', data: <%= name.downcase.singularize -%>});
    },
    
    make       : function(){
      render({view: '<%= name.downcase.pluralize -%>_new', to: '#yield'});
    },
    
    edit       : function(){
      <%= name.downcase.singularize -%> = <%= name.capitalize.singularize -%>.findBy({uid: params['<%= name.downcase.singularize -%>_id']});
      render({view: '<%= name.downcase.pluralize -%>_edit', to: '#yield', data: <%= name.downcase.singularize -%>});
    },
    
    create     : function(){
      <%= name.downcase.singularize -%> = new <%= name.capitalize.singularize -%>(params['<%= name.downcase.singularize -%>']);
      <%= name.downcase.singularize -%>.save();
      redirect('#/<%= name.downcase.pluralize -%>/' + <%= name.downcase.singularize -%>.uid);
    },
    
    update     : function(){
      <%= name.downcase.singularize -%> = <%= name.capitalize.singularize -%>.findBy({uid: params['<%= name.downcase.singularize -%>_id']});
      <%= name.downcase.singularize -%>.set(params.<%= name.downcase.singularize -%>);
      <%= name.downcase.singularize -%>.save();
      redirect('#/<%= name.downcase.pluralize -%>/' + <%= name.downcase.singularize -%>.uid);
    },
    
    destroy    : function(){
      <%= name.downcase.singularize -%> = <%= name.capitalize.singularize -%>.findBy({uid: params['<%= name.downcase.singularize -%>_id']}).destroy();
      redirect('#/<%= name.downcase.pluralize -%>');
    }
  }
);

<%= name.downcase.pluralize -%>_controller = new <%= name.capitalize.pluralize -%>Controller;

