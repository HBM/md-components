/* global describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import Sparkline from '../'

describe('Sparkline', () => {
  it('should work', () => {
    const wrapper = shallow(<Sparkline />)
    expect(wrapper.find('canvas').length).toBe(1)
  })
})
