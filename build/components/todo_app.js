/** @jsx React.DOM */;
import TodoStore from '../stores/todo_store';
import TodoItem from './todo_item';
import Header from './header';
import Footer from './footer';
import MainSection from './main_section';
import TodoActions from '../actions/todo_actions';
import Dispatcher from '../dispatcher';
var TodoApp;

TodoApp = React.createClass({displayName: 'TodoApp',
  getInitialState: function() {
    return this._getTodoState();
  },
  componentDidMount: function() {
    return TodoStore.on('all', this._onChange, this);
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
      ), 
      Footer({allTodos: this.state.allTodos})
    );
  },
  _onChange: function() {
    return this.setState(this._getTodoState());
  },
  _getTodoState: function() {
    return {
      allTodos: TodoStore,
      areAllComplete: TodoStore.areAllComplete()
    };
  }
});

export default TodoApp;
