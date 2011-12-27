Jazz.Helper = function(){
  this._prepare();
};

Jazz.Helper.extend = function (protoProps, classProps) {
	var child = Jazz.Helper.inherits(this, protoProps, classProps);
	child.extend = this.extend;
  return child;
}

Jazz.Helper.ctor = function(){}

Jazz.Helper.inherits = function(parent, protoProps, staticProps) {
	var child;
	if (protoProps && protoProps.hasOwnProperty('constructor')) {
	  child = protoProps.constructor;
	} else {
	  child = function(){ return parent.apply(this, arguments); };
	}

	_.extend(child, parent);

	Jazz.Helper.ctor.prototype = parent.prototype;
	child.prototype = new Jazz.Helper.ctor();

	if (protoProps) _.extend(child.prototype, protoProps);

	if (staticProps) _.extend(child, staticProps);

	child.prototype.constructor = child;

	child.__super__ = parent.prototype;

  return child;
}
	  
Jazz.Helper.extend = function (protoProps, classProps) {
	var child = Jazz.Helper.inherits(this, protoProps, classProps);
	child.extend = this.extend;
  return child;
}

Jazz.Helper._prepare = function(){
  self = this;
}

Jazz.Helper.setParam = function (key, value, callback) {
  window.params[key] = value;
  $(window.params[key]).ready(
    function(){
      if(callback) (callback)()
    }
  );
  //
}



Jazz.Helper.prototype._prepare = function () {
  self = this;
}

