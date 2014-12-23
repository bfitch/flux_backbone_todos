`import Dispatcher from '../dispatcher'`

Todo = Backbone.Model.extend {}

class TodoCollection extends Backbone.Collection
  model: Todo

  initialize: -> Dispatcher.register @_dispatchCallback
      
  _dispatchCallback: (payload) =>
    action = payload.action

    switch action.actionType
      when 'TODO_CREATE'
        @add
          text:     action.text
          complete: false
      when 'TODO_TOGGLE_COMPLETE'
        model = @find cid: action.cid
        model.set complete: action.complete
        @set [model], {remove: false}
        
TodoStore = new TodoCollection

`export default TodoStore`
