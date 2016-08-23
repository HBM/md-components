/* global describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import Button from '../'

describe('Button', () => {
  it('should bubble up click events', (done) => {
    const click = () => done()
    const wrapper = shallow(<Button onClick={click} />)
    wrapper.find('.Button').simulate('click')
  })

  it('should have `Button--raised` class when raised property is true', () => {
    const wrapper = shallow(<Button onclick={() => {}} raised />)
    expect(wrapper.find('.Button').hasClass('Button--raised')).toBe(true)
  })

  it('should be disabled when told so', () => {
    const wrapper = shallow(<Button onClick={() => {}} disabled />)
    expect(wrapper.find('.Button').props().disabled).toBe(true)
  })
})
