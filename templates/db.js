var Create<%= name.capitalize.pluralize %> = Jazz.Db.create(
  {
    
    columns: {
      <% attrs.each_with_index do |attr, index| %>
        <%= attr %>: {
          value: ''
        }<% unless attrs.length == index + 1 %>,<% end %>
      <% end %>
    },
  }
);

create_<%= name.downcase.pluralize %> = new Create<%= name.capitalize.pluralize %>;