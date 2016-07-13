
import React from 'react'
import {Switch} from '../../../'

export default class SwitchRoute extends React.Component {

  state = {
    first: false,
    second: true,
    third: false
  }

  onChange = (event) => {
    let {name, checked} = event.target
    this.setState({
      [name]: checked
    })
  }

  render () {
    return (
      <div>
        <section>
          <h2>Default checkbox</h2>
          <label>
            <input type='checkbox' />
            Checkbox
          </label>
        </section>
        <section>
          <h2>Switch</h2>
          <Switch name='first' checked={this.state.first} onChange={this.onChange} />
        </section>
        <section>
          <h2>Switch on</h2>
          <Switch name='second' checked={this.state.second} onChange={this.onChange} />
        </section>
        <section>
          <h2>Switch disabled</h2>
          <Switch disabled name='third' checked={this.state.third} onChange={this.onChange} />
        </section>
      </div>
    )
  }

}
