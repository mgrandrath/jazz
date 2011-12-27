var <%= name.downcase.pluralize -%>Scenario = Jazz.Scenario.create(
  {
    initialize:function () {}
  }
);

<%= name.downcase.pluralize -%>_scenario = new <%= name.downcase.pluralize -%>Scenario;