/** @jsx React.DOM */;
import TodoActions from '../actions/todo_actions';
import TodoTextInput from './todo_text_input';
var TodoItem;

TodoItem = React.createClass({displayName: 'TodoItem',
  getInitialState: function() {
    return {
      isEditing: false
    };
  },
  render: function() {
    var input, todo;
    todo = this.props.todo;
    if (this.state.isEditing) {
      input = TodoTextInput({
          className: "edit", 
          onSave: this._onSave, 
          value: todo.get('text')}
        );
    }
    return React.DOM.li({
      className: this._itemClass(), 
      key: todo.cid}, 
      React.DOM.div({className: "view"}, 
        React.DOM.input({
          className: "toggle", 
          type: "checkbox", 
          checked: todo.get('complete'), 
          onChange: this._onToggleComplete}
        ), 
        React.DOM.label({onDoubleClick: this._onDoubleClick}, 
          todo.get('text')
        ), 
        React.DOM.button({className: "destroy", onClick: this._onDestroyClick})
      ), 
      input
    );
  },
  _onToggleComplete: function() {
    return TodoActions.toggleComplete(this.props.todo);
  },
  _onDoubleClick: function() {
    return this.setState({
      isEditing: true
    });
  },
  _onSave: function() {
    console.log("save");
    return this.setState({
      isEditing: false
    });
  },
  _onDestroyClick: function() {},
  _itemClass: function() {
    if (this.state.isEditing) {
      return 'editing';
    } else {
      return 'completed';
    }
  }
});

export default TodoItem;
