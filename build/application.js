import Router from './router';
var Application;

Application = (function() {
  function Application() {
    new Router();
    Backbone.history.start();
  }

  return Application;

})();

$((function(_this) {
  return function() {
    return new Application();
  };
})(this));
