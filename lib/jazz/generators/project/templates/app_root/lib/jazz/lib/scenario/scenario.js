Jazz.Scenario = function () {
  this.initialize();
};

Jazz.Scenario.extend = Jazz.Scenario.create = Jazz.Helper.extend;

Jazz.Scenario.prototype.initialize = function () {}

Jazz.Scenario.prototype.viewHasChanged = function () {}

Jazz.Scenario.prototype.applicationHasLaunched = function () {}

Jazz.Scenario.prototype.viewAppears = function () {}