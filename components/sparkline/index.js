
import React from 'react'

export default class Sparkline extends React.Component {

  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number
  }

  static defaultProps = {
    width: 100,
    height: 40
  }

  componentDidMount () {
    var ctx = this.refs.canvas.getContext('2d')
    this.paint(ctx)
  }

  componentDidUpdate () {
    var ctx = this.refs.canvas.getContext('2d')
    ctx.clearRect(0, 0, this.props.width, this.props.height)
    this.paint(ctx)
  }

  paint (ctx) {
    // const {data, width, height} = this.props
    const data = this.props.data
    const max = window.Math.max.apply(null, data)
    const height = this.props.height * 0.8 // 10 percent margin top and bottom
    let x = 0
    const xstep = this.props.width / (data.length - 1)
    const ystep = max / height
    let y = height - data[0] / ystep + (0.1 * this.props.height)

    ctx.lineWidth = 1
    ctx.strokeStyle = 'steelblue'
    ctx.beginPath()
    // move half a pixel to get sharper lines
    ctx.moveTo(x + 0.5, y + 0.5)
    for (let i = 0; i < data.length; i++) {
      x = x + xstep
      y = height - (data[i] / ystep) + (0.1 * this.props.height)
      ctx.lineTo(x + 0.5, y + 0.5)
    }
    ctx.stroke()
  }

  render () {
    return (
      <canvas
        width={this.props.width}
        height={this.props.height}
        ref='canvas'
      />
    )
  }

}
