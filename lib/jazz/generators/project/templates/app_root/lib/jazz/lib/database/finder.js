Jazz.Db.prototype.all = function (attributes) {
  var r = []
  _.each(this.models, function(model){
    model = attributes ? model.attributes : model;
    r.push(model)
  })
  return r;
}   
    
Jazz.Db.prototype.first = function () {
  return this.models[0];
}

Jazz.Db.prototype.first = function () {
  return this.models[0];
}

Jazz.Db.prototype.last = function () {    
  var length = -1;
  for(var i in this.models) length++;
      
  return this.models[length];
}

Jazz.Db.prototype.findBy = function (attributes) {
   objs = [];
  _.each(
    this.models,
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