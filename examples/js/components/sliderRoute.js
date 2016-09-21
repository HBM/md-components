import React from 'react'
import ReactDOM from 'react-dom'
import Playground from 'component-playground'
import {Slider} from '../../../'

const defaultSliderComponent =
`<input
  type='range'
  min='0'
  max='100'
/>`

const defaultSliderWithStepsComponent =
`<input
  type='range'
  min='0'
  max='100'
  step='10'
/>`

const sliderComponent =
`class App extends React.Component {

  state = {
    value: 0,
    settledValue: 0
  }

  onChange = (value) => {
    this.setState({value})
  }

  onMouseUp = (settledValue) => {
    this.setState({settledValue})
  }

  render () {
    return (
        <div>
          <h4>onChange: {Math.round(this.state.value)}</h4>
          <h4>onMouseUp: {Math.round(this.state.settledValue)}</h4>
          <Slider onChange={this.onChange} onMouseUp={this.onMouseUp} />
        </div>
    )
  }
}

ReactDOM.render(<App />, mountNode)`

const sliderWithStepsComponent =
`<Slider
  step={10}
/>`

export default class SliderRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Slider</h2>
          <Playground
            docClass={Slider}
            codeText={sliderComponent}
            scope={{React, ReactDOM, Slider}}
            noRender={false}
            collapsableCode
          />
        </section>
        <section>
          <h2>Slider with steps</h2>
          <Playground
            codeText={sliderWithStepsComponent}
            noRender={false}
            scope={{React, ReactDOM, Slider}}
            collapsableCode
          />
        </section>
        <section>
          <h2>Default slider</h2>
          <Playground
            codeText={defaultSliderComponent}
            scope={{React}}
            collapsableCode
          />
        </section>
        <section>
          <h2>Default slider with steps</h2>
          <Playground
            codeText={defaultSliderWithStepsComponent}
            scope={{React}}
            collapsableCode
          />
        </section>
        <section>
          <h2>Specification</h2>
          <a href='https://material.google.com/components/sliders.html'>
            https://material.google.com/components/sliders.html
          </a>
        </section>
      </div>
    )
  }

}
