var glue = [
  <% @files.each_with_index do |file, index| %>'<%= file %>'<% unless @files.length == index + 1 %>,
  <% end %><% end %>
]