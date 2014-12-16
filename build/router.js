/** @jsx React.DOM */;
import TodoApp from './components/todo_app';
var Router,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Router = (function(_super) {
  __extends(Router, _super);

  function Router() {
    return Router.__super__.constructor.apply(this, arguments);
  }

  Router.prototype.routes = {
    '': 'root'
  };

  Router.prototype.root = function() {
    return React.renderComponent(TodoApp(null), document.getElementById('app'));
  };

  return Router;

})(Backbone.Router);

export default Router;
