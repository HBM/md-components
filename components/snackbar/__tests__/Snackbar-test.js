/* global expect, it, describe */

import React from 'react'
import Snackbar from '../'
import {mount} from 'enzyme'

describe('Snackbar', () => {
  it('should be empty by default', () => {
    const wrapper = mount(<Snackbar visible />)
    expect(wrapper.find('.Snackbar').text()).toEqual('')
  })

  it('should render with text', () => {
    const wrapper = mount(<Snackbar visible text='all good' />)
    expect(wrapper.find('.Snackbar').text()).toEqual('all good')
  })

  it('should render with text and action button', () => {
    const wrapper = mount(<Snackbar visible text='all good' action='undo' />)
    expect(wrapper.find('input').node.value).toEqual('undo')
  })

  it('should trigger an event when clicking on action button', (done) => {
    const callback = () => done()
    const wrapper = mount(<Snackbar visible text='all good' action='undo' onAction={callback} />)
    wrapper.find('input').simulate('click')
  })

  it('should be hidden by default', () => {
    const wrapper = mount(<Snackbar />)
    expect(wrapper.find('.Snackbar').length).toEqual(0)
  })
})
