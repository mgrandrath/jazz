var <%= name.capitalize.pluralize %>Helper = Jazz.Helper.extend(
  {
    doHello: function(){
      alert('#');
    }    
  }
);

<%= name.downcase.pluralize -%>_helper = new <%= name.capitalize.pluralize -%>Helper;
