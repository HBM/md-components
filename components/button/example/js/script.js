
import React from 'react'
import Button from '../../'
import ReactDOM from 'react-dom'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      first: {
        text: 'some text',
        raised: false,
        disabled: false
      },
      second: {
        onClick: this.onClick
      }
    }

    this.onClick = this.onClick.bind(this)
  }

  componentDidMount () {
    window.setTimeout(() => {
      this.setState({
        first: {
          text: 'another text',
          raised: true,
          disabled: true
        }
      })
    }, 1000)
  }

  onClick () {
    console.log('clicked')
  }

  render () {
    return (
      <div>
        <button type='button' className='btn'>
          button
        </button>
        <div>
          <Button {...this.state.first}>
            {this.state.first.text}
          </Button>
          <span>
            Flat button that will be rerendered
          </span>
        </div>
        <div>
          <Button {...this.state.second}>
            Button
          </Button>
          <span>
            Flat button
          </span>
        </div>
        <div>
          <Button disabled onClick={this.onClick}>
            Button
          </Button>
          <span>
            Flat disabled button
          </span>
        </div>
        <div>
          <Button onClick={this.onClick} raised>
            Button
          </Button>
          <span>
            Raised button
          </span>
        </div>
        <div>
          <Button disabled onClick={this.onClick} raised type='submit'>
            Submit
          </Button>
          <span>
            Raised disabled submit button
          </span>
        </div>
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
