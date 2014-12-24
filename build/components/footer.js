/** @jsx React.DOM */;
import TodoStore from '../stores/todo_store';
import TodoActions from '../actions/todo_actions';
var Footer;

Footer = React.createClass({displayName: 'Footer',
  render: function() {
    var clearCompletedButton;
    if (!this._total()) {
      return null;
    }
    if (this._numCompleted()) {
      clearCompletedButton = React.DOM.button({
          id: "clear-completed", 
          onClick: this._onClearCompletedClick}, 
          "Clear completed (", this._numCompleted(), ")"
        );
    }
    return React.DOM.footer({id: "footer"}, 
        React.DOM.span({id: "todo-count"}, 
          React.DOM.strong(null, 
            this._itemsLeft()
          ), 
          this._itemsLeftPhrase()
        ), 
        clearCompletedButton
    );
  },
  _onClearCompletedClick: function() {
    return TodoActions.destroy(this._completed());
  },
  _total: function() {
    return this.props.allTodos.size();
  },
  _completed: function() {
    return this.props.allTodos.completed();
  },
  _numCompleted: function() {
    return this._completed().length;
  },
  _itemsLeft: function() {
    return this._total() - this._numCompleted();
  },
  _itemsLeftPhrase: function() {
    return "" + (this._itemsLeft() === 1 ? " item" : " items") + " left";
  }
});

export default Footer;
