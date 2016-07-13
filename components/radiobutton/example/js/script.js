
import React from 'react'
import Radiobutton from '../../'
import ReactDOM from 'react-dom'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      selectedValue: 'first'
    }
  }

  onChange = (value) => {
    this.setState({
      selectedValue: value
    })
  }

  render () {
    var items = ['First', 'Second', 'Third']

    return (
      <div>
        <section>
          <label>
            Apple
            <input type='radio' name='fruit' value='apple' />
          </label>
          <label>
            Banana
            <input type='radio' name='fruit' value='banana' />
          </label>
          <label>
            Plum
            <input type='radio' name='fruit' value='plum' />
          </label>
        </section>
        <section>
          <Radiobutton
            name='result'
            selectedValue={this.state.selectedValue}
            items={items}
            onChange={this.onChange}
          />
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
