`/** @jsx React.DOM */`

`import TodoStore from '../stores/todo_store'`
`import TodoActions from '../actions/todo_actions'`

Footer = React.createClass(
  render: ->
    return null unless @_total()

    if @_numCompleted()
      clearCompletedButton =
        `<button
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
          Clear completed ({this._numCompleted()})
        </button>`

    `<footer id="footer">
        <span id="todo-count">
          <strong>
            {this._itemsLeft()}
          </strong>
          {this._itemsLeftPhrase()}
        </span>
        {clearCompletedButton}
    </footer>`

  _onClearCompletedClick: -> TodoActions.destroy @_completed()

  _total:           -> @props.allTodos.size()
  _completed:       -> @props.allTodos.completed()
  _numCompleted:    -> @_completed().length
  _itemsLeft:       -> @_total() - @_numCompleted()
  _itemsLeftPhrase: -> "#{(if @_itemsLeft() == 1 then " item" else " items")} left"
)

`export default Footer`
