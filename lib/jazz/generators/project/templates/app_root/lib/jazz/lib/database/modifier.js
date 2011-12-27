Jazz.Db.prototype.add = function (model) {
  obj = jQuery.extend(true, {}, model);
  obj._config.persist = true;
  this.models[obj.uid] = obj;
}

Jazz.Db.prototype.destroy = function (uid) {
  delete this.models[uid];
  return this;
}