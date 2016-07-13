
import React from 'react'
import ReactDOM from 'react-dom'
import {Linear} from '../../'

class App extends React.Component {

  state = {
    width: 0
  }

  render () {
    return (
      <Linear percentage={this.state.width} />
    )
  }

  componentDidMount () {
    this.interval = window.setInterval(() => {
      const width = this.state.width + 10
      if (width > 100) {
        return window.clearInterval(this.interval)
      }
      this.setState({
        width
      })
    }, 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)
