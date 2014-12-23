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

  TodoCollection.prototype._dispatchCallback = function(payload) {
    var action, model;
    action = payload.action;
    switch (action.actionType) {
      case 'TODO_CREATE':
        return this.add({
          text: action.text,
          complete: false
        });
      case 'TODO_TOGGLE_COMPLETE':
        model = this.find({
          cid: action.cid
        });
        model.set({
          complete: action.complete
        });
        return this.set([model], {
          remove: false
        });
    }
  };

  return TodoCollection;

})(Backbone.Collection);

TodoStore = new TodoCollection;

export default TodoStore;
