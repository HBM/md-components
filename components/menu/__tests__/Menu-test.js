/* global describe, it, expect */

import React from 'react'
import {Menu} from '../'
import {mount} from 'enzyme'

function noop () {}

describe('Menu', () => {
  it('should work', () => {
    const wrapper = mount(<Menu onClick={noop} />)
    expect(wrapper.find('.Menu').length).toEqual(1)
  })

  it('should use initial items', () => {
    const wrapper = mount(
      <Menu onClick={noop} visible items={['Dog', 'Cat', 'Mouse']} />
    )
    expect(wrapper.find('.Menu').text()).toEqual('DogCatMouse')
  })

  it('should render the list closed', () => {
    const wrapper = mount(
      <Menu onClick={noop} items={['Dog', 'Cat', 'Mouse']} />
    )
    expect(wrapper.find('.Menu-list').length).toEqual(0)
  })

  it('should notify on item click', (done) => {
    function onClick (animal) {
      expect(animal).toEqual('Cat')
      done()
    }
    const wrapper = mount(
      <Menu onClick={onClick} visible items={['Dog', 'Cat', 'Mouse']} />
    )
    wrapper.find('.Menu-list-item-link').at(1).simulate('click')
  })
})
