
import React from 'react'

/**
 * Slider
 */
export default class Slider extends React.Component {

  static propTypes = {
    step: React.PropTypes.number
  }

  static defaultProps = {
    step: 1
  }

  state = {
    mouseDown: false,
    isAnimating: false,
    value: 50,
    // ratio between actual dom element width and range value (0 -> 100)
    ratio: 1
  }

  onChange = (event) => {
    var value = parseInt(event.target.value, 10)
    this.setState({
      value: value
    })
  }

  // get initial width of dom element
  componentDidMount () {
    var {slider} = this.refs
    var width = slider.getBoundingClientRect().width - 16
    this.setState({
      ratio: width / 100
    })
  }

  onMouseUp = (event) => {
    event.preventDefault()
    this.setState({
      mouseDown: false
    })
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('touchmove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('touchend', this.onMouseUp)
  }

  onMouseDown = (event) => {
    event.preventDefault()
    var {slider} = this.refs
    var pageX = event.pageX || event.touches[0].pageX
    var x = pageX - 8 - slider.getBoundingClientRect().left
    var value = x / this.state.ratio
    if (value > 100) {
      value = 100
    }
    if (value < 0) {
      value = 0
    }
    this.setState({
      value: value,
      mouseDown: true
    })
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('touchmove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('touchend', this.onMouseUp)
  }

  onMouseMove = (event) => {
    event.preventDefault()
    if (this.state.mouseDown) {
      var {slider} = this.refs
      var pageX = event.pageX || event.touches[0].pageX
      var x = pageX - 8 - slider.getBoundingClientRect().left
      var value = x / this.state.ratio
      if (value > 100) {
        value = 100
      }
      if (value < 0) {
        value = 0
      }
      this.setState({
        value: value
      })
    }
  }

  render () {
    var position = (this.state.value * this.state.ratio)

    return (
      <label className='Slider'>
        <input
          className='Slider-input'
          max='100'
          min='0'
          onChange={this.onChange}
          step={this.props.step}
          type='range'
          value={this.state.value}
        />
        <div
          className='Slider-track'
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onMouseDown}
          onMouseMove={this.onMouseMove}
          onTouchMove={this.onMouseMove}
          ref='slider'>
          <div className='Slider-track-off'>
            <div
              className='Slider-track-on'
              style={{width: `${position}px`}}>
            </div>
          </div>
          <div
            className={`Slider-thumb${this.state.value === 0 ? ' is-zero' : ''}`}
            style={{left: `${position}px`}}>
          </div>
        </div>
      </label>
    )
  }

}
