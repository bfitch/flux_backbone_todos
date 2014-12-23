/** @jsx React.DOM */;
import TodoActions from '../actions/todo_actions';
import TodoTextInput from './todo_text_input';
var Header;

Header = React.createClass({displayName: 'Header',
  render: function() {
    return React.DOM.header({id: "header"}, 
      React.DOM.h1(null, "todos"), 
      TodoTextInput({
        id: "new-todo", 
        placeholder: "What needs to be done?", 
        onSave: this._onSave}
      )
    );
  },
  _onSave: function(text) {
    if (text.trim()) {
      return TodoActions.create(text);
    }
  }
});

export default Header;
