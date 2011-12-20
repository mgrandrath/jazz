_.extend(
  Jazz.Helper,
  {
	  extend: function (protoProps, classProps) {
	    var child = Jazz.Helper.inherits(this, protoProps, classProps);
	    child.extend = this.extend;
	    return child;
	  },

	  ctor: function(){},

	  inherits: function(parent, protoProps, staticProps) {
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
  }
);

