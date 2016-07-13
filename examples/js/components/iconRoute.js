
import React from 'react'
import Icon from '../../../components/icon'

export default class IconRoute extends React.Component {

  render () {
    let icons = Object.keys(Icon).map((key, index) => {
      if (key !== 'Button') {
        let value = Icon[key]
        return (
          <div key={index} style={{display: 'flex', alignItems: 'center', marginBottom: 20}}>
            {React.createElement(value)}
            <span style={{marginLeft: 10}}>{key}</span>
          </div>
        )
      }
    })
    return (
      <div>
        <section>
          <h2>Icons</h2>
          {icons}
        </section>
        <section>
          <h2>Icon button</h2>
          <Icon.Button onClick={() => {}}>
            <Icon.Help />
          </Icon.Button>
        </section>
      </div>
    )
  }

}
