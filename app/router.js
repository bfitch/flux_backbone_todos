var Router,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Router = (function(_super) {
  __extends(Router, _super);

  function Router() {
    return Router.__super__.constructor.apply(this, arguments);
  }

  Router.prototype.routes = {
    '': 'home',
    'resources': 'resources'
  };

  Router.prototype.home = function() {
    return console.log('Router#home was called!');
  };

  Router.prototype.resources = function() {
    $('#app').append("<h1>CRAP</h1>");
    return console.log('Router#resources was called!');
  };

  return Router;

})(Backbone.Router);

export default Router;
