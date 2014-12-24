`import Dispatcher from '../dispatcher'`

Todo = Backbone.Model.extend {}

class TodoCollection extends Backbone.Collection
  model: Todo

  initialize: ->
    Dispatcher.register @_dispatchCallback

  areAllComplete: ->
    !@some (todo) => !todo.get('complete')

  completed: -> @where(complete: true)
      
  _dispatchCallback: (payload) =>
    action = payload.action

    switch action.actionType
      when 'TODO_CREATE'
        @add
          text:     action.text
          complete: false
      when 'TODO_TOGGLE_COMPLETE'
        @_updateAttributes(action, complete: action.complete)
      when 'TODO_UPDATE'
        @_updateAttributes(action, text: action.text)
      when 'TODO_TOGGLE_ALL_COMPLETE'
        if @areAllComplete()
          @_toggleCompleteValues(false)
        else
          @_toggleCompleteValues(true)
      when 'TODO_DESTROY'
        @remove action.models

  _toggleCompleteValues: (bool) ->
    @each (todo) => todo.set({complete: bool})

  _updateAttributes: (action, attrs) ->
    model = @_findByCid(action)
    model.set attrs

  _findByCid: (action) -> @find cid: action.cid

TodoStore = new TodoCollection

`export default TodoStore`
