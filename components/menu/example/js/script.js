
import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../../../icon/Icon'
import {Menu, DIVIDER} from '../../Menu'

/**
 * Create parent component
 */
class App extends React.Component {

  state = {
    visible: false
  }

  /**
   * Show menu
   */
  show = () => {
    this.setState({
      visible: true
    })
    document.addEventListener('click', this.hide)
  }

  /**
   * Hide menu
   */
  hide = () => {
    this.setState({
      visible: false
    })
    document.removeEventListener('click', this.hide)
  }

  onClick = (item) => {
    console.log(item)
  }

  render () {
    return (
      <div>
        <Menu
          onClick={this.onClick}
          items={
            [
              {
                content: 'one',
                id: 'one'
              },
              {
                content: 'two',
                icon: <Icon.Done />,
                id: 'two'
              },
              DIVIDER,
              {
                content: 'three'
              },
              {
                content: 'long whitespace test without linebreak'
              }
            ]
          }
          visible={this.state.visible}
        >
          <Icon.Button onClick={this.show}>
            <Icon.MoreVert />
          </Icon.Button>
        </Menu>
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
