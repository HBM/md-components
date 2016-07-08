/* global describe, it, Event, expect */

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Upload from '../'

const file = {
  name: 'update.hbg',
  size: 1234
}

const noop = () => {}

describe('Upload', () => {
  it('should render component with default text', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const textBefore = TestUtils.findRenderedDOMComponentWithClass(instance, 'Upload-textBefore')
    expect(textBefore.textContent).toEqual('')
    const textAfter = TestUtils.findRenderedDOMComponentWithClass(instance, 'Upload-textAfter')
    expect(textAfter.textContent).toEqual('or drag file in this area')
  })

  it('should render component with custom textBefore', () => {
    const instance = TestUtils.renderIntoDocument(<Upload textBefore={'hello world'} onChange={noop} />)
    const textBefore = TestUtils.findRenderedDOMComponentWithClass(instance, 'Upload-textBefore')
    expect(textBefore.textContent).toEqual('hello world')
  })

  it('should render component with custom textAfter', () => {
    const instance = TestUtils.renderIntoDocument(<Upload textAfter={'hello world'} onChange={noop} />)
    const textAfter = TestUtils.findRenderedDOMComponentWithClass(instance, 'Upload-textAfter')
    expect(textAfter.textContent).toEqual('hello world')
  })

  it('should propagate disabled property to input type file and button', () => {
    const instance = TestUtils.renderIntoDocument(
      <Upload onChange={noop} disabled />
    )
    const fileInput = TestUtils.findRenderedDOMComponentWithClass(instance, 'Upload-fileInput')
    expect(fileInput.disabled).toBe(true)
    const button = TestUtils.findRenderedDOMComponentWithTag(instance, 'Button')
    expect(button.disabled).toBe(true)
  })

  it('should ignore drag and drop events when disabled', () => {
    const instance = TestUtils.renderIntoDocument(
      <Upload onChange={noop} disabled />
    )
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.dragEnter(node, {
      dataTransfer: {
        files: [file]
      }
    })
    expect(node.className).toContain('is-disabled')
    expect(node.className).not.toContain('is-over-dropzone')
  })

  it('should propagate accept property to input type file', () => {
    const instance = TestUtils.renderIntoDocument(
      <Upload onChange={noop} accept='.jpg' />
    )
    const fileInput = TestUtils.findRenderedDOMComponentWithClass(instance, 'Upload-fileInput')
    expect(fileInput.accept).toEqual('.jpg')
  })

  it('should not change style for not accepted file types', () => {
    const instance = TestUtils.renderIntoDocument(
      <Upload onChange={noop} accept='.md' />
    )
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.dragEnter(node, {
      dataTransfer: {
        files: [{
          name: 'image.png',
          type: 'image/png'
        }]
      }
    })
    expect(node.className).not.toContain('is-over-dropzone')
  })

  it('should change style for accepted file types', () => {
    const instance = TestUtils.renderIntoDocument(
      <Upload onChange={noop} accept='.png' />
    )
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.dragEnter(node, {
      dataTransfer: {
        files: [{
          name: 'image.png',
          type: 'image/png'
        }]
      }
    })
    expect(node.className).toContain('is-over-dropzone')
  })

  it('should toggle "is-over-window" css class on document dragenter and dragleave', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    document.dispatchEvent(new Event('dragenter'))
    expect(node.className).toContain('is-over-window')
    document.dispatchEvent(new Event('dragleave'))
    expect(node.className).not.toContain('is-over-window')
  })

  it('should toggle "is-over-dropzone" css class on dropzone dragenter and dragleave', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.dragEnter(node)
    expect(node.className).toContain('is-over-dropzone')
    TestUtils.Simulate.dragLeave(node)
    expect(node.className).not.toContain('is-over-dropzone')
  })

  it('should remove dragenter event listener when component is unmounted', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    // simulate unmount by calling method directly
    instance.componentWillUnmount()
    // now simulate dragenter event and make sure component does not react anymore
    const node = ReactDOM.findDOMNode(instance)
    document.dispatchEvent(new Event('dragenter'))
    expect(node.className).not.toContain('is-over-window')
  })

  it('should remove dragleave event listener when component is unmounted', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    document.dispatchEvent(new Event('dragenter'))
    // make sure component has correct class
    expect(node.className).toContain('is-over-window')
    // now simulate unmount
    instance.componentWillUnmount()
    // now simulate dragleave event and make sure component does not loose its class
    document.dispatchEvent(new Event('dragleave'))
    expect(node.className).toContain('is-over-window')
  })

  it('should propagate button click event to input element', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    // attach dummy click event handler to input dom element
    const fileInput = TestUtils.findRenderedDOMComponentWithClass(instance, 'Upload-fileInput')
    let clicked = false
    fileInput.addEventListener('click', () => { clicked = true })
    // simulate click event on top level node which is the div
    TestUtils.Simulate.click(node)
    expect(clicked).toBe(false)
    const button = TestUtils.findRenderedDOMComponentWithTag(instance, 'Button')
    TestUtils.Simulate.click(button)
    expect(clicked).toBe(true)
  })

  it('should not allow dropping multiple files in firefox', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.dragEnter(node, {
      dataTransfer: {
        mozItemCount: 2
      }
    })
    expect(node.className).not.toContain('is-over-dropzone')
  })

  it('should not allow dropping multiple files in chrome', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.dragEnter(node, {
      dataTransfer: {
        items: [file, file]
      }
    })
    expect(node.className).not.toContain('is-over-dropzone')
  })

  it('should allow dropping a single file', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.dragEnter(node, {
      dataTransfer: {
        items: [file]
      }
    })
    expect(node.className).toContain('is-over-dropzone')
  })

  it('should handle dragover event on dropzone', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    let preventDefaultCalled = false
    TestUtils.Simulate.dragOver(node, {
      preventDefault: () => {
        preventDefaultCalled = true
      }
    })
    expect(preventDefaultCalled).toBe(true)
  })

  it('should not allow dragging multiple files over dropzone in firefox', () => {
    const instance = TestUtils.renderIntoDocument(<Upload onChange={noop} />)
    const node = ReactDOM.findDOMNode(instance)
    let preventDefaultCalled = false
    TestUtils.Simulate.dragOver(node, {
      preventDefault: () => {
        preventDefaultCalled = true
      },
      dataTransfer: {
        mozItemCount: 2
      }
    })
    expect(preventDefaultCalled).toBe(false)
  })

  it('should handle drop event on dropzone', () => {
    let name = ''
    const callback = (files) => {
      name = files[0].name
    }
    const instance = TestUtils.renderIntoDocument(<Upload onChange={callback} />)
    const node = ReactDOM.findDOMNode(instance)
    TestUtils.Simulate.drop(node, {
      dataTransfer: {
        files: [file]
      }
    })
    expect(name).toBe('update.hbg')
  })
})
