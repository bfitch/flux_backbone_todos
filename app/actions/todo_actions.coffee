`import Dispatcher from '../dispatcher'`

TodoActions =
  create: (text) ->
    Dispatcher.dispatch
      action:
        actionType: 'TODO_CREATE'
        text:       text

  toggleComplete: (todo) ->
    Dispatcher.dispatch
      action:
        actionType: 'TODO_TOGGLE_COMPLETE'
        cid:         todo.cid
        complete:   !todo.get('complete')

  updateText: (cid, text) ->
    Dispatcher.dispatch
      action:
        actionType: 'TODO_UPDATE'
        cid:        cid
        text:       text

  toggleAllComplete: ->
    Dispatcher.dispatch
      action:
        actionType: 'TODO_TOGGLE_ALL_COMPLETE'

  destroy: (models) ->
    Dispatcher.dispatch
      action:
        actionType: 'TODO_DESTROY'
        models:     models

`export default TodoActions`
