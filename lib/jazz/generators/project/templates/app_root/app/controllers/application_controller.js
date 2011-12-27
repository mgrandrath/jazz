var ApplicationController = Jazz.Controller.create(
  {
    initialize:function () {
      render( { view: 'layouts_index', to: 'body' } );
    }
  }
);

application_controller = new ApplicationController;
