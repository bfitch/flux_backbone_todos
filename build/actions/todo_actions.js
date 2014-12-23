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
    "toggle action called";
    return Dispatcher.dispatch({
      action: {
        actionType: 'TODO_TOGGLE_COMPLETE',
        cid: todo.cid,
        complete: !todo.complete
      }
    });
  }
};

export default TodoActions;
