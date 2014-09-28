import Router from './router';
var Application;

Application = (function() {
  function Application() {
    this.router();
    Backbone.history.start();
  }

  Application.prototype.router = function() {
    return this._router || (this._router = new Router());
  };

  return Application;

})();

$((function(_this) {
  return function() {
    var x;
    x = new Application();
    return console.log(x);
  };
})(this));
