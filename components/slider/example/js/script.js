
import React from 'react'
import ReactDOM from 'react-dom'
import Slider from '../../Slider'

/**
 * Create parent component and include slider.
 */
class App extends React.Component {

  render () {
    return (
      <div>
        <section>
          <Slider />
        </section>
        <section>
          <Slider step={10} />
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
