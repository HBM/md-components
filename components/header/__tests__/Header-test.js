/* global describe, it, expect */

import React from 'react'
import {shallow} from 'enzyme'
import Header from '../'

describe('Header', () => {
  it('should have a title', () => {
    const wrapper = shallow(<Header title='some title' />)
    expect(wrapper.find('.Header-title').text()).toEqual('some title')
  })

  it('should render some content', () => {
    const wrapper = shallow(
      <Header>
        <span>One</span>
        <span>Two</span>
      </Header>
    )
    expect(wrapper.text()).toEqual('OneTwo')
  })

  it('should have a subtitle', () => {
    const wrapper = shallow(<Header title='some title' subtitle='some subtitle' />)
    expect(wrapper.find('.Header-subtitle').text()).toContain('some subtitle')
  })
})
