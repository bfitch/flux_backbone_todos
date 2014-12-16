/** @jsx React.DOM */;
var TodoItem;

TodoItem = React.createClass({displayName: 'TodoItem',
  render: function() {
    var key, todo;
    todo = this.props.todo;
    key = this.props.key;
    return React.DOM.li({key: key}, 
      todo.get('text')
    );
  }
});

export default TodoItem;
