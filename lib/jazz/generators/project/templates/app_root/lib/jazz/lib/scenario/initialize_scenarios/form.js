var FormScenario = Jazz.Scenario.create(
  {
    bindObjectsToAction: function(){
      jQuery('form').live(
        'submit',
        function(evt){
          evt.preventDefault();
          var form_object = $(this).data('object');
          var form_params = $(this).serializeJSON();
					var url = $(this).attr('action');         
          $(form_params).ready(function(){
            window.params[form_object] = form_params;
            redirect(url)
          })
        }
      );
    }
  }
);

form_scenario = new FormScenario;
form_scenario.bindObjectsToAction();