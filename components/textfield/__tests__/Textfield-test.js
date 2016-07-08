/* global expect, it, describe */

import React from 'react'
import Textfield from '../'
import {mount} from 'enzyme'

describe('Textfield', () => {
  it('should be empty by default', () => {
    const wrapper = mount(<Textfield />)
    expect(wrapper.find('input').node.value).toEqual('')
  })

  it('should be able to set a custom value', () => {
    const wrapper = mount(<Textfield value='my custom value' onChange={() => {}} />)
    expect(wrapper.find('input').node.value).toEqual('my custom value')
  })

  it('should have a default label with value `Label`', () => {
    const wrapper = mount(<Textfield />)
    expect(wrapper.find('label').text()).toEqual('Label')
  })

  it('should be able to set a custom label', () => {
    const wrapper = mount(<Textfield label='my custom label' />)
    expect(wrapper.find('label').text()).toEqual('my custom label')
  })

  it('should be able to set to disabled', () => {
    const wrapper = mount(<Textfield disabled />)
    expect(wrapper.find('input').node.disabled).toBe(true)
  })

  it('should be able to set to readOnly', () => {
    const wrapper = mount(<Textfield readOnly />)
    expect(wrapper.find('input').node.readOnly).toBe(true)
  })

  it('should callback upon typing', (done) => {
    const callback = (event) => {
      expect(event.target.value).toBe('hello world')
      done()
    }
    const wrapper = mount(<Textfield onChange={callback} />)
    wrapper.find('input').simulate('change', {
      target: {
        value: 'hello world'
      }
    })
  })

  it('should show an error message', () => {
    const wrapper = mount(<Textfield error='username or password incorrect' />)
    expect(wrapper.find('.Textfield-error').text()).toBe('username or password incorrect')
  })

  it('should apply error styles', () => {
    const wrapper = mount(<Textfield error='username or password incorrect' />)
    expect(wrapper.find('input').hasClass('Textfield-input--error')).toBe(true)
  })

  it('should have the right type', () => {
    const wrapper = mount(<Textfield type='password' />)
    expect(wrapper.find('input').node.type).toBe('password')
  })
})
