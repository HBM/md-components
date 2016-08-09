
import React from 'react'
import ReactDOM from 'react-dom'
import Modal from '../../Modal'
import Button from '../../../button/Button'

/**
 * Create parent component and include icons.
 */
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  toggleModal (visible) {
    this.setState({visible})
  }

  onClick () {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    var header = <p>Use Googles location service?</p>
    var body =
      <div>
        <p>
          Let Google help apps determine location. This means sending anonymous location data
          to Google, even when no apps are running.
        </p>
      </div>
    var footer =
      <div>
        <Button>Cancel</Button>
        <Button>Login</Button>
      </div>

    return (
      <div>
        <p>
          Press "?"
        </p>
        <div>
          <button type='button' onClick={this.onClick}>
            show
          </button>
        </div>
        <Modal
          header={header}
          body={body}
          footer={footer}
          visible={this.state.visible}
          toggle={this.toggleModal}
        />
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
