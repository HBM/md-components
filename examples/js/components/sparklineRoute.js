
import React from 'react'
import {Sparkline} from '../../../'

export default class SparklineRoute extends React.Component {

  state = {
    data: new Uint8Array(250)
  }

  componentDidMount () {
    this.raf = window.requestAnimationFrame(this.tick)
  }

  componentWillUnmount () {
    window.cancelAnimationFrame(this.raf)
  }

  random = () => {
    const min = 0
    const max = 100
    return window.Math.floor(window.Math.random() * (max - min + 1)) + min
  }

  tick = () => {
    let data = new Uint8Array(250)
    for (let i = 1; i < 250; i++) {
      data[i - 1] = this.state.data[i]
    }
    data[249] = this.random()
    this.setState({data})
    this.raf = window.requestAnimationFrame(this.tick)
  }

  render () {
    return (
      <section>
        <h2>Sparkline</h2>
        <Sparkline data={this.state.data} />
      </section>
    )
  }

}
