
import React from 'react'
import Checkbox from '../../'
import ReactDOM from 'react-dom'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      frist: false,
      second: true,
      third: false,
      fourth: true
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange (name) {
    return (event) => {
      this.setState({
        [name]: event.target.checked
      })
    }
  }

  render () {
    return (
      <div>
        <section>
          <Checkbox
            checked={this.state.first}
            label='default checkbox'
            onChange={this.onChange('first')}
          />
        </section>
        <section>
          <Checkbox
            checked={this.state.second}
            onChange={this.onChange('second')}
            label='checked checkbox'
          />
        </section>
        <section>
          <Checkbox
            checked={this.state.third}
            disabled
            onChange={this.onChange('third')}
            label='disabled checkbox'
          />
        </section>
        <section>
          <Checkbox
            checked={this.state.fourth}
            disabled
            onChange={this.onChange('fourth')}
            label='disabled checked checkbox'
          />
        </section>
        <section>
          <label htmlFor='one'>one</label>
          <input type='checkbox' id='one' />
          <label htmlFor='two'>two</label>
          <input type='checkbox' id='two' />
        </section>
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
