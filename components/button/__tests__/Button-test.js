/* global describe, it, expect */

import React from 'react'
import Button from '../'
import {createRenderer} from 'react-addons-test-utils'

describe('Button', () => {
  it('should bubble up click events', () => {
    let renderer = createRenderer()
    let clicked = false
    let click = () => {
      clicked = true
    }
    renderer.render(<Button onClick={click} />)
    let button = renderer.getRenderOutput()
    button.props.onClick()
    expect(clicked).toBe(true)
  })

  it('should have `Button--raised` class when raised property is true', () => {
    let renderer = createRenderer()
    renderer.render(<Button onClick={() => {}} raised />)
    let button = renderer.getRenderOutput()
    expect(button.props.className).toContain('Button--raised')
  })

  it('should be disabled when told so', () => {
    let renderer = createRenderer()
    renderer.render(<Button onClick={() => {}} disabled />)
    let button = renderer.getRenderOutput()
    expect(button.props.disabled).toBe(true)
  })
})
