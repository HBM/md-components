import React from 'react'
import classNames from 'classnames'

/**
 * List components
 * TODO:
 *  - borders (spec not clear about borders)
 *  - condensed
 */
export const List = ({children, style}) => (
  <ol className='List' style={style}>
    {children}
  </ol>
)

export const Row = ({primary, secondary, subheader, avatar, icon, onClick, style}) => {
  const avatarElement = avatar &&
    <div className='List-row-avatar'>
      {(typeof avatar === 'string' ? <img src={avatar} /> : avatar)}
    </div>

  const iconLeftElement = !avatar && icon &&
    <div className='List-row-icon-left'>
      {icon}
    </div>

  const iconRightElement = avatar && icon &&
    <div className='List-row-icon-right'>
      {icon}
    </div>

  const dynamicClasses = {
    'List-row--twoline': (secondary && !subheader),
    'List-row--threeline': (secondary && subheader)
  }
  return (
    <li className={classNames('List-row', dynamicClasses)} onClick={onClick} style={style}>
      {avatarElement}
      {iconLeftElement}
      <div className='List-row-text'>
        <h3 className='List-row-text-primary'>{primary}</h3>
        {subheader && <h4 className='List-row-text-subheader'>{subheader}</h4>}
        {secondary && <span className='List-row-text-secondary'>{secondary}</span>}
      </div>
      {iconRightElement}
    </li>
  )
}
