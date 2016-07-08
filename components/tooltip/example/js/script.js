
import React from 'react'
import ReactDOM from 'react-dom'
import Tooltip from '../../Tooltip'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  state = {
    boxVisible: false,
    fourthVisible: true
  }

  showBox = () => {
    this.setState({
      boxVisible: true
    })
  }

  hideBox = () => {
    this.setState({
      boxVisible: false
    })
  }

  showFourth = () => {
    this.setState({
      fourthVisible: true
    })
  }

  hideFourth = () => {
    this.setState({
      fourthVisible: false
    })
  }

  render () {
    return (
      <div>
        <section>
          <Tooltip content='button detail' visible={this.state.boxVisible}>
            <button type='button' onMouseOver={this.showBox} onMouseOut={this.hideBox}>
              some button
            </button>
          </Tooltip>
        </section>
        <section>
          <Tooltip content='long text detail' visible={this.state.fourthVisible}>
            <span onMouseOver={this.showFourth} onMouseOut={this.hideFourth}>
              some really long text with the tooltip in the middle
            </span>
          </Tooltip>
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
