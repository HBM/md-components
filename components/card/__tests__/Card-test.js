/* global describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import {Card, Title} from '../'

describe('Card', () => {
  it('should work', () => {
    const wrapper = shallow(<Card />)
    expect(wrapper.find('.Card').length).toBe(1)
  })

  it('should render the title', () => {
    const wrapper = shallow(<Title>some title</Title>)
    expect(wrapper.find('.Card-title').text()).toEqual('some title')
  })
})
