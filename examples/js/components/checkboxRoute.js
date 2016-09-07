
import React from 'react'
import ReactDOM from 'react-dom'
import Playground from 'component-playground'
import {Checkbox} from '../../../'

const defaultCheckbox =
`<label>
  Label
  <input type='checkbox' />
</label>`

const checkboxComponent =
`class App extends React.Component {

  state = {
    checked: false
  }

  onChange = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    return (
      <Checkbox
        onChange={this.onChange}
        checked={this.state.checked}
      />
    )
  }

}

ReactDOM.render(<App />, mountNode)`

const checkboxDisabled =
`<Checkbox checked disabled />`

export default class CheckboxRoute extends React.Component {

  state = {
    checked: false
  }

  onChange = (event) => {
    this.setState({
      checked: !this.state.checked
    })
  }

  render () {
    return (
      <div>
        <section>
          <h2>Default checkbox</h2>
          <Playground
            codeText={defaultCheckbox}
            scope={{React}}
          />
        </section>
        <section>
          <h2>Checkbox</h2>
          <Playground
            docClass={Checkbox}
            noRender={false}
            codeText={checkboxComponent}
            scope={{React, ReactDOM, Checkbox}}
          />
        </section>
        <section>
          <h2>Disabled checkbox</h2>
          <Playground
            codeText={checkboxDisabled}
            scope={{React, Checkbox}}
          />
        </section>
      </div>
    )
  }

}
