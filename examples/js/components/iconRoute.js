import React from 'react'
// import Icon from '../../../components/icon'
import Icon from '../../../components/icon/test.js'

export default class IconRoute extends React.Component {

  render () {
    let icons = Object.keys(Icon).map((key, index) => {
      if (key !== 'Button') {
        let value = Icon[key]
        const style = {display: 'flex', alignItems: 'center', padding: 20, flexDirection: 'column', float: 'left', width: '33%'}
        return (
          <div key={index} style={style}>
            {value()}
            <span>{key}</span>
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
      </div>
    )
  }

}
