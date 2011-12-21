var ApplicationController = Jazz.Controller.create(
  {
    welcomeToJazz: function(){
      alert(
        'Welcome to Jazz.. Please add your own routes to config/routes.js'
      )
    }
  }
);

application_controller = new ApplicationController;
