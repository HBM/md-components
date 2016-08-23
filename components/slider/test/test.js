/* global it, describe, KeyboardEvent */

import assert from 'assert'
import React from 'react'
import Slider from '../'
import {mount} from 'enzyme'

describe('Slider', () => {
  it('should have a default value of 50', () => {
    const wrapper = mount(<Slider />)
    assert.equal(wrapper.find('.Slider-input').node.value, '50')
  })

  it('should reflect changes made to input type range', () => {
    const wrapper = mount(<Slider />)
    wrapper.find('.Slider-input').simulate('change', {
      target: {
        value: 45
      }
    })
    assert.equal(wrapper.find('.Slider-input').node.value, '45')
  })

  it('should fade out the thumb when value is zero', () => {
    const wrapper = mount(<Slider />)
    wrapper.find('.Slider-input').simulate('change', {
      target: {
        value: 0
      }
    })
    assert(wrapper.find('.Slider-thumb').hasClass('is-zero'))
  })

  it.skip('should work with keyboard arrow keys', () => {
    const wrapper = mount(<Slider />)
    // make sure default value is 50
    assert.equal(wrapper.find('.Slider-input').node.value, '50')
    // simulate keyboard event
    var event = new KeyboardEvent('keypress', {
      key: 'ArrowLeft',
      keyCode: 37
    })
    wrapper.find('.Slider-input').node.dispatchEvent(event)
    assert.equal(wrapper.find('.Slider-input').node.value, '49')
    // simulate keyboard event
    event = new KeyboardEvent('keypress', {
      key: 'ArrowRight',
      keyCode: 39
    })
    wrapper.find('.Slider-input').node.dispatchEvent(event)
    assert.equal(wrapper.find('.Slider-input').node.value, '50')
  })

  it.skip('should work with custom step', () => {
    const wrapper = mount(<Slider step={10} />)
    assert.equal(wrapper.find('.Slider-input').node.value, '50')
    let event = new KeyboardEvent('keypress', {
      key: 'ArrowLeft',
      keyCode: 37
    })
    wrapper.find('.Slider-input').node.dispatchEvent(event)
    assert.equal(wrapper.find('.Slider-input').node.value, '40')
  })
})
