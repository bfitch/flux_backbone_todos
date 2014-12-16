`/** @jsx React.DOM */`

`import TodoStore from '../stores/todo_store'`
`import TodoItem from './todo_item'`

# var Footer = require('./Footer.react');
# var Header = require('./Header.react');
# var MainSection = require('./MainSection.react');
# var React = require('react');
# var TodoStore = require('../stores/TodoStore');

# function getTodoState() {
#   return {
#     allTodos: TodoStore.getAll(),
#     areAllComplete: TodoStore.areAllComplete()
#   };
# }
#
      # <Header />
      # <MainSection
      #   allTodos={this.state.allTodos}
      #   areAllComplete={this.state.areAllComplete}
      # />
      # <Footer allTodos={this.state.allTodos} />

DATA = [
  {complete: false,
  text: "number 1"}
]

TodoApp = React.createClass(
  getInitialState: ->
    allTodos: new TodoStore DATA

  # componentDidMount: ->
  #   TodoStore.addChangeListener(this._onChange)
  #
  # componentWillUnmount: ->
  #   TodoStore.removeChangeListener(this._onChange)

  render: ->
    todos = @state.allTodos
    items = todos.map (todo) =>
      `<TodoItem key={todo.cid} todo={todo}></TodoItem>`

    console.log items

    `<div>
      <ul id="todo-list">
       {items}
      </ul>
    </div>`

  # _onChange: ->
  #   this.setState getTodoState()
)

`export default TodoApp`
