/** @jsx React.DOM */;
import TodoStore from '../stores/todo_store';
import TodoItem from './todo_item';
import Header from './header';
import MainSection from './main_section';
import TodoActions from '../actions/todo_actions';
import Dispatcher from '../dispatcher';
var DATA, TodoApp;

DATA = [
  {
    complete: false,
    text: "number 1"
  }
];

TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function() {
    return this._getTodoState();
  },
  componentDidMount: function() {
    return TodoStore.on('add set', this._onChange, this);
  },
  componentWillUnmount: function() {
    return TodoStore.off(null, null, this);
  },
  render: function() {
    var todos;
    todos = this.state.allTodos;
    return React.DOM.div(null, 
      Header(null), 
      MainSection({
        allTodos: this.state.allTodos, 
        areAllComplete: this.state.areAllComplete}
      )
    );
  },
  _onChange: function() {
    console.log("_onChange");
    return this.setState(this._getTodoState());
  },
  _getTodoState: function() {
    return {
      allTodos: TodoStore,
      areAllComplete: false
    };
  }
});

export default TodoApp;
