Jazz.Model = function (attributes, options) {
  this.initialize(attributes);
};

Jazz.Model._config = {}

Jazz.Model.prototype.initialize = function (attributes) {
  this.attributes = {};
  this.attributes.uid = _.uniqueId();
  this.uid = this.attributes.uid;


  //Prepopulate OBJ
  defaults = {};

  for (var attribute in this._config.table.columns) {
    defaults[attribute] = this._config.table.columns[attribute].value;
  }

  _.extend(defaults, attributes);

  this.set(defaults);

}