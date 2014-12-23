`/** @jsx React.DOM */`

# var TodoActions = require('../actions/TodoActions');
`import TodoItem from './todo_item'`

MainSection = React.createClass(
  render: ->
    if @props.allTodos.length < 1
      return null

    allTodos = @props.allTodos
    todos    = allTodos.map (todo) =>
      `<TodoItem key={todo.cid} todo={todo}></TodoItem>`

    `<section id="main">
      <input
        id="toggle-all"
        type="checkbox"
        onChange={this._onToggleCompleteAll}
        checked={this.props.areAllComplete ? 'checked' : ''}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul id="todo-list">{todos}</ul>
    </section>`

  _onToggleCompleteAll: ->
    # TodoActions.toggleCompleteAll()
)

`export default MainSection`
