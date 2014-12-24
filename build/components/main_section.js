/** @jsx React.DOM */;
import TodoActions from '../actions/todo_actions';
import TodoItem from './todo_item';
var MainSection;

MainSection = React.createClass({displayName: 'MainSection',
  render: function() {
    var allTodos, todos;
    if (this.props.allTodos.length < 1) {
      return null;
    }
    allTodos = this.props.allTodos;
    todos = allTodos.map((function(_this) {
      return function(todo) {
        return TodoItem({key: todo.cid, todo: todo});
      };
    })(this));
    return React.DOM.section({id: "main"}, 
      React.DOM.input({
        id: "toggle-all", 
        type: "checkbox", 
        onChange: this._onToggleCompleteAll, 
        checked: this.props.areAllComplete ? 'checked' : ''}
      ), 
      React.DOM.label({htmlFor: "toggle-all"}, "Mark all as complete"), 
      React.DOM.ul({id: "todo-list"}, todos)
    );
  },
  _onToggleCompleteAll: function() {
    return TodoActions.toggleAllComplete();
  }
});

export default MainSection;
