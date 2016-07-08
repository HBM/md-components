/* global expect, it, describe */

import React from 'react'
import Switch from '../'
import {mount} from 'enzyme'

describe('Switch', () => {
  it('should be off by default', () => {
    const wrapper = mount(<Switch name='' onChange={() => {}} />)
    expect(wrapper.find('input').props().checked).toBe(false)
  })

  it('should be able to set to checked', () => {
    const wrapper = mount(<Switch name='' checked onChange={() => {}} />)
    expect(wrapper.find('input').props().checked).toBe(true)
  })

  it('should be able to be set to disabled', () => {
    const wrapper = mount(<Switch name='' disabled onChange={() => {}} />)
    expect(wrapper.find('input').props().disabled).toBe(true)
  })

  it('should allow toggle on/off', (done) => {
    const callback = (event) => {
      expect(event.target.checked).toBe(true)
      done()
    }
    const wrapper = mount(<Switch name='' onChange={callback} />)
    wrapper.find('input').simulate('change', {
      target: {
        checked: true
      }
    })
  })
})
