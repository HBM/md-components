/* global describe, it, expect */

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import {Linear, Circular} from '../'

describe('Progress', () => {
  describe('Linear', () => {
    it('should work', (done) => {
      const instance = TestUtils.renderIntoDocument(<Linear />)
      // use setTimeout to make component is rendered
      window.setTimeout(() => {
        const node = ReactDOM.findDOMNode(instance)
        expect(node).toBeTruthy()
        done()
      }, 100)
    })

    it('should render a progress bar with given percentage', (done) => {
      const instance = TestUtils.renderIntoDocument(<Linear percentage={50} />)
      window.setTimeout(() => {
        const inner = TestUtils.findRenderedDOMComponentWithClass(instance, 'Progress-linear-inner')
        expect(inner.style.width).toBe('50%')
        done()
      }, 100)
    })

    it('should remove itself from the DOM when done', (done) => {
      const instance = TestUtils.renderIntoDocument(<Linear />)
      // use setTimeout to make component is rendered
      window.setTimeout(() => {
        const node = ReactDOM.findDOMNode(instance)
        expect(node).toBeTruthy()
        // let it be done
        instance.componentWillReceiveProps({
          percentage: 100
        })
        window.setTimeout(() => {
          const node = ReactDOM.findDOMNode(instance)
          expect(node).toBeFalsy()
          done()
        }, 1500)
      }, 100)
    }, 10000)

    // make sure else path is taken for test coverage
    it('should not remove itself from the DOM when below 100 percent', (done) => {
      const instance = TestUtils.renderIntoDocument(<Linear />)
      window.setTimeout(() => {
        const node = ReactDOM.findDOMNode(instance)
        expect(node).toBeTruthy
        instance.componentWillReceiveProps({
          percentage: 99
        })
        window.setTimeout(() => {
          const node = ReactDOM.findDOMNode(instance)
          // different to test above
          expect(node).toBeTruthy()
          done()
        }, 1500)
      })
    })
  })

  describe('Circular', () => {
    it('should work', () => {
      const instance = TestUtils.renderIntoDocument(<Circular />)
      const node = ReactDOM.findDOMNode(instance)
      expect(node).toBeTruthy()
    })

    it('should render circular progress with given percentage', () => {
      const instance = TestUtils.renderIntoDocument(<Circular percentage={50} />)
      const inner = TestUtils.findRenderedDOMComponentWithClass(instance, 'Progress-circular-path')
      expect(parseFloat(inner.style.strokeDasharray)).toBeCloseTo(2 * Math.PI * 30)
      expect(inner.style.strokeDashoffset).toBeCloseTo(Math.PI * 30)
    })
  })
})
