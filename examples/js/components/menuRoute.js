
import React from 'react'
import {Menu, DIVIDER} from '../../../'
import Icon from '../../../components/icon/'

export default class MenuRoute extends React.Component {

  state = {
    visible: false
  }

  onClick = (item) => {
    console.log(item)
  }

  hide = () => {
    this.setState({
      visible: false
    })
    document.removeEventListener('click', this.hide)
  }

  show = () => {
    this.setState({
      visible: true
    })
    document.addEventListener('click', this.hide)
  }

  render () {
    let items = [
      {content: 'one', id: 'one'},
      {content: 'two', icon: <Icon.Done />, id: 'two'},
      DIVIDER,
      {content: 'three'},
      {content: 'long string without linebreak'}
    ]
    return (
      <div>
        <section>
          <h2>Menu</h2>
          <Menu onClick={this.onClick} items={items} visible={this.state.visible}>
            <Icon.Button onClick={this.show}>
              <Icon.MoreVert />
            </Icon.Button>
          </Menu>
        </section>
      </div>
    )
  }

}
