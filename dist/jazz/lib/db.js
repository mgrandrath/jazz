Jazz.Db = function () {
  this._prepare();
}

Jazz.Db.extend = Jazz.Db.create = Jazz.Helper.extend;

_.extend(
  Jazz.Db.prototype,
  {
    //
    _prepare:function () {
      //Resets the attributes per OBJ
      this.models = {};
    },

    add:function (model) {
      obj = jQuery.extend(true, {}, model);
      obj._config.persist = true;
      this.models[obj.uid] = obj;
    },

    all:function () {
      return this.models;
    },

    first:function () {
      return _.first(this.models);
    },

    findBy:function (query) {
      var objs = [];
      _.each(
        this.models,
        function (model) {
          if (model.hasPropertiesWithValues(query)) objs.push(model);
        }
      );
      return objs
    }
  }
);