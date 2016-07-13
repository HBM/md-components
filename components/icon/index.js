
import React from 'react'

/**
 * Icon SVG
 *
 * All icons are 24px at the moment!
 */
const icons = {
  Person: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  Help: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z',
  Home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
  Assessment: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
  Dashboard: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
  List: 'M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z',
  MoreVert: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
  Menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
  Language: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z',
  ChevronRight: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z',
  ArrowForward: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z',
  TrendingFlat: 'M22 12l-4-4v3H3v2h15v3z',
  VPNKey: 'M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
  Done: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z'
}

/**
 * Export all icons
 */
Object.keys(icons).forEach(key => {
  let value = icons[key]

  class Icon extends React.Component {

    static propTypes = {
      fill: React.PropTypes.string
    }

    render () {
      return (
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill={this.props.fill}
          className={this.props.className}
        >
          <path
            d={value}
          />
        </svg>
      )
    }

  }

  exports[key] = Icon
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
