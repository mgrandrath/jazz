Jazz.Model = function(attributes, options){

  this._prepare(attributes);
  this.initialize();
};

Jazz.Model.extend = Jazz.Model.create = Jazz.Helper.extend;

_.extend(
  Jazz.Model.prototype,
  {
    //initialize function
    initialize: function(){},
    
    //
    _prepare: function(attributes){

    	//Resets the attributes per OBJ
      this.attributes = {};
      
      //Resets the _config and combine per OBJ
      _config = {
        uid: _.uniqueId(),
      	persist: false
      }
      this._config = _.extend({}, this._config, _config);
      
      //Prepopulate OBJ
      defaults = {};
      
      for(var attr in window[this._config.table].columns){
        defaults[attr] = window[this._config.table].columns[attr].value;
      }
      
      _.extend(defaults, attributes);
      
      this.set(defaults);
      
    },
    
    //
    toJson : function() {
      return _.clone(this.attributes);
    },
    
    //
    has : function(attr) {
      return this.attributes[attr] != null;
    },
    
    //
    hasPropertiesWithValues : function(query) {
      
      size = _.size(query);
      i = 0;

      for (var key in query) {
        if (!this.has(key)) continue;
        if (this.get(key) != query[key]) continue;
        i++;
      }
      
      return i == size ? true : false;
      
    },
    
    //
    set: function(attrs){
      if (!attrs) return this;
      
			var now = this.attributes;
			var can = _.keys(window[this._config.table].columns);

      for (var attr in attrs) {
        if (_.contains(can, attr) ) {
          now[attr] = attrs[attr];
        } else {
          Jazz.Helper.showError('Cannot add ' + attr);
        }
      }
      
      return this;
    },
    
    //
    get: function(key){
      if (!this.attributes) return this;
      if (!key) return this.attributes;
      return this.attributes[key];
    },
    
    uid: function(){
      return this._config.uid;
    },
    
    //
    remove: function(key){
      if (!key) return this;
      delete this.attributes[key];
      return this;
    },
    
    //
    create: function(attributes){
      this.validate.atCreate();
      this.set(attributes);
      window[this._config.table].add(this);
    },
    
    update: function(attributes){
      this.validate.atUpdate();
      this.set(attributes);
      window[this._config.table].add(this);
    },
    
    validate: {
      atCreate: function(){},
      atUpdate: function(){},
    }

  }
);