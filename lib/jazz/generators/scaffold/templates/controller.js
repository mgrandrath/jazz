var <%= name.capitalize.pluralize %>Controller = Jazz.Controller.create(
  { 
  
    initialize : function(){
    
    },
     
    index      : function(){
      users = User.all;
      render({view: 'users_index', to: '#yield', data: {users: users}});
    },
    
    show       : function(){
      user = User.findBy({id: params[id]});
      render({view: 'users_show', to: '#yield', data: {user: user}});
    },
    
    make       : function(){
      user = new User();
      render({view: 'users_new', to: '#yield', data: {user: user}});
    },
    
    edit       : function(){
      user = User.findBy({id: params[id]});
      render({view: 'users_show', to: '#yield', data: {user: user}});
    },
    
    create     : function(){
      user = new User();
      redirect('#/users/:id');
    },
    
    update     : function(){
      user = new User();
      redirect('#/users/:id');
    },
    
    destroy    : function(){
      user = User.findBy({id: params[id]});
      render({view: 'users_show', to: '#yield', data: {user: user}});
    }
  }
);

<%= name.downcase.pluralize -%>_controller = new <%= name.capitalize.pluralize -%>Controller;
