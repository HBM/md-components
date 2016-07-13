
import React from 'react'
import ReactDOM from 'react-dom'
import Textfield from '../../'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      first: '',
      second: '',
      third: 'Hello world',
      fourth: 0,
      fifth: 'disabled',
      sixth: 'select buddy',
      selectedIndex: 1,
      zero: 0
    }

    this.timer = null

    this.onSelect = this.onSelect.bind(this)
    this.onChangeFirst = this.onChangeFirst.bind(this)
    this.onChangeSecond = this.onChangeSecond.bind(this)
    this.onChangeThird = this.onChangeThird.bind(this)
    this.onChangeSixth = this.onChangeSixth.bind(this)
  }

  componentDidMount () {
    this.timer = window.setInterval(() => {
      this.setState({
        fourth: this.state.fourth + 1
      })
    }, 1000)
  }

  componentWillUnmout () {
    window.clearInterval(this.timer)
  }

  onChange (name, event) {
    this.setState({
      [name]: event.target.value
    })
  }

  onSelect (selectedIndex, event) {
    console.log(event)
    event.preventDefault()
    this.setState({selectedIndex})
  }

  onChangeFirst (event) {
    this.setState({
      first: event.target.value
    })
  }

  onChangeSecond (event) {
    this.setState({
      second: event.target.value
    })
  }

  onChangeThird (event) {
    this.setState({
      third: event.target.value
    })
  }

  onChangeSixth (event) {
    this.setState({
      sixth: event.target.value
    })
  }

  render () {
    // var icon = <Icon.VPNKey />

    return (
      <div>
        <section>
          <Textfield
            label='empty textfield'
            onChange={this.onChangeFirst}
            value={this.state.first}
          />
        </section>
        <section>
          <Textfield
            autoFocus
            onChange={this.onChangeSecond}
            label='empty textfield with focus'
            value={this.state.second}
          />
        </section>
        <section>
          <Textfield
            label='textfield with value'
            onChange={this.onChangeThird}
            value={this.state.third}
          />
        </section>
        <section>
          <Textfield
            readOnly
            label='textfield readonly with updating value'
            value={`${this.state.fourth}`}
          />
        </section>
        <section>
          <Textfield
            label='textfield disabled with value'
            value={this.state.fifth}
            disabled
            readOnly
          />
        </section>

        <section>
          <Textfield
            className='Textfield--orange'
            label='textfield with custom CSS class'
            onChange={this.onChangeFirst}
            value={this.state.first}
          />
        </section>
        <section>
          <Textfield
            label='Textfield with error'
            value={this.state.first}
            error='Username or Password is incorrect.'
            onChange={this.onChangeFirst}
          />
        </section>
        <section>
          <Textfield
            readOnly
            label='Textfield with zero value'
            value={this.state.zero}
          />
        </section>

      </div>
    )
  }

}

// <section>
//   <Textfield
//     label='Textfield with icon'
//     icon={icon}
//     value={this.state.zero}
//   />
// </section>
// <section>
//   <Textfield
//     label='Textfield with icon and error message'
//     icon={icon}
//     value={this.state.zero}
//     error='Invalid user or password'
//   />
// </section>

// <section className='hori'>
//   <Textfield
//     label='textfield with select'
//     onChange={this.onChangeSixth}
//     value={this.state.sixth}
//   />
//   <Select
//     label='Animal'
//     items={['Dog', 'Cat', 'Buddy']}
//     onChange={this.onSelect}
//     selectedIndex={this.state.selectedIndex}
//   />
// </section>

/**
 * Render parent component.
 */
ReactDOM.render(
  <App />,
  document.getElementById('react')
)
