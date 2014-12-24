import Dispatcher from '../dispatcher';
var TodoActions;

TodoActions = {
  create: function(text) {
    return Dispatcher.dispatch({
      action: {
        actionType: 'TODO_CREATE',
        text: text
      }
    });
  },
  toggleComplete: function(todo) {
    return Dispatcher.dispatch({
      action: {
        actionType: 'TODO_TOGGLE_COMPLETE',
        cid: todo.cid,
        complete: !todo.get('complete')
      }
    });
  },
  updateText: function(cid, text) {
    return Dispatcher.dispatch({
      action: {
        actionType: 'TODO_UPDATE',
        cid: cid,
        text: text
      }
    });
  },
  toggleAllComplete: function() {
    return Dispatcher.dispatch({
      action: {
        actionType: 'TODO_TOGGLE_ALL_COMPLETE'
      }
    });
  },
  destroy: function(models) {
    return Dispatcher.dispatch({
      action: {
        actionType: 'TODO_DESTROY',
        models: models
      }
    });
  }
};

export default TodoActions;
