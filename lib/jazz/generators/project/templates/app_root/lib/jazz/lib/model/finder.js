Jazz.Model.findBy = function (attributes) {
  return this._config.table.findBy(attributes);
}

Jazz.Model.all = function (plain) {
  return this._config.table.all(plain);
}

Jazz.Model.first = function () {
  return this._config.table.first();
}

Jazz.Model.last = function () {
  return this._config.table.last();
}

Jazz.Model.prototype.get = function (key) {
  if (!this.attributes) return this;
  if (!key) return this.attributes;
  return this.attributes[key];
}