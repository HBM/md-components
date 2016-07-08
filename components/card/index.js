
import React from 'react'

/**
 * Card component
 */
export var Card = ({children}) => (
  <div className='Card'>
    {children}
  </div>
)

export var Title = ({children}) => (
  <div className='Card-title'>
    {children}
  </div>
)

export var Actions = ({children}) => (
  <div className='Card-actions'>
    {children}
  </div>
)

export var Text = ({children}) => (
  <div className='Card-text'>
    {children}
  </div>
)

export var Content = ({children}) => (
  <div className='Card-content'>
    {children}
  </div>
)
