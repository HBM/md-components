import React from 'react'

import classList from './classList'

Object.keys(classList).forEach(function (className) {
  exports[className] = classList[className]
})

/**
 * Icon.Button for better touch targets on mobile browsers
 */
class Button extends React.Component {

  static propTypes = {
    onClick: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <button type='button' className='IconButton' {...this.props}>
        {this.props.children}
      </button>
    )
  }

}

/**
 * HBM Logo
 */
class Logo extends React.Component {

  render () {
    var fill = this.props.fill || '#fff'

    var style = {
      maxWidth: '100%',
      maxHeight: '100%'
    }

    return (
      <svg
        width='68'
        height='61'
        viewBox='0 0 68 61'
        style={style}
      >
        <polygon style={{fill}} points='61.9 42.6 68 42.6 68 61 63.3 61 63.3 49.7 57.7 61 53.7 61 48.2 49.7 48.2 61 43.4 61 43.4 42.6 49.6 42.6 55.7 55.1 61.9 42.6 ' />
        <polygon style={{fill}} points='0 61 0 42.6 4.7 42.6 4.7 49.9 13.9 49.9 13.9 42.6 18.7 42.6 18.7 61 13.9 61 13.9 53.7 4.7 53.7 4.7 61 0 61 ' />
        <path style={{fillRule: 'evenodd', clipRule: 'evenodd', fill}} d='M0 0h68v40.4H0V0L0 0zM41.6 36.6c-1.8-2.6-2.9-5.8-2.9-9.2 0-8.9 7.2-16.1 16.1-16.1 3.1 0 6 0.9 8.5 2.4v-10H4.7v32.9L41.6 36.6 41.6 36.6zM43.4 27.4c0-6.3 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3c0 6.3-5.1 11.3-11.3 11.3S43.4 33.7 43.4 27.4L43.4 27.4z' />
        <path style={{fill}} d='M38.1 51.1c1.1-0.7 2.3-1.7 2.3-4s-1.4-4-3.7-4.5H22V61h13.9c2.9 0 5.2-2.3 5.2-5.2C41.1 53.8 39.9 51.8 38.1 51.1zM26.1 46.1l7.6 0c1 0 1.6 0.8 1.6 1.8 0 1-0.6 1.8-1.6 1.8h-7.6V46.1zM33.3 57.5h-7.2V53h7.2c1.7-0.1 2.8 0.6 2.8 2.1C36.1 56.5 34.9 57.5 33.3 57.5z' />
      </svg>
    )
  }
}

/**
 * Export components
 */
exports.Button = Button
exports.Logo = Logo
