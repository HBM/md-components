/* global describe, it */

import assert from 'assert'
import React from 'react'
import {mount} from 'enzyme'
import Chip from '../'

describe('Chip', () => {
  it('should render an input field', () => {
    const wrapper = mount(<Chip />)
    assert.equal(wrapper.find('.Chip-input').length, 1)
  })

  it('should be empty by default', () => {
    const wrapper = mount(<Chip />)
    assert.equal(wrapper.find('.Chip').length, 0)
  })

  it('should accept autoFocus prop', () => {
    const wrapper = mount(<Chip autoFocus />)
    assert.equal(wrapper.find('.Chip-input').prop('autoFocus'), true)
  })

  it('should accept initial chips as property', () => {
    const wrapper = mount(<Chip initialValues={['one', 'two']} />)
    assert.equal(wrapper.find('.Chip').length, 2)
  })

  it('should add a chip on enter', () => {
    const wrapper = mount(<Chip initialValues={[]} />)
    wrapper.find('input').simulate('change', {
      target: {
        value: 'hello'
      }
    })
    // make sure input has new value / state
    assert.equal(wrapper.find('input').node.value, 'hello')
    wrapper.find('input').simulate('keypress', {
      which: 13
    })
  })

  // it('should not add a chip when input field is empty', () => {
  //
  // })

  // it('should call back when chip is added', () => {
  //
  // })

  // it('should focus the last chip when left arrow is pressed inside input the field', () => {

  // })

  // it('should focus the first chip when right arrow is pressed inside the input field', () => {

  // })
})
