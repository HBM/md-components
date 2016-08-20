
import React from 'react'
import classnames from 'classnames'
import {Chip} from '../../../'

export default class ChipRoute extends React.Component {

  state = {
    // values is an array of strings
    values: [],
    focused: false,
    valuesIV: [],
    focuseIV: false
  }

  onDelete = () => {
    console.log('on delete')
  }

  onChange = (values) => {
    this.setState({values})
  }

  onFocus = () => {
    this.setState({
      focused: true
    })
  }

  onBlur = () => {
    this.setState({
      focused: false
    })
  }

  onChangeIV = (valuesIV) => {
    this.setState({valuesIV})
  }

  onFocusIV = () => {
    this.setState({
      focusedIV: true
    })
  }

  onBlurIV = () => {
    this.setState({
      focusedIV: false
    })
  }

  render () {
    return (
      <div>
        <section>
          <h2>Chip</h2>
          <div
            className={classnames('Chip-example1', {
              'is-focused': this.state.focused
            })}
          >
            <Chip onChange={this.onChange} onFocus={this.onFocus} onBlur={this.onBlur} />
          </div>
          {this.state.values.length ? <p>Values</p> : null}
          <ul>
            {this.state.values.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>
        <section>
          <h2>Chip with initial values</h2>
          <div
            className={classnames('Chip-example1', {
              'is-focused': this.state.focusedIV
            })}
          >
            <Chip onChange={this.onChangeIV} onFocus={this.onFocusIV} onBlur={this.onBlurIV} initialValues={['github', 'stackoverflow']} />
          </div>
          {this.state.valuesIV.length ? <p>Values</p> : null}
          <ul>
            {this.state.valuesIV.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </section>
      </div>
    )
  }

}
// <section>
//   <h2>Chip with delete</h2>
//   <Chip onDelete={this.onDelete} />
// </section>
// <section>
//   <h2>Chip with icon</h2>
//   <Chip icon='A' />
// </section>
// <section>
//   <h2>Chip with delete and icon</h2>
//   <Chip icon='A' onDelete={this.onDelete} />
// </section>
