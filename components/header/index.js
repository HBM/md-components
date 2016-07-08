
import React from 'react'
import Icon from '../icon/'

/**
 * Header component
 */
var Header = ({children, title, subtitle}) => (
  <header>
    <div className='Header'>
      <div className='Header-block'>
        <span className='Header-title'>
          {title}
        </span>
        {subtitle &&
          <span className='Header-subtitle'>
            <Icon.ChevronRight className='Header-chevron' />
            {subtitle}
          </span>
        }
      </div>
      <div className='Header-block'>
        {children}
      </div>
    </div>
  </header>
)

/**
 * Property types
 */
Header.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string
}

/**
 * Export component
 */
export default Header
