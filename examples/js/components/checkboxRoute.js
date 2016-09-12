
import React from 'react'
import ReactDOM from 'react-dom'
import Playground from 'component-playground'
import {Checkbox} from '../../../'

const _classDefault =
`<label>
  Label
    <input type='checkbox' />
</label>`

const _classCheckbox =
`class App extends React.Component {
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
        <Checkbox onChange={this.onChange} checked={this.state.checked} />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)`

const _classDisableCheckbox =
`class App extends React.Component {
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
        <Checkbox onChange={this.onChange} checked={this.state.checked} disabled />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)`

export default class CheckboxRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Default checkbox</h2>
          <Playground
            codeText={_classDefault}
            scope={{React}}
          />
        </section>
        <section>
          <h2>Checkbox</h2>
          <Playground
            docClass={Checkbox}
            codeText={_classCheckbox}
            noRender={false}
            scope={{React, ReactDOM, Checkbox}}
          />
        </section>
        <section>
          <h2>Disabled checkbox</h2>
          <Playground
            docClass={Checkbox}
            codeText={_classDisableCheckbox}
            noRender={false}
            scope={{React, ReactDOM, Checkbox}}
          />
        </section>
      </div>
    )
  }

}
