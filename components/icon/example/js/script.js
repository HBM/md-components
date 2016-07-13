
import React from 'react'
import ReactDOM from 'react-dom'
import Icon from '../../'

/**
 * Create parent component and include icons.
 */
class App extends React.Component {

  onClick = () => {
    // console.log(event)
  }

  render () {
    var icons = Object.keys(Icon).map(key => {
      if (key !== 'Button') {
        var value = Icon[key]
        return (
          <div className='icon' >
            {React.createElement(value)}
            <span className='icon-name'>{key}</span>
          </div>
        )
      }
    })

    var blueLogo = <Icon.Logo fill='blue' />

    return (
      <div>
        <h2>Icon</h2>
        {icons}
        {blueLogo}
        <h2>Icon.Button</h2>
        <Icon.Button onClick={this.onClick}>
          <Icon.Person />
        </Icon.Button>
        <Icon.Button onClick={this.onClick}>
          <Icon.Help />
        </Icon.Button>
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
