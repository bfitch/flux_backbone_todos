/** @jsx React.DOM */;
var ENTER_KEY_CODE, TodoTextInput;

ENTER_KEY_CODE = 13;

TodoTextInput = React.createClass({displayName: 'TodoTextInput',
  getInitialState: function() {
    return {
      value: this.props.value || ""
    };
  },
  render: function() {
    return React.DOM.input({
      className: this.props.className, 
      id: this.props.id, 
      placeholder: this.props.placeholder, 
      onBlur: this._save, 
      onChange: this._onChange, 
      onKeyDown: this._onKeyDown, 
      value: this.state.value, 
      autoFocus: true}
    );
  },
  _save: function() {
    this.props.onSave(this.state.value);
    return this.setState({
      value: ""
    });
  },
  _onChange: function(event) {
    return this.setState({
      value: event.target.value
    });
  },
  _onKeyDown: function(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      return this._save();
    }
  }
});

export default TodoTextInput;
