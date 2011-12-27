Jazz.Model.findBy = function (attributes) {
  return this.configuration.table.findBy(attributes);
}

Jazz.Model.all = function (plain) {
  return this.configuration.table.all(plain);
}

Jazz.Model.first = function () {
  return this.configuration.table.first();
}

Jazz.Model.last = function () {
  return this.configuration.table.last();
}

Jazz.Model.prototype.get = function (key) {
  if (!this.attributes) return this;
  if (!key) return this.attributes;
  return this.attributes[key];
}