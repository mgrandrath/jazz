var Create<%= name.singularize.capitalize %> = Jazz.Db.create(
  {
    columns: {
      <% attributes.each_with_index do |(key, value), index| %>
        <%= key %>: {
          value: '',
          type: '<%= value %>'
        }<% unless attributes.length == index + 1 %>,<% end %>
      <% end %>
    }
  }
);

create_<%= name.downcase.pluralize %> = new Create<%= name.singularize.capitalize %>;