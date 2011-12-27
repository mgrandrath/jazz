var <%= name.singularize.capitalize %> = Jazz.Model.create(

    //configuration
    {
      table: create_<%= name.downcase.pluralize %>
    },

    //modelActions
   	{
   	},

   	//objectActions
   	{
   	}

);