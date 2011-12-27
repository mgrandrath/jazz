Jazz.Model.create = function (settings, model, object) {
  _.extend(this._config, settings);
  _.extend(this, model);
  
  obj = {};
  obj._config = {}
  _.extend(obj._config, settings);
  _.extend(obj, object);
  
  var child = Jazz.Helper.inherits(this, obj);
  
  child.extend = this.extend;
  
  return child;
}

Jazz.Model.destroy = function (uid) {
  this._config.table.destroy(uid);
}

Jazz.Model.prototype.set = function (attributes) {
  var can = _.keys(this._config.table.columns);

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
  this._config.table.add(this);
}


