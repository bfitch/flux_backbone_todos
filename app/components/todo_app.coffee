`/** @jsx React.DOM */`

`import TodoStore from '../stores/todo_store'`
`import TodoItem from './todo_item'`
`import Header from './header'`
`import Footer from './footer'`
`import MainSection from './main_section'`
`import TodoActions from '../actions/todo_actions'`
`import Dispatcher from '../dispatcher'`

TodoApp = React.createClass(
  getInitialState:      -> @_getTodoState()
  componentDidMount:    -> TodoStore.on 'all', @_onChange, @
  componentWillUnmount: -> TodoStore.off null, null, @

  render: ->
    todos = @state.allTodos

    `<div>
      <Header />
      <MainSection
        allTodos={this.state.allTodos}
        areAllComplete={this.state.areAllComplete}
      />
      <Footer allTodos={this.state.allTodos} />
    </div>`


  _onChange: ->
    @setState @_getTodoState()

  _getTodoState: ->
    allTodos:       TodoStore
    areAllComplete: TodoStore.areAllComplete()
)

`export default TodoApp`
