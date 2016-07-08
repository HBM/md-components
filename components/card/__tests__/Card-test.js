/* global describe, it, expect */

import React from 'react'
import {Card, Title} from '../'
import {createRenderer} from 'react-addons-test-utils'

describe('Card', () => {
  it('should work', () => {
    let renderer = createRenderer()
    renderer.render(<Card />)
    let card = renderer.getRenderOutput()
    expect(card).toBeTruthy()
  })

  it('should render the title', () => {
    let renderer = createRenderer()
    renderer.render(<Title>some title</Title>)
    let card = renderer.getRenderOutput()
    expect(card.props.children).toEqual('some title')
  })
})
