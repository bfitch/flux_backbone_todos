class Router extends Backbone.Router
  routes:
      '':          'home',
      'resources': 'resources'

  home: ->
    console.log('Router#home was called!')
    
  resources: ->
    $('#app').append "<h1>CRAP</h1>"
    console.log('Router#resources was called!')

`export default Router`
