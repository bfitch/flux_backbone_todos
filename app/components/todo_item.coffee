`/** @jsx React.DOM */`

`import TodoActions from '../actions/todo_actions'`
`import TodoTextInput from './todo_text_input'`

TodoItem = React.createClass(
  getInitialState: ->
    isEditing: false

  render: ->
    todo = @props.todo

    if @state.isEditing
      input =
        `<TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.get('text')}
        />`

    `<li
      className={this._itemClass()}
      key={todo.cid}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.get('complete')}
          onChange={this._onToggleComplete}
        />
        <label onDoubleClick={this._onDoubleClick}>
          {todo.get('text')}
        </label>
        <button className="destroy" onClick={this._onDestroyClick} />
      </div>
      {input}
    </li>`

  _onToggleComplete: ->
    TodoActions.toggleComplete @props.todo

  _onDoubleClick: ->
    this.setState isEditing: true

  _onSave: ->
    console.log "save"
    # TodoActions.updateText(this.props.todo.id, text)
    this.setState isEditing: false

  _onDestroyClick: ->
    # TodoActions.destroy(@props.todo.id)

  _itemClass: ->
    if @state.isEditing
      'editing'
    else
      'completed'
)

`export default TodoItem`
