`/** @jsx React.DOM */`

TodoItem = React.createClass(
  render: ->
    todo = @props.todo
    key  = @props.key

    `<li key={key}>
      {todo.get('text')}
    </li>`

  # _onToggleComplete: function() {
  #   TodoActions.toggleComplete(this.props.todo);
  # },
  #
  # _onDoubleClick: function() {
  #   this.setState({isEditing: true});
  # },
  #
  # _onSave: function(text) {
  #   TodoActions.updateText(this.props.todo.id, text);
  #   this.setState({isEditing: false});
  # },
  #
  # _onDestroyClick: function() {
  #   TodoActions.destroy(this.props.todo.id);
  # }

)

`export default TodoItem`
