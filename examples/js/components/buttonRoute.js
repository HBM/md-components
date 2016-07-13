
import React from 'react'
import {Button} from '../../../'

export default class ButtonRoute extends React.Component {

  onClick = (event) => {
    console.log(event)
  }

  render () {
    return (
      <div>
        <section>
          <h2>Default button</h2>
          <button type='button'>
            Button
          </button>
        </section>
        <section>
          <h2>Button</h2>
          <Button onClick={this.onClick}>
            Button
          </Button>
        </section>
        <section>
          <h2>Disabled Button</h2>
          <Button onClick={this.onClick} disabled>
            Button
          </Button>
        </section>
        <section>
          <h2>Raised button</h2>
          <Button onClick={this.onClick} raised>
            Button
          </Button>
        </section>
        <section>
          <h2>Raised disabled button</h2>
          <Button onClick={this.onClick} raised disabled>
            Button
          </Button>
        </section>
      </div>
    )
  }

}
