/* global describe, expect, it */

import React from 'react'
import Checkbox from '../'
import {createRenderer} from 'react-addons-test-utils'

describe('Checkbox', () => {
  it('should render a simple example', () => {
    let renderer = createRenderer()
    renderer.render(<Checkbox onChange={() => {}} />)
    let box = renderer.getRenderOutput()
    expect(box).toBeTruthy()
  })

  it('should not be checked by default', () => {
    let renderer = createRenderer()
    renderer.render(<Checkbox onChange={() => {}} />)
    let box = renderer.getRenderOutput()
    expect(box.props.children[0].props.checked).toBe(false)
  })

  it('should render a checked checkbox', () => {
    let renderer = createRenderer()
    renderer.render(<Checkbox checked onChange={() => {}} />)
    let box = renderer.getRenderOutput()
    expect(box.props.children[0].props.checked).toBe(true)
  })

  it('should render a disabled checkbox', () => {
    let renderer = createRenderer()
    renderer.render(<Checkbox disabled onChange={() => {}} />)
    let box = renderer.getRenderOutput()
    expect(box.props.children[0].props.disabled).toBe(true)
  })

  it('should have a default label', () => {
    let renderer = createRenderer()
    renderer.render(<Checkbox onChange={() => {}} />)
    let box = renderer.getRenderOutput()
    expect(box.props.children[3].props.children).toBe('Label')
  })

  it('should render a custom label', () => {
    let renderer = createRenderer()
    renderer.render(<Checkbox label='custom label' onChange={() => {}} />)
    let box = renderer.getRenderOutput()
    expect(box.props.children[3].props.children).toBe('custom label')
  })

  it('should toggle between true and false when clicked', () => {
    let renderer = createRenderer()
    let changed = false
    let change = () => {
      changed = true
    }
    renderer.render(<Checkbox onChange={change} />)
    let box = renderer.getRenderOutput()
    box.props.children[0].props.onChange()
    expect(changed).toBe(true)
  })
})
