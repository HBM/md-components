/* global describe, it, expect */

import React from 'react'
import Icon from '../'
import {shallow} from 'enzyme'

describe('Icon', () => {
  it('should render Icon.AlarmOff', () => {
    const wrapper = shallow(<Icon.AlarmOff />)
    expect(wrapper.find('svg')).toBeTruthy()
  })

  it('should render icon button', () => {
    const onClick = () => {}
    const wrapper = shallow(
      <Icon.Button onClick={onClick}>
        <Icon.Person />
      </Icon.Button>
    )
    expect(wrapper.find('.IconButton')).toBeTruthy()
  })

  it('should bubble up button onclick event', (done) => {
    const onClick = () => done()
    const wrapper = shallow(
      <Icon.Button onClick={onClick}>
        <Icon.Person />
      </Icon.Button>
    )
    wrapper.find('.IconButton').simulate('click')
  })
})
