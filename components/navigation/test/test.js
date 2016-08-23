/* global describe, it */

import assert from 'assert'
import React from 'react'
import Navigation from '../'
import {mount, shallow} from 'enzyme'

describe('Navigation', () => {
  it('should work', () => {
    const wrapper = shallow(<Navigation links={[]} />)
    assert(wrapper.find('nav'))
  })

  it('should propagate changes up to its parent component on mount', (done) => {
    var items = [
      {text: 'one', link: 'one'},
      {text: 'two', link: 'two'}
    ]
    // we get the onChange event automatically on mount
    const onChange = (link) => {
      assert.equal(link.text, 'one')
      done()
    }
    mount(<Navigation links={items} onChange={onChange} />)
  })
})
