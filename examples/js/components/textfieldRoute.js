
import React from 'react'
import {Textfield} from '../../../'

export default class TextfieldRoute extends React.Component {

  state = {
    color: '',
    animal: 'dog',
    country: 'Germany',
    error: ''
  }

  onChangeColor = (event) => {
    this.setState({
      color: event.target.value
    })
  }

  onChangeCountry = (event) => {
    this.setState({
      country: event.target.value
    })
  }

  onChangeError = (event) => {
    this.setState({
      error: event.target.value
    })
  }

  render () {
    return (
      <div>
        <section>
          <h2>Default textfield</h2>
          <input type='text' />
        </section>
        <section>
          <h2>Textfield</h2>
          <Textfield label='Color' value={this.state.color} onChange={this.onChangeColor} />
        </section>
        <section>
          <h2>Textfield with label</h2>
          <Textfield label='Country' value={this.state.country} onChange={this.onChangeCountry} />
        </section>
        <section>
          <h2>Read only textfield</h2>
          <Textfield readOnly label='Read only' value={this.state.animal} onChange={() => {}} />
        </section>
        <section>
          <h2>Textfield with error message</h2>
          <Textfield
            label='Error message'
            value={this.state.error}
            onChange={this.onChangeError}
            error='Username or password incorrect.'
          />
        </section>
      </div>
    )
  }

}
