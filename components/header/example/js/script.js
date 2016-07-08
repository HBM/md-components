
import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../../Header'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  render () {
    return (
      <Header title='T12HP' subtitle='Settings'>
        <span>Four</span>
        <span>Five</span>
        <span>Six</span>
      </Header>
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
