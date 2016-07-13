
import React from 'react'
import {Modal, Button} from '../../../'

export default class ModalRoute extends React.Component {

  state = {
    visible: false
  }

  alert = () => {
    window.confirm('Alert')
  }

  modal = () => {
    this.setState({
      visible: true
    })
  }

  toggle = () => {
    this.setState({
      visible: false
    })
  }

  render () {
    let header = (
      <h3>Header</h3>
    )
    let body = (
      <div>Body</div>
    )
    let footer = (
      <div>
        <Button onClick={this.toggle}>Cancel</Button>
        <Button onClick={this.toggle}>OK</Button>
      </div>
    )
    return (
      <div>
        <section>
          <h2>Default alert</h2>
          <button type='button' onClick={this.alert}>
            Alert
          </button>
        </section>
        <section>
          <h2>Modal</h2>
          <Button onClick={this.modal}>
            Button
          </Button>
        </section>
        <Modal
          header={header}
          body={body}
          footer={footer}
          visible={this.state.visible}
          toggle={this.toggle}
        />
      </div>
    )
  }
}
