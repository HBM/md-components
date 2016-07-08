/* global describe, it, expect */

import React from 'react'
import Icon from '../'
import {shallow} from 'enzyme'

describe('Icon', () => {
  Object.keys(Icon).map(key => {
    if (key !== 'Button') {
      var value = Icon[key]
      it(`should render ${key}`, () => {
        const wrapper = shallow(React.createElement(value))
        expect(wrapper.find('svg')).toBeTruthy()
      })
    }
  })

  it('should render icon button', () => {
    const onClick = () => {}
    const wrapper = shallow(
      <Icon.Button onClick={onClick}>
        <Icon.Person />
      </Icon.Button>
    )
    expect(wrapper.find('button')).toBeTruthy()
  })

  it('should bubble up button onclick event', (done) => {
    const onClick = () => done()
    const wrapper = shallow(
      <Icon.Button onClick={onClick}>
        <Icon.Person />
      </Icon.Button>
    )
    wrapper.find('button').simulate('click')
  })
})
