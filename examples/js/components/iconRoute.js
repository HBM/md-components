import React from 'react'
import Icon from '../../../components/icon'

export default class IconRoute extends React.Component {

  render () {
    let icons = Object.keys(Icon).map((key, index) => {
      if (key !== 'Button') {
        let value = Icon[key]
        const style = {display: 'flex', alignItems: 'center', padding: 20, flexDirection: 'column', float: 'left', width: '33%'}
        return (
          <div key={index} style={style}>
            {React.createElement(value)}
            <span>{key}</span>
          </div>
        )
      }
    })
    const noop = () => {
    }
    return (
      <div>
        <section>
          <h2>Icons</h2>
          {icons}
        </section>
        <section>
          <h2>Icon button</h2>
          <Icon.Button onClick={noop}>
            <Icon.Help />
          </Icon.Button>
        </section>
      </div>
    )
  }

}
