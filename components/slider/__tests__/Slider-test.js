/* global expect, it, describe, KeyboardEvent */

import React from 'react'
import Slider from '../'
import {mount} from 'enzyme'

describe('Slider', () => {
  it('should have a default value of 50', () => {
    const wrapper = mount(<Slider />)
    expect(wrapper.find('.Slider-input').node.value).toEqual('50')
  })

  it('should reflect changes made to input type range', () => {
    const wrapper = mount(<Slider />)
    wrapper.find('.Slider-input').simulate('change', {
      target: {
        value: 45
      }
    })
    expect(wrapper.find('.Slider-input').node.value).toEqual('45')
  })

  it('should fade out the thumb when value is zero', () => {
    const wrapper = mount(<Slider />)
    wrapper.find('.Slider-input').simulate('change', {
      target: {
        value: 0
      }
    })
    expect(wrapper.find('.Slider-thumb').hasClass('is-zero')).toBe(true)
  })

  it('should work with keyboard arrow keys', () => {
    const wrapper = mount(<Slider />)
    // make sure default value is 50
    expect(wrapper.find('.Slider-input').node.value).toEqual('50')
    // simulate keyboard event
    var event = new KeyboardEvent('keypress', {
      key: 'ArrowLeft',
      keyCode: 37
    })
    wrapper.find('.Slider-input').node.dispatchEvent(event)
    expect(wrapper.find('.Slider-input').node.value).toEqual('49')
    // simulate keyboard event
    event = new KeyboardEvent('keypress', {
      key: 'ArrowRight',
      keyCode: 39
    })
    wrapper.find('.Slider-input').node.dispatchEvent(event)
    expect(wrapper.find('.Slider-input').node.value).toEqual('50')
  })

  it('should work with custom step', () => {
    const wrapper = mount(<Slider step={10} />)
    expect(wrapper.find('.Slider-input').node.value).toEqual('50')
    let event = new KeyboardEvent('keypress', {
      key: 'ArrowLeft',
      keyCode: 37
    })
    wrapper.find('.Slider-input').node.dispatchEvent(event)
    expect(wrapper.find('.Slider-input').node.value).toEqual('40')
  })
})
