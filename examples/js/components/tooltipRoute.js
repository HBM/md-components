
import React from 'react'
import {Button, Tooltip} from '../../../'
import Icon from '../../..//components/icon/'

export default class TooltipRoute extends React.Component {

  state = {
    tooltip: false,
    icon: false,
    button: false
  }

  show = () => {
    this.setState({
      visible: true
    })
  }

  hide = () => {
    this.setState({
      visible: false
    })
  }

  showIcon = () => {
    this.setState({
      icon: true
    })
  }

  hideIcon = () => {
    this.setState({
      icon: false
    })
  }

  showButton = () => {
    this.setState({
      button: true
    })
  }

  hideButton = () => {
    this.setState({
      button: false
    })
  }

  render () {
    return (
      <div>
        <section>
          <h2>Default title / tooltip</h2>
          <p title='Tooltip'>
            Tooltip
          </p>
        </section>
        <section>
          <h2>Tooltip</h2>
          <Tooltip content='Tooltip' visible={this.state.visible}>
            <span onMouseOver={this.show} onMouseOut={this.hide}>
              Tooltip
            </span>
          </Tooltip>
        </section>
        <section>
          <h2>Icon Tooltip</h2>
          <Tooltip content='Icon' visible={this.state.icon}>
            <div style={{display: 'inline-block'}} onMouseOver={this.showIcon} onMouseOut={this.hideIcon}>
              <Icon.Person />
            </div>
          </Tooltip>
        </section>
        <section>
          <h2>Button Tooltip</h2>
          <Tooltip content='Button' visible={this.state.button}>
            <div style={{display: 'inline-block'}} onMouseOver={this.showButton} onMouseOut={this.hideButton}>
              <Button onClick={() => {}}>
                Button
              </Button>
            </div>
          </Tooltip>
        </section>
      </div>
    )
  }

}
