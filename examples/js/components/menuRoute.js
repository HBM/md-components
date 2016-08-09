
import React from 'react'
import {Menu, Divider} from '../../../'
import Icon from '../../../components/icon/'

export default class MenuRoute extends React.Component {

  state = {
    rightTop: false,
    leftTop: false,
    rightBottom: false,
    leftBottom: false
  }

  onClick = (item) => {
    console.log(item)
  }

  hide = () => {
    this.setState({
      rightTop: false,
      leftTop: false,
      rightBottom: false,
      leftBottom: false
    })
    document.removeEventListener('click', this.hide)
  }

  showRightTop = () => {
    this.setState({
      rightTop: true
    })
    document.addEventListener('click', this.hide)
  }

  showLeftTop = () => {
    this.setState({
      leftTop: true
    })
    document.addEventListener('click', this.hide)
  }

  showRightBottom = () => {
    this.setState({
      rightBottom: true
    })
    document.addEventListener('click', this.hide)
  }

  showLeftBottom = () => {
    this.setState({
      leftBottom: true
    })
    document.addEventListener('click', this.hide)
  }

  render () {
    let items = [
      {content: 'one', id: 'one'},
      {content: 'two', icon: <Icon.Done />, id: 'two'},
      Divider,
      {content: 'three'},
      {content: 'long string without linebreak'}
    ]
    return (
      <div>
        <section>
          <h2>Menu</h2>
          <ul>
            <li>transformX='right'</li>
            <li>transformY='top'</li>
          </ul>
          <Menu
            transformX='right'
            transformY='top'
            onClick={this.onClick}
            items={items}
            visible={this.state.rightTop}
          >
            <Icon.Button onClick={this.showRightTop}>
              <Icon.MoreVert />
            </Icon.Button>
          </Menu>
        </section>
        <section>
          <h2>Menu</h2>
          <ul>
            <li>transformX='left'</li>
            <li>transformY='top'</li>
          </ul>
          <Menu
            transformX='left'
            transformY='top'
            onClick={this.onClick}
            items={items}
            visible={this.state.leftTop}
          >
            <Icon.Button onClick={this.showLeftTop}>
              <Icon.MoreVert />
            </Icon.Button>
          </Menu>
        </section>
        <section>
          <h2>Menu</h2>
          <ul>
            <li>transformX='right'</li>
            <li>transformY='bottom'</li>
          </ul>
          <Menu
            transformX='right'
            transformY='bottom'
            onClick={this.onClick}
            items={items}
            visible={this.state.rightBottom}
          >
            <Icon.Button onClick={this.showRightBottom}>
              <Icon.MoreVert />
            </Icon.Button>
          </Menu>
        </section>
        <section>
          <h2>Menu</h2>
          <ul>
            <li>transformX='left'</li>
            <li>transformY='bottom'</li>
          </ul>
          <Menu
            transformX='left'
            transformY='bottom'
            onClick={this.onClick}
            items={items}
            visible={this.state.leftBottom}
          >
            <Icon.Button onClick={this.showLeftBottom}>
              <Icon.MoreVert />
            </Icon.Button>
          </Menu>
        </section>
      </div>
    )
  }

}
