`/** @jsx React.DOM */`

`import TodoApp from './components/todo_app'`

class Router extends Backbone.Router
  routes:
      '': 'root'

  root: ->
    React.renderComponent(
      `<TodoApp />`,
      document.getElementById('app')
    )

`export default Router`
