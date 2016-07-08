/* global expect, it, describe */

import React from 'react'
import Tooltip from '../'
import {mount} from 'enzyme'

describe('Tooltip', () => {
  it('should work', () => {
    const wrapper = mount(
      <Tooltip>
        <span>
          lorem ipsum dolor etc.
        </span>
      </Tooltip>
    )
    expect(wrapper.find('.Tooltip').length).toEqual(1)
  })

  it('should render content', () => {
    const wrapper = mount(
      <Tooltip content='some test content'>
        <span>
          lorem ipsum dolor etc.
        </span>
      </Tooltip>
    )
    expect(wrapper.find('.Tooltip').text()).toEqual('some test content')
  })

  it('should be hidden by default', () => {
    const wrapper = mount(
      <Tooltip>
        <span>
          lorem ipsum dolor etc.
        </span>
      </Tooltip>
    )
    expect(wrapper.find('.Tooltip').node.style.opacity).toEqual('0')
  })

  it('should be visible when specified', () => {
    const wrapper = mount(
      <Tooltip visible>
        <span>
          lorem ipsum dolor etc.
        </span>
      </Tooltip>
    )
    expect(wrapper.find('.Tooltip').node.style.opacity).toEqual('1')
  })
})
