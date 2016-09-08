
import React from 'react'
import classnames from 'classnames'

const Textfield = ({
  autoFocus,
  defaultValue,
  disabled,
  error,
  float,
  icon,
  label,
  name,
  onChange,
  readOnly,
  type,
  value
}) => {
  const empty = value === undefined || value === ''
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
              'Textfield-input--error': error
            })}
            defaultValue={defaultValue}
            disabled={disabled}
            name={name}
            onChange={onChange}
            readOnly={readOnly}
            type={type}
            value={value}
          />
          <span
            className={classnames('Textfield-label', {
              'Textfield-label--floatup': (!float || !empty)
            })}
          >
            {label}
          </span>
          <span className='Textfield-error'>{error}</span>
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
  float: React.PropTypes.bool,
  icon: React.PropTypes.element,
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  readOnly: React.PropTypes.bool,
  type: React.PropTypes.oneOf(['text', 'password', 'email', 'search', 'tel', 'url', 'number']),
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  defaultValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ])
}

Textfield.defaultProps = {
  autoFocus: false,
  disabled: false,
  float: true,
  readOnly: false,
  type: 'text'
}

export default Textfield
