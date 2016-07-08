
import React from 'react'

/**
 * Button
 */
var Button = ({disabled, children, onClick, raised, type}) => (
  <button
    className={`Button${raised ? ' Button--raised' : ''}`}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
)

/**
 * Property types
 */
Button.propTypes = {
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
  raised: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['submit', 'reset', 'button'])
}

/**
 * Default properties
 */
Button.defaultProps = {
  disabled: false,
  raised: false,
  type: 'button'
}

export default Button
