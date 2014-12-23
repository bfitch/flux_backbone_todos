`/** @jsx React.DOM */`

ENTER_KEY_CODE = 13

TodoTextInput = React.createClass(
  getInitialState: ->
    value: @props.value || ""

  render: ->
    `<input
      className={this.props.className}
      id={this.props.id}
      placeholder={this.props.placeholder}
      onBlur={this._save}
      onChange={this._onChange}
      onKeyDown={this._onKeyDown}
      value={this.state.value}
      autoFocus={true}
    />`

  _save: ->
    @props.onSave @state.value
    @setState value: ""

  _onChange: (event) ->
    @setState value: event.target.value
  
  _onKeyDown: (event) ->
    @_save()  if event.keyCode is ENTER_KEY_CODE
)

`export default TodoTextInput`
