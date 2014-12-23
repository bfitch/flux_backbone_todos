`import Dispatcher from '../dispatcher'`

TodoActions =
  create: (text) ->
    Dispatcher.dispatch
      action:
        actionType: 'TODO_CREATE'
        text:       text

  toggleComplete: (todo) ->
    "toggle action called"
    Dispatcher.dispatch
      action:
        actionType: 'TODO_TOGGLE_COMPLETE'
        cid:         todo.cid
        complete:   !todo.complete
    
`export default TodoActions`
