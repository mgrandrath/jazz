Jazz.Model.create = function(attributes){
  var child = function(params){
    this.initialize(params);
  }
  
  jQuery.extend(true, child, this, attributes.clazz);
  
  child.configuration = attributes.configuration

  jQuery.extend(true, child.prototype, this.prototype, attributes.object);
  
  child.prototype.configuration = attributes.configuration
    
  return child;
}

Jazz.Model.destroy = function (uid) {
  this.configuration.table.destroy(uid);
}

Jazz.Model.prototype.set = function (attributes) {
  var can = _.keys(this.configuration.table.columns);

  for (var attribute in attributes) {
		if (_.contains(can, attribute)) {
		  this.attributes[attribute] = attributes[attribute];
		  
		  getterName = 'get' + _(attribute).capitalize();
      setterName = 'set' + _(attribute).capitalize();
      
      if(!this[getterName]) this[getterName] = new Function ('return this.get("' + attribute + '")');
      if(!this[setterName]) this[setterName] = new Function ("value", 'this.set({' + attribute + ':value})');
      
      this[attribute] = attributes[attribute];
      
		}
  }
}

Jazz.Model.prototype.save = function () {
  this.configuration.table.add(this);
}


