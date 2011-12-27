Jazz.View = {};

Jazz.View.views = {};

Jazz.View.partials = {};

Jazz.View.add = function (name, html) {
  if (name.search("__") >= 0) {
    name = name.replace("__", '_');
    Jazz.View.partials[name] = html;
    Handlebars.registerPartial(name, html);
  } else {
    Jazz.View.views[name] = html;
  }
};

Jazz.View.render = function (params) {
  html = Jazz.View.views[params.view];

  template = Handlebars.compile(html);
  
  $(document).ready(
    function(){
      if(!params.data) params.data = {};
      window.current_view = jQuery(params.to).html(template(params.data));

      window.current_view.ready(
        function(){
          application_scenario.viewHasChanged();
          if(typeof params.scenario == "function"){
            (params.scenario)();
          }
        }
      );
      return window.current_view;
    }
  );
}

render = Jazz.View.render;