var <%= name.singularize.capitalize %> = Jazz.Model.create(
  {
    _config: {
      
      table: create_<%= name.downcase.pluralize %>
      
    }
  }
);