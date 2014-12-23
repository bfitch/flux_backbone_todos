`/** @jsx React.DOM */`

`import TodoStore from '../stores/todo_store'`
`import TodoItem from './todo_item'`
`import Header from './header'`
`import MainSection from './main_section'`
`import TodoActions from '../actions/todo_actions'`
`import Dispatcher from '../dispatcher'`

DATA = [
  {complete: false,
  text: "number 1"}
]

TodoApp = React.createClass(
  getInitialState: ->
    @_getTodoState()
    # allTodos:       TodoStore #.reset DATA
    # areAllComplete: false

  componentDidMount:    -> TodoStore.on 'add set', @_onChange, @
  componentWillUnmount: -> TodoStore.off null, null, @

  render: ->
    todos = @state.allTodos

    `<div>
      <Header />
      <MainSection
        allTodos={this.state.allTodos}
        areAllComplete={this.state.areAllComplete}
      />
    </div>`

      # <Footer allTodos={this.state.allTodos} />

  _onChange: ->
    console.log "_onChange"
    this.setState @_getTodoState()

  _getTodoState: ->
    allTodos:       TodoStore
    areAllComplete: false
)

`export default TodoApp`
