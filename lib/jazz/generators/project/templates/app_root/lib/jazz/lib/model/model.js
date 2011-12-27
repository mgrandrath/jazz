Jazz.Model = function (attributes, options) {
  alert('#');
  this.initialize(attributes);
};

Jazz.Model.prototype.initialize = function (attributes) {
  this.attributes = {};
  this.attributes.uid = _.uniqueId();
  this.uid = this.attributes.uid;


  //Prepopulate OBJ
  defaults = {};

  for (var attribute in this.configuration.table.columns) {
    defaults[attribute] = this.configuration.table.columns[attribute].value;
  }

  _.extend(defaults, attributes);

  this.set(defaults);

}