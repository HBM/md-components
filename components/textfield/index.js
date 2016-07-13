
import React from 'react'
import classnames from 'classnames'

const Textfield = ({
  autoFocus,
  disabled,
  error,
  icon,
  label,
  name,
  onChange,
  readOnly,
  type,
  value
}) => {
  var empty = value === ''
  return (
    <label className='Textfield'>
      <div className='Textfield-icon-wrapper'>
        {
          icon
          ? <div className='Textfield-icon'>{icon}</div>
          : null
        }
        <div className='Textfield-wrapper'>
          <input
            autoFocus={autoFocus}
            className={classnames('Textfield-input', {
              'Textfield-input--error': error,
              'is-not-empty': !empty
            })}
            disabled={disabled}
            name={name}
            onChange={onChange}
            readOnly={readOnly}
            type={type}
            value={value}
          />
          <span
            className={classnames('Textfield-label', {
              'is-not-empty': !empty
            })}
          >
            {label}
          </span>
          {error
            ? <span className='Textfield-error'>{error}</span>
            : null
          }
        </div>
      </div>
    </label>
  )
}

Textfield.propTypes = {
  autoFocus: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool
  ]),
  icon: React.PropTypes.element,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  readOnly: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['text', 'password']),
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}

Textfield.defaultProps = {
  autoFocus: false,
  disabled: false,
  error: '',
  label: 'Label',
  name: '',
  readOnly: false,
  type: 'text',
  value: ''
}

export default Textfield
