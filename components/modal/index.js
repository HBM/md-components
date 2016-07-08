
import React from 'react'
import {Motion, spring} from 'react-motion'

/**
 * Modal component
 */
var Modal = ({origin, header, body, footer, visible, toggle}) => (
  <Motion defaultStyle={{opacity: 0, scale: 0}} style={{
    opacity: visible ? spring(1) : 0,
    scale: visible ? spring(1) : 0
  }}>
    {style =>
      visible &&
        <div
          className='Modal-overlay'
          onClick={() => toggle(false)}
          onTouchEnd={() => toggle(false)}
          style={{
            opacity: style.opacity
          }}
        >
          <div
            className='Modal'
            onClick={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            style={{
              transform: `scale(${style.scale})`
            }}
          >
            <div className='Modal-content'>
              <div className='Modal-header'>
                {header}
              </div>
              <div className='Modal-body'>
                {body}
              </div>
            </div>
            <div className='Modal-footer'>
              {footer}
            </div>
          </div>
        </div>
    }
  </Motion>
)

Modal.propTypes = {
  origin: React.PropTypes.object,
  header: React.PropTypes.element,
  body: React.PropTypes.element,
  footer: React.PropTypes.element,
  visible: React.PropTypes.bool,
  toggle: React.PropTypes.func
}

Modal.defaultProps = {
  visible: false,
  toggle: () => {}
}

export default Modal
