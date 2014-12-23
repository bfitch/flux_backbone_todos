`/** @jsx React.DOM */`

`import TodoActions from '../actions/todo_actions'`
`import TodoTextInput from './todo_text_input'`

Header = React.createClass(
  render: ->
    `<header id="header">
      <h1>todos</h1>
      <TodoTextInput
        id="new-todo"
        placeholder="What needs to be done?"
        onSave={this._onSave}
      />
    </header>`

  _onSave: (text) ->
    TodoActions.create(text) if text.trim()
)

`export default Header`
