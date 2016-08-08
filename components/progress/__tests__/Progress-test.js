/* global describe, it, expect */

import React from 'react'
import {mount} from 'enzyme'
import {Linear, Circular} from '../'

describe('Progress', () => {
  describe('Linear', () => {
    it('should work', (done) => {
      const wrapper = mount(<Linear />)
      // use setTimeout to make component is rendered
      window.setTimeout(() => {
        expect(wrapper.find('.Progress-linear').length).toBe(1)
        done()
      }, 100)
    })

    it('should render a progress bar with given percentage', (done) => {
      const wrapper = mount(<Linear percentage={50} />)
      window.setTimeout(() => {
        expect(wrapper.find('.Progress-linear-inner').node.style.width).toBe('50%')
        done()
      }, 100)
    })

    it('should remove itself from the DOM when done', (done) => {
      const wrapper = mount(<Linear />)
      window.setTimeout(() => {
        expect(wrapper.find('.Progress-linear').length).toBe(1)
        // let it be done
        wrapper.setProps({
          percentage: 100
        })
        window.setTimeout(() => {
          expect(wrapper.find('.Progress-linear').length).toBe(0)
          done()
        }, 1500)
      }, 100)
    }, 10000)

    // make sure else path is taken for test coverage
    it('should not remove itself from the DOM when below 100 percent', (done) => {
      const wrapper = mount(<Linear />)
      window.setTimeout(() => {
        expect(wrapper.find('.Progress-linear').length).toBe(1)
        wrapper.setProps({
          percentage: 99
        })
        window.setTimeout(() => {
          // different to test above
          expect(wrapper.find('.Progress-linear').length).toBe(1)
          done()
        }, 1500)
      }, 100)
    })
  })

  describe('Circular', () => {
    it('should work', () => {
      const wrapper = mount(<Circular />)
      expect(wrapper.find('.Progress-circular').length).toBe(1)
    })

    it('should render circular progress with given percentage', () => {
      const wrapper = mount(<Circular percentage={50} />)
      const inner = wrapper.find('.Progress-circular-path')
      expect(parseFloat(inner.node.style.strokeDasharray)).toBeCloseTo(2 * Math.PI * 30)
      expect(inner.node.style.strokeDashoffset).toBeCloseTo(Math.PI * 30)
    })
  })
})
