
import React from 'react'
import PropTypes from 'prop-types'
import keycode from 'keycode'
import classnames from 'classnames'

const PADDING_LEFT = 16
let LIST_ITEM_HEIGHT = 48

// list length
const MAX_LIST_LENGTH = 5

const defaultFindIndex = (options, filterValue, startIndex) => {
  filterValue = filterValue.toLowerCase()
  let findIndex = options.findIndex(({label}, i) => (i > startIndex && label.toLowerCase().startsWith(filterValue)))
  if (findIndex === -1) {
    findIndex = options.findIndex(({label}) => (label.toLowerCase().startsWith(filterValue)))
  }
  return findIndex
}

export default class Select extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    label: PropTypes.string,
    options: PropTypes.array,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string,
    findIndex: PropTypes.func,
    dense: PropTypes.bool
  }

  static defaultProps = {
    options: [
      {value: 'one', label: 'one'},
      {value: 'two', label: 'two'},
      {value: 'three', label: 'three'}
    ],
    placeholder: 'Placeholder',
    value: '',
    findIndex: defaultFindIndex,
    dense: false
  }

  state = {
    open: false
  }

  onKeyDown = event => {
    if (event.which === keycode('enter') || event.which === keycode('space')) {
      event.preventDefault()
      this.open()
      return
    }
    const {options, value} = this.props
    const index = options.findIndex(option => option.value === value)
    if (event.which === keycode('up') || event.which === keycode('left')) {
      event.preventDefault()
      if (index > 0) {
        const prev = options[index - 1]
        return this.props.onChange({
          target: {
            name: this.props.name,
            ...prev
          }
        })
      }
    }
    if (event.which === keycode('down') || event.which === keycode('right')) {
      event.preventDefault()
      if (index < options.length - 1) {
        const next = options[index + 1]
        return this.props.onChange({
          target: {
            name: this.props.name,
            ...next
          }
        })
      }
    }

    if (event.key) {
      const findIndex = this.props.findIndex(options, event.key, index)
      if (findIndex !== -1) {
        event.preventDefault()
        const next = options[findIndex]
        return this.props.onChange({
          target: {
            name: this.props.name,
            ...next
          }
        })
      }
    }
  }

  open = () => {
    if (this.props.disabled) { return }
    this.setState({
      open: true
    })
    document.addEventListener('click', this.close)
  }

  close = () => {
    this.setState({
      open: false
    })
    document.removeEventListener('click', this.close)
  }

  findTableTag = (node) => {
    while (node.parentNode) {
      node = node.parentNode
      if (node.tagName === 'TABLE') {
        return true
      }
    }
    return false
  }

  componentDidMount () {
    const isInsideTable = this.findTableTag(this.refWrapper)
    this.setState({
      isInsideTable
    })
  }

  onChange = (item) => {
    this.props.onChange({
      target: {
        name: this.props.name,
        ...item
      }
    })
  }

  onEnter = item => {
    this.props.onChange({
      target: {
        name: this.props.name,
        ...item
      }
    })
    this.onEscape()
  }

  onEscape = () => {
    this.close()
    this.refInput.focus()
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (this.state.open && nextState.open) {
      return false
    }
    return true
  }

  render () {
    const selectedIndex = this.props.options.findIndex(option => option.value === this.props.value)
    const empty = selectedIndex === -1
    const text = empty ? this.props.placeholder : this.props.options[selectedIndex].label

    return (
      <div
        className={classnames('mdc-Select', {
          'mdc-Select--dense': this.props.dense,
          'is-insideTable': this.state.isInsideTable
        })}
        ref={(c) => { this.refWrapper = c }}
      >
        <input
          className='mdc-Select-input'
          name={this.props.name}
          value={this.props.value}
          disabled={this.props.disabled}
          onKeyDown={this.onKeyDown}
          ref={elem => { this.refInput = elem }}
          readOnly
        />
        {
          this.props.label && <span className='mdc-Select-label'>{this.props.label}</span>
        }
        <div
          className='mdc-Select-body'
          onClick={this.open}
        >
          <span className={empty ? 'mdc-Select-placeholder' : ''}>
            {text}
          </span>
          <span className='mdc-Select-caret' />
        </div>
        {
          this.state.open &&
          <List
            options={this.props.options}
            selectedIndex={selectedIndex}
            onClick={this.onChange}
            onEnter={this.onEnter}
            refWrapper={this.refWrapper}
            isInsideTable={this.state.isInsideTable}
            onEscape={this.onEscape}
            findIndex={this.props.findIndex}
            dense={this.props.dense}
          />
        }
        <div className={classnames('mdc-Select-helper', {
          'mdc-Select-helper--error': this.props.error,
          'mdc-Select-helper--dense': this.props.dense
        })}>
          {this.props.error || this.props.helper}
        </div>
      </div>
    )
  }
}

export class List extends React.Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    isInsideTable: PropTypes.bool,
    selectedIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    refWrapper: PropTypes.object.isRequired,
    findIndex: PropTypes.func
  }

  state = {
    left: this.props.refWrapper.getBoundingClientRect().left,
    top: this.props.refWrapper.getBoundingClientRect().top,
    width: this.props.refWrapper.getBoundingClientRect().width
  }

  componentDidMount () {
    LIST_ITEM_HEIGHT = this.props.dense ? 36 : LIST_ITEM_HEIGHT
    const index = this.props.selectedIndex

    // create boolean helper variables
    const scrollable = this.props.options.length > MAX_LIST_LENGTH
    const indexWithinFirstTwoItems = index < 2

    if (scrollable && !indexWithinFirstTwoItems) {
      const scrollTop = (LIST_ITEM_HEIGHT * (index - 2))
      this.ref.scrollTop = scrollTop
    }

    const focus = index >= 0 ? index : 0
    this[`li${focus}`].focus()

    window.addEventListener('resize', this.resize)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    const {left, top, width} = this.props.refWrapper.getBoundingClientRect()
    this.setState({
      left,
      top,
      width
    })
  }

  onClick = event => {
    const index = parseInt(event.currentTarget.getAttribute('data-id'))
    this.props.onClick(this.props.options[index])
  }

  onBlur = event => {
    // close list when focus is outside of list
    if (event.relatedTarget && !event.relatedTarget.classList.contains('mdc-Select-listItem')) {
      this.props.onEscape()
    }
  }

  onKeyDown = event => {
    const index = parseInt(event.currentTarget.getAttribute('data-id'))
    if (event.which === keycode('enter')) {
      return this.props.onEnter(this.props.options[index])
    }
    if (event.which === keycode('escape')) {
      return this.props.onEscape()
    }
    if (event.which === keycode('down')) {
      event.preventDefault()
      if (event.target.nextSibling) {
        return event.target.nextSibling.focus()
      }
    }
    if (event.which === keycode('up')) {
      event.preventDefault()
      if (event.target.previousSibling) {
        return event.target.previousSibling.focus()
      }
    }

    const findIndex = this.props.findIndex(this.props.options, event.key, index)
    if (findIndex !== -1) {
      event.preventDefault()
      this[`li${findIndex}`].focus()
    }
  }

  render () {
    LIST_ITEM_HEIGHT = this.props.dense ? 36 : LIST_ITEM_HEIGHT
    // CSS space
    let PADDING_TOP = -20
    if (this.props.isInsideTable) {
      // when select component is inside a table cell we have to remove
      // border bottom, padding top and padding bottom.
      // this changes the location of the text.
      // that leads to the list menu / overlay no being directly on top of the text.
      // we therefore have to modify the padding top to fix the overlay position.
      PADDING_TOP = 24
    }

    if (this.props.dense) {
      PADDING_TOP = -13
    }

    const {options, selectedIndex} = this.props

    // handle list absolute position top
    const paddingTop = PADDING_TOP

    let top
    if (selectedIndex === -1) {
      // set position to first element, i.e. selectedIndex = 0
      top = -1 * paddingTop
    } else {
      top = -1 * (paddingTop + (LIST_ITEM_HEIGHT * selectedIndex))
    }

    // handle scrollable lists with more than 5 list items
    if (options.length > MAX_LIST_LENGTH) {
      if (selectedIndex >= 2 && selectedIndex <= options.length - 3) {
        // handle "center" items => always set to third position
        top = -1 * (paddingTop + (LIST_ITEM_HEIGHT * 2))
      } else if (selectedIndex === options.length - 2) {
        // handle second last item
        top = -1 * (paddingTop + (LIST_ITEM_HEIGHT * 3))
      } else if (selectedIndex === options.length - 1) {
        // handle last item
        top = -1 * (paddingTop + (LIST_ITEM_HEIGHT * 4))
      }
    }

    let width = this.state.width + (2 * PADDING_LEFT)
    let left = this.props.isInsideTable ? -17 : -16
    let padding = 16

    // check if select overlay is wider than window which would cause horizontal overflow
    // if so decrease padding left and right from 16px to 8px
    // adjust absolute position left and inner link padding accordingly
    if (width > document.body.clientWidth) {
      width = this.state.width + PADDING_LEFT
      left = -8
      padding = 8
    }

    // select component is position fixed
    // add top and left from select component
    top = top + this.state.top
    left = left + this.state.left

    // Checks that the attempted overlay position will fit within the viewport.
    // If it will not fit, tries to adjust the position 'top' so the panel can open fully on-screen.
    // If the select panel is very bottom, tries to adjust the position 'top' so the panel can open fully on-screen.
    // If it still won't fit, sets the offset back to 0 to allow the fallback position to take over.
    const innerHeight = window.innerHeight
    let listHeight = LIST_ITEM_HEIGHT * Math.min(MAX_LIST_LENGTH, options.length)
    if (this.props.isInsideTable) {
      listHeight += PADDING_TOP
    } else {
      listHeight -= PADDING_TOP
    }
    if (top < 0) {
      top = 0
    } else if (top + listHeight > innerHeight) {
      top = Math.max(0, innerHeight - listHeight)
    }
    const style = {top, width, left}

    return (
      <ul
        ref={(c) => { this.ref = c }}
        className='mdc-Select-list'
        style={style}
      >
        {options.map((item, i) =>
          <li key={i}
            tabIndex='0'
            className='mdc-Select-listItem'
            data-id={i}
            onClick={this.onClick}
            style={{padding: `0 ${padding}px`}}
            onKeyDown={this.onKeyDown}
            onBlur={this.onBlur}
            ref={elem => { this[`li${i}`] = elem }}
          >
            {item.label}
          </li>
        )}
      </ul>
    )
  }
}
