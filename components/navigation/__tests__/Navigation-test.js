/* global describe, it, expect */

import React from 'react'
import Navigation from '../'
import {mount, shallow} from 'enzyme'

describe('Navigation', () => {
  it('should work', () => {
    const wrapper = shallow(<Navigation links={[]} />)
    expect(wrapper.find('nav')).toBeTruthy()
  })

  it('should propagate changes up to its parent component', (done) => {
    var items = [
      {text: 'one', link: 'one'},
      {text: 'two', link: 'two'}
    ]
    var onChange = (link) => {
      expect(link.text).toEqual('one')
      done()
    }
    const wrapper = mount(<Navigation links={items} onChange={onChange} />)
    wrapper.find({title: 'one'}).simulate('click')
  })
})
