/* global describe, expect, it */

import React from 'react'
import {shallow} from 'enzyme'
import Checkbox from '../'

describe('Checkbox', () => {
  it('should render a simple example', () => {
    const wrapper = shallow(<Checkbox onChange={() => {}} />)
    expect(wrapper.find('.Checkbox').length).toBe(1)
  })

  it('should not be checked by default', () => {
    const wrapper = shallow(<Checkbox onChange={() => {}} />)
    expect(wrapper.find('.Checkbox-input').props().checked).toBe(false)
  })

  it('should render a checked checkbox', () => {
    const wrapper = shallow(<Checkbox checked onChange={() => {}} />)
    expect(wrapper.find('.Checkbox-input').props().checked).toBe(true)
  })

  it('should render a disabled checkbox', () => {
    const wrapper = shallow(<Checkbox disabled onChange={() => {}} />)
    expect(wrapper.find('.Checkbox-input').props().disabled).toBe(true)
  })

  it('should have a default label', () => {
    const wrapper = shallow(<Checkbox onChange={() => {}} />)
    expect(wrapper.find('.Checkbox-label').text()).toBe('Label')
  })

  it('should render a custom label', () => {
    const wrapper = shallow(<Checkbox label='custom label' onChange={() => {}} />)
    expect(wrapper.find('.Checkbox-label').text()).toBe('custom label')
  })

  it('should callback when clicked', (done) => {
    const change = () => done()
    const wrapper = shallow(<Checkbox onChange={change} />)
    wrapper.find('.Checkbox-input').simulate('change')
  })
})
