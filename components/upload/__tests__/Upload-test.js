/* global describe, it, Event, expect */

import React from 'react'
import {mount} from 'enzyme'
import Upload from '../'

const file = {
  name: 'update.hbg',
  size: 1234
}

const noop = () => {}

describe('Upload', () => {
  it('should render component with default text', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    expect(wrapper.find('.Upload-textBefore').text()).toEqual('')
    expect(wrapper.find('.Upload-textAfter').text()).toEqual('or drag file in this area')
  })

  it('should render component with custom textBefore', () => {
    const wrapper = mount(<Upload textBefore={'hello world'} onChange={noop} />)
    expect(wrapper.find('.Upload-textBefore').text()).toEqual('hello world')
  })

  it('should render component with custom textAfter', () => {
    const wrapper = mount(<Upload textAfter={'hello world'} onChange={noop} />)
    expect(wrapper.find('.Upload-textAfter').text()).toEqual('hello world')
  })

  it('should propagate disabled property to input type file and button', () => {
    const wrapper = mount(<Upload disabled onChange={noop} />)
    expect(wrapper.find('.Upload-fileInput').props().disabled).toBe(true)
    expect(wrapper.find('.Button').props().disabled).toBe(true)
  })

  it('should ignore drag and drop events when disabled', () => {
    const wrapper = mount(<Upload disabled onChange={noop} />)
    wrapper.find('.Upload').simulate('dragenter', {
      dataTransfer: {
        files: [file]
      }
    })
    expect(wrapper.find('.Upload').hasClass('is-disabled')).toBe(true)
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(false)
  })

  it('should propagate accept property to input type file', () => {
    const wrapper = mount(<Upload onChange={noop} accept='.jpg' />)
    expect(wrapper.find('.Upload-fileInput').props().accept).toEqual('.jpg')
  })

  it('should not change style for not accepted file types', () => {
    const wrapper = mount(<Upload onChange={noop} accept='.md' />)
    wrapper.find('.Upload').simulate('dragenter', {
      dataTransfer: {
        files: [{
          name: 'image.png',
          type: 'image/png'
        }]
      }
    })
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(false)
  })

  it('should change style for accepted file types', () => {
    const wrapper = mount(<Upload onChange={noop} accept='.png' />)
    wrapper.find('.Upload').simulate('dragenter', {
      dataTransfer: {
        files: [{
          name: 'image.png',
          type: 'image/png'
        }]
      }
    })
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(true)
  })

  it('should toggle "is-over-window" css class on document dragenter and dragleave', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    document.dispatchEvent(new Event('dragenter'))
    expect(wrapper.find('.Upload').hasClass('is-over-window')).toBe(true)
    document.dispatchEvent(new Event('dragleave'))
    expect(wrapper.find('.Upload').hasClass('is-over-window')).toBe(false)
  })

  it('should toggle "is-over-dropzone" css class on dropzone dragenter and dragleave', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    wrapper.find('.Upload').simulate('dragenter')
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(true)
    wrapper.find('.Upload').simulate('dragleave')
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(false)
  })

  it('should remove dragenter event listener when component is unmounted', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    const instance = wrapper.find('.Upload')
    // simulate unmount by calling method directly
    wrapper.unmount()
    // now simulate dragenter event and make sure component does not react anymore
    document.dispatchEvent(new Event('dragenter'))
    expect(instance.hasClass('is-over-window')).toBe(false)
  })

  it('should remove dragleave event listener when component is unmounted', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    const instance = wrapper.find('.Upload')
    document.dispatchEvent(new Event('dragenter'))
    // make sure component has correct class
    expect(instance.hasClass('is-over-window')).toBe(true)
    // now simulate unmount
    wrapper.unmount()
    // now simulate dragleave event and make sure component does not loose its class
    document.dispatchEvent(new Event('dragleave'))
    expect(instance.hasClass('is-over-window')).toBe(true)
  })

  it('should propagate button click event to input element', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    // attach dummy click event handler to input dom element
    let clicked = false
    wrapper.find('.Upload-fileInput').node.addEventListener('click', () => { clicked = true })
    // simulate click event on top level node which is the div
    wrapper.find('.Upload-fileInput').simulate('click')
    expect(clicked).toBe(false)
    wrapper.find('.Button').simulate('click')
    expect(clicked).toBe(true)
  })

  it('should not allow dropping multiple files in firefox', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    wrapper.find('.Upload').simulate('dragenter', {
      dataTransfer: {
        mozItemCount: 2
      }
    })
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(false)
  })

  it('should not allow dropping multiple files in chrome', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    wrapper.find('.Upload').simulate('dragenter', {
      dataTransfer: {
        items: [file, file]
      }
    })
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(false)
  })

  it('should allow dropping a single file', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    wrapper.find('.Upload').simulate('dragenter', {
      dataTransfer: {
        items: [file]
      }
    })
    expect(wrapper.find('.Upload').hasClass('is-over-dropzone')).toBe(true)
  })

  it('should handle dragover event on dropzone', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    let preventDefaultCalled = false
    wrapper.find('.Upload').simulate('dragover', {
      preventDefault: () => {
        preventDefaultCalled = true
      }
    })
    expect(preventDefaultCalled).toBe(true)
  })

  it('should not allow dragging multiple files over dropzone in firefox', () => {
    const wrapper = mount(<Upload onChange={noop} />)
    let preventDefaultCalled = false
    wrapper.find('.Upload').simulate('dragover', {
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
    const wrapper = mount(<Upload onChange={callback} />)
    wrapper.find('.Upload').simulate('drop', {
      dataTransfer: {
        files: [file]
      }
    })
    expect(name).toBe('update.hbg')
  })
})
