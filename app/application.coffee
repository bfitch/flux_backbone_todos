`import Router from './router'`

class Application
  constructor: ->
    @router()
    Backbone.history.start()

  router: ->
    @_router ||= new Router()

$ () =>
  x = new Application()
  console.log x
