
import React from 'react'
import Icon from '../icon'

const keyEnter = 13
const keyBackspace = 8
const keyDelete = 46
const keyArrowLeft = 37
const keyArrowRight = 39

// input fields which handles all logic
export default class Chip extends React.Component {

  static propTypes = {
    autoFocus: React.PropTypes.bool,
    delimiters: React.PropTypes.arrayOf(React.PropTypes.number),
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.arrayOf(React.PropTypes.object)
  }

  static defaultProps = {
    onChange: () => {},
    delimiters: [keyEnter],
    value: []
  }

  state = {
    inputValue: ''
  }

  onKeyPress = (event) => {
    const text = this.state.inputValue.trim()
    if ((this.props.delimiters.indexOf(event.which) > -1) && text !== '') {
      if (event.which !== keyEnter) {
        // prevent window.history.back() for backspace (for example)
        event.preventDefault()
      }
      // empty input field
      this.setState({
        inputValue: ''
      })
      // notify parent component
      this.props.onChange([
        ...this.props.value,
        {text}
      ])
    }
  }

  // KeyPress event is invoked only for character (printable) keys.
  // That's why we need KeyDown event for backspace and arrow keys.
  onKeyDown = (event) => {
    // toggle through chips when input field is empty and when we have some chips to toggle through
    if (this.state.inputValue !== '' || !this.props.value.length) {
      return
    }
    // go left
    if (event.which === keyBackspace || event.which === keyArrowLeft) {
      return this[`element#${this.props.value.length - 1}`].focus()
    }
    // go right
    if (event.which === keyArrowRight) {
      return this[`element#${0}`].focus()
    }
  }

  onChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  onDelete = (index) => {
    // remove focused chip
    const value = [
      ...this.props.value.slice(0, index),
      ...this.props.value.slice(index + 1)
    ]
    // focus appropriate element
    if (value.length === 0) {
      // focus input field when all chips are gone
      this.input.focus()
    } else if (value.length === index) {
      // if last chip is deleted select chip to the left
      this[`element#${index - 1}`].focus()
    } else {
      // focus chip to the right
      this[`element#${index}`].focus()
    }
    // notify parent component
    this.props.onChange(value)
  }

  onChipArrowLeft = (index) => {
    if (index === 0) {
      this.input.focus()
    } else {
      this[`element#${index - 1}`].focus()
    }
  }

  onChipArrowRight = (index) => {
    if (index === this.props.value.length - 1) {
      this.input.focus()
    } else {
      this[`element#${index + 1}`].focus()
    }
  }

  onWrapperClick = (event) => {
    // do not handle click events on children, e.g. chips
    if (event.target === event.currentTarget) {
      this.input.focus()
    }
  }

  render () {
    return (
      <div
        className='Chip-wrapper'
        onClick={this.onWrapperClick}
      >
        {this.props.value.map((chip, i) =>
          <Element
            key={i}
            index={i}
            text={chip.text}
            icon={chip.icon}
            onDelete={this.onDelete}
            onArrowLeft={this.onChipArrowLeft}
            onArrowRight={this.onChipArrowRight}
            onFocus={this.props.onFocus}
            onBlur={this.props.onBlur}
            ref={c => { this[`element#${i}`] = c }}
          />
        )}
        <input
          className='Chip-input'
          type='text'
          onKeyPress={this.onKeyPress}
          onKeyDown={this.onKeyDown}
          value={this.state.inputValue}
          onChange={this.onChange}
          ref={c => { this.input = c }}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          autoFocus={this.props.autoFocus}
          placeholder={this.props.placeholder}
        />
      </div>
    )
  }

}

class Element extends React.Component {

  static propTypes = {
    autoFocus: React.PropTypes.bool,
    icon: React.PropTypes.string,
    onDelete: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    text: React.PropTypes.string
  }

  static defaultProps = {
    autoFocus: false,
    text: 'Chip'
  }

  focus = () => {
    this.chipRef.focus()
  }

  render () {
    const {text, onDelete, icon, index, onArrowLeft, onArrowRight, onBlur, onFocus} = this.props
    const textStyle = {
      marginLeft: icon ? 8 : 12,
      marginRight: onDelete ? 0 : 12
    }
    const button = (
      <div
        tabIndex='-1'
        className='Chip-delete'
        onClick={() => { onDelete(index) }}
      >
        <Icon.Cancel style={{width: 22, height: 22, display: 'block'}} />
      </div>
    )

    return (
      <div
        className='Chip'
        tabIndex='0'
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={(event) => {
          if (event.which === keyBackspace || event.which === keyDelete) {
            event.preventDefault()
            return onDelete(index)
          }
          if (event.which === keyArrowLeft) {
            return onArrowLeft(index)
          }
          if (event.which === keyArrowRight) {
            return onArrowRight(index)
          }
        }}
        ref={c => { this.chipRef = c }}
      >
        {icon ? <div className='Chip-icon'>{icon}</div> : null}
        <span style={textStyle}>
          {text}
        </span>
        {onDelete ? button : null}
      </div>
    )
  }

}
