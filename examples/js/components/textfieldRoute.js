
import React from 'react'
import {Textfield} from '../../../'

export default class TextfieldRoute extends React.Component {

  state = {
    color: '',
    animal: 'dog',
    country: 'Germany',
    error: '',
    nonfloat: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
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
          <h2>Textfield with default value</h2>
          <Textfield label='default' defaultValue='awesome' />
        </section>
        <section>
          <h2>Textfield</h2>
          <Textfield label='Color' name='color' value={this.state.color} onChange={this.onChange} />
        </section>
        <section>
          <h2>Textfield with label</h2>
          <Textfield label='Country' name='country' value={this.state.country} onChange={this.onChange} />
        </section>
        <section>
          <h2>Read only textfield</h2>
          <Textfield readOnly label='Read only' value={this.state.animal} onChange={() => {}} />
        </section>
        <section>
          <h2>Textfield with error message</h2>
          <Textfield
            label='Error message'
            name='error'
            value={this.state.error}
            onChange={this.onChange}
            error='Username or password incorrect.'
          />
        </section>
        <section>
          <h2>Textfield fixed (non-floating) label</h2>
          <Textfield
            label='Non floating'
            name='nonfloat'
            float={false}
            value={this.state.nonfloat}
            onChange={this.onChange}
          />
        </section>
      </div>
    )
  }

}
