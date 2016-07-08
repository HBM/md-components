/* global expect, it, describe */

import React from 'react'
import Modal from '../'
import {mount} from 'enzyme'

describe('Modal', () => {
  it('should work', () => {
    const wrapper = mount(<Modal visible />)
    expect(wrapper.find('.Modal').length).toBe(1)
  })

  it('should be hidden by default', () => {
    const wrapper = mount(<Modal />)
    expect(wrapper.find('.Modal').length).toBe(0)
  })

  it('should callback when clicking on dark background', (done) => {
    const callback = (visible) => {
      expect(visible).toBe(false)
      done()
    }
    const wrapper = mount(<Modal visible toggle={callback} />)
    wrapper.find('.Modal-overlay').simulate('click')
  })

  it('should callback when touching dark background', (done) => {
    const callback = (visible) => {
      expect(visible).toBe(false)
      done()
    }
    const wrapper = mount(<Modal visible toggle={callback} />)
    wrapper.find('.Modal-overlay').simulate('touchend')
  })

  it('should have a custom header', () => {
    const header = <p>my custom header</p>
    const wrapper = mount(<Modal visible header={header} />)
    expect(wrapper.find('.Modal-header').text()).toEqual('my custom header')
  })

  it('should have a custom body', () => {
    const body = <p>my custom body</p>
    const wrapper = mount(<Modal visible body={body} />)
    expect(wrapper.find('.Modal-body').text()).toEqual('my custom body')
  })

  it('should have a custom footer', () => {
    const footer = <p>my custom footer</p>
    const wrapper = mount(<Modal visible footer={footer} />)
    expect(wrapper.find('.Modal-footer').text()).toEqual('my custom footer')
  })
})
