Jazz.Controller = function () {
  this.initialize();
};

Jazz.Controller.extend = Jazz.Controller.create = Jazz.Helper.extend;

_.extend(
  Jazz.Controller.prototype,
  {
    index:function () {},
    create:function () {},
    update:function () {},
    remove:function () {},
    initialize:function () {}

  }
);