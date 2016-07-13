
import React from 'react'
import classnames from 'classnames'

const Button = ({disabled, children, onClick, raised, type}) => (
  <button
    className={classnames('Button', {
      'Button--raised': raised
    })}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
)

Button.propTypes = {
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func.isRequired,
  raised: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['submit', 'reset', 'button'])
}

Button.defaultProps = {
  disabled: false,
  raised: false,
  type: 'button'
}

export default Button
