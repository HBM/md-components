import React from 'react'
import Playground from 'component-playground'
import {Slider} from '../../../'

const defaultSliderComponent =
`<input
  type='range'
  min='0'
  max='100' />`

const defaultSliderWithStepsComponent =
`<input
  type='range'
  min='0'
  max='100'
  step='10' />`

const sliderComponent =
'<Slider />'

const sliderWithStepsComponent =
`<Slider
  step={10} />`

export default class SliderRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Default slider</h2>
          <Playground
            codeText={defaultSliderComponent}
            scope={{React}}
          />
        </section>
        <section>
          <h2>Default slider with steps</h2>
          <Playground
            codeText={defaultSliderWithStepsComponent}
            scope={{React}}
          />
        </section>
        <section>
          <h2>Slider</h2>
          <Playground
            docClass={Slider}
            codeText={sliderComponent}
            scope={{React, Slider}}
          />
        </section>
        <section>
          <h2>Slider with steps</h2>
          <Playground
            docClass={Slider}
            codeText={sliderWithStepsComponent}
            scope={{React, Slider}}
          />
        </section>
      </div>
    )
  }

}
