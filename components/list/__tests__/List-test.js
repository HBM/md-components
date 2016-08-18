/* global describe, it, expect */

import React from 'react'
import { shallow, mount } from 'enzyme'
import { List, Row } from '../'
import sinon from 'sinon'

describe('List', () => {
  it('should work', () => {
    const wrapper = shallow(<List />)
    expect(wrapper.find('.List').length).toBe(1)
  })

  it('should render the child Rows', () => {
    const wrapper = mount(
      <List>
        <Row primary='A' />
        <Row primary='B' />
      </List>)
    expect(wrapper.find('.List-row').length).toEqual(2)
  })

  describe('Row', () => {
    it('should render "primary"', () => {
      const wrapper = shallow(<Row primary='ABC' />)
      expect(wrapper.find('.List-row-text-primary').text()).toEqual('ABC')
    })

    it('should render "secondary"', () => {
      const wrapper = shallow(<Row primary='ABC' secondary='ppp' />)
      expect(wrapper.find('.List-row-text-secondary').first().text()).toEqual('ppp')
      expect(wrapper.find('.List-row--twoline').length).toEqual(1)
    })

    it('should render "secondary" and "subheader"', () => {
      const wrapper = shallow(<Row primary='ABC' subheader='asd' secondary='ppp' />)
      expect(wrapper.find('.List-row-text-secondary').first().text()).toEqual('ppp')
      expect(wrapper.find('.List-row-text-subheader').text()).toEqual('asd')
      expect(wrapper.find('.List-row--threeline').length).toEqual(1)
    })

    it('should render "avatar" with url', () => {
      const wrapper = shallow(<Row primary='ABC' avatar='http://foo.com/image.jpg' />)
      expect(wrapper.find('.List-row-avatar img').prop('src')).toEqual('http://foo.com/image.jpg')
    })

    it('should render "avatar" with element', () => {
      const wrapper = shallow(<Row primary='ABC' avatar={<div x='foo' />} />)
      expect(wrapper.find('.List-row-avatar > div').prop('x')).toEqual('foo')
    })

    it('should render "icon" left', () => {
      const dummy = <div x='foo' />
      const wrapper = shallow(
        <Row primary='ABC' icon={dummy} />
      )
      expect(wrapper.find('.List-row-icon-left > div').prop('x')).toEqual('foo')
    })

    it('should render "avatar" with url and "icon" right', () => {
      const dummy = <div x='foo' />
      const wrapper = shallow(<Row primary='ABC' avatar='http://foo.com/image.jpg' icon={dummy} />)
      expect(wrapper.find('.List-row-avatar img').prop('src')).toEqual('http://foo.com/image.jpg')
      expect(wrapper.find('.List-row-icon-right > div').prop('x')).toEqual('foo')
    })

    it('calls onClick', () => {
      const onClick = sinon.spy()
      const wrapper = shallow(<Row primary='ABC' onClick={onClick} />)
      wrapper.simulate('click')
      expect(onClick.callCount).toEqual(1)
    })
  })
})
