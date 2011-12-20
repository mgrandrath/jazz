Jazz.Model = function (attributes, options) {
  this.initialize(attributes);
};


Jazz.Model._config = {}

Jazz.Model.create = function (protoProps, classProps) {
  this._config.table = protoProps._config.table;
  var child = Jazz.Helper.inherits(this, protoProps, classProps);
  child.extend = this.extend;
  return child;
}

Jazz.Model.findBy = function (attributes) {
  var objs = [];
  _.each(
    this._config.table.models,
    function (model) {

      var add = false;

      for (var attribute in attributes) {
        if (!model.has(attribute)) continue;
        if (model.get(attribute) != attributes[attribute]) continue;
        add = true;
      }

      if (add) objs.push(model);

    }
  );
  return objs
}

Jazz.Model.prototype.initialize = function (attributes) {
  this.attributes = {};
  this.uid = _.uniqueId();


  //Prepopulate OBJ
  defaults = {};

  for (var attribute in this._config.table.columns) {
    defaults[attribute] = this._config.table.columns[attribute].value;
  }

  _.extend(defaults, attributes);

  this.set(defaults);

}

Jazz.Model.prototype.set = function (attributes) {
  var can = _.keys(this._config.table.columns);

  for (var attribute in attributes) {

    if (_.contains(can, attribute)) {
      this.attributes[attribute] = attributes[attribute];
    }
  }
}

Jazz.Model.prototype.get = function (key) {
  if (!this.attributes) return this;
  if (!key) return this.attributes;
  return this.attributes[key];
}

Jazz.Model.prototype.has = function (attribute) {
  return this.attributes[attribute] != null;
}

Jazz.Model.prototype.save = function () {
  this._config.table.add(this);
}