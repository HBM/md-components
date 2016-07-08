
import React from 'react'
import ReactDOM from 'react-dom'
import Snackbar from '../../Snackbar'

/**
 * App
 */
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
  }

  onClick = () => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    return (
      <div>
        <Snackbar
          text='Ethernet settings saved'
          action='Undo'
          onAction={this.onClick}
          visible={this.state.visible}
        />
        <input type='button' value='toggle' onClick={this.onClick} />
      </div>
    )
  }

}

/**
 * Render parent component.
 */
ReactDOM.render(
  <App />,
  document.getElementById('react')
)
