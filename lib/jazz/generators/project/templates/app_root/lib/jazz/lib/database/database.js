Jazz.Db = function () {
  this._prepare();
}

Jazz.Db.extend = Jazz.Db.create = Jazz.Helper.extend;

Jazz.Db.prototype._prepare = function(){
  this.models = {};
}

