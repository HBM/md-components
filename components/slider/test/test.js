/* global it, describe */

import assert from 'assert'
import React from 'react'
import Slider from '../'
import {mount} from 'enzyme'

describe('Slider', () => {
  it('should have a default value of 0', () => {
    const wrapper = mount(<Slider min={0} max={3} />)
    assert.equal(wrapper.find('.Slider-input').node.value, '0')
  })

  it('should reflect changes made to input type range', () => {
    const wrapper = mount(<Slider min={0} max={3} />)
    wrapper.find('.Slider-input').simulate('change', {
      target: {
        value: 45
      }
    })
    assert.equal(wrapper.find('.Slider-input').node.value, '45')
  })

  it('should fade out the thumb when value is min', () => {
    const wrapper = mount(<Slider min={-1} max={3} />)
    wrapper.find('.Slider-input').simulate('change', {
      target: {
        value: -1
      }
    })
    assert(wrapper.find('.Slider-thumb').hasClass('is-zero'))
  })

  it.skip('should work with keyboard arrow keys', () => {
    const wrapper = mount(<Slider min={3} max={7} value={5} />)
    // make sure default value is 5
    assert.equal(wrapper.find('.Slider-input').node.value, '5')
    wrapper.find('.Slider-input').simulate('keypress', {
      key: 'ArrowLeft',
      keyCode: 37
    })
    assert.equal(wrapper.find('.Slider-input').node.value, '4')
    wrapper.find('.Slider-input').simulate('keypress', {
      key: 'ArrowRight',
      keyCode: 39
    })
    assert.equal(wrapper.find('.Slider-input').node.value, '5')
  })

  it.skip('should work with custom step', () => {
    const wrapper = mount(<Slider step={10.1} min={1.3} max={20} value={1.3} />)
    assert.equal(wrapper.find('.Slider-input').node.value, '1.3')
    wrapper.find('.Slider-input').simulate('keypress', {
      key: 'ArrowRight',
      keyCode: 39
    })
    assert.equal(wrapper.find('.Slider-input').node.value, '11.4')
  })
})
