import Dispatcher from '../dispatcher';
var Todo, TodoCollection, TodoStore,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Todo = Backbone.Model.extend({});

TodoCollection = (function(_super) {
  __extends(TodoCollection, _super);

  function TodoCollection() {
    this._dispatchCallback = __bind(this._dispatchCallback, this);
    return TodoCollection.__super__.constructor.apply(this, arguments);
  }

  TodoCollection.prototype.model = Todo;

  TodoCollection.prototype.initialize = function() {
    return Dispatcher.register(this._dispatchCallback);
  };

  TodoCollection.prototype.areAllComplete = function() {
    return !this.some((function(_this) {
      return function(todo) {
        return !todo.get('complete');
      };
    })(this));
  };

  TodoCollection.prototype.completed = function() {
    return this.where({
      complete: true
    });
  };

  TodoCollection.prototype._dispatchCallback = function(payload) {
    var action;
    action = payload.action;
    switch (action.actionType) {
      case 'TODO_CREATE':
        return this.add({
          text: action.text,
          complete: false
        });
      case 'TODO_TOGGLE_COMPLETE':
        return this._updateAttributes(action, {
          complete: action.complete
        });
      case 'TODO_UPDATE':
        return this._updateAttributes(action, {
          text: action.text
        });
      case 'TODO_TOGGLE_ALL_COMPLETE':
        if (this.areAllComplete()) {
          return this._toggleCompleteValues(false);
        } else {
          return this._toggleCompleteValues(true);
        }
        break;
      case 'TODO_DESTROY':
        return this.remove(action.models);
    }
  };

  TodoCollection.prototype._toggleCompleteValues = function(bool) {
    return this.each((function(_this) {
      return function(todo) {
        return todo.set({
          complete: bool
        });
      };
    })(this));
  };

  TodoCollection.prototype._updateAttributes = function(action, attrs) {
    var model;
    model = this._findByCid(action);
    return model.set(attrs);
  };

  TodoCollection.prototype._findByCid = function(action) {
    return this.find({
      cid: action.cid
    });
  };

  return TodoCollection;

})(Backbone.Collection);

TodoStore = new TodoCollection;

export default TodoStore;
