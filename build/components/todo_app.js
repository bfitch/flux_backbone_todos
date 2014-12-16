/** @jsx React.DOM */;
import TodoStore from '../stores/todo_store';
import TodoItem from './todo_item';
var DATA, TodoApp;

DATA = [
  {
    complete: false,
    text: "number 1"
  }
];

TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function() {
    return {
      allTodos: new TodoStore(DATA)
    };
  },
  render: function() {
    var items, todos;
    todos = this.state.allTodos;
    items = todos.map((function(_this) {
      return function(todo) {
        return TodoItem({key: todo.cid, todo: todo});
      };
    })(this));
    console.log(items);
    return React.DOM.div(null, 
       React.DOM.ul({id: "todo-list"}, 
       items
      )
    );
  }
});

export default TodoApp;
