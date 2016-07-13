
import React from 'react'
import {Slider} from '../../../'

export default class SliderRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Default slider</h2>
          <input type='range' min='0' max='100' />
        </section>
        <section>
          <h2>Default slider with steps</h2>
          <input type='range' min='0' max='100' step='10' />
        </section>
        <section>
          <h2>Slider</h2>
          <Slider />
        </section>
        <section>
          <h2>Slider with steps</h2>
          <Slider step={10} />
        </section>
      </div>
    )
  }

}
