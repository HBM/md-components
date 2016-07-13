
import React from 'react'
import ReactDOM from 'react-dom'
import Select from '../../'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  state = {
    moreThanFive: 0,
    preselection: 3,
    lessThanFive: 0,
    city: 1
  }

  onChange = (name, index) => {
    this.setState({
      [name]: index
    })
  }

  componentDidMount () {
    this.timer = window.setInterval(() => {
      this.setState({
        city: this.state.city
      })
    }, 1000)
  }

  componentWillUnmount () {
    window.clearInterval(this.timer)
  }

  render () {
    var a = ['Blue', 'Red', 'GreenGreenGreen', 'Yellow', 'Orange', 'Black', 'White', 'Pink', 'Purple']
    var b = ['Tiger', 'Dog', 'Cat']
    var cities = ['Düsseldorf', 'Darmstadt', 'Frankfurt', 'Berlin', 'München', 'Köln', 'Hamburg']

    return (
      <div>
        <section>
          <p>Normal select for comparing keyboard controls</p>
          <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </section>
        <section>
          <p>More than 5 elements</p>
          <div className='select-container'>
            <Select
              items={a}
              onChange={this.onChange.bind(this, 'moreThanFive')}
              selectedIndex={this.state.moreThan5}
            />
          </div>
        </section>
        <section>
          <p>Preselection</p>
          <div className='select-container'>
            <Select
              label='some label'
              items={a}
              onChange={this.onChange.bind(this, 'preselection')}
              selectedIndex={this.state.preselection}
            />
          </div>
        </section>
        <section>
          <p>Less than 5 elements with custom placeholder</p>
          <div className='select-container'>
            <Select
              placeholder='Favorite animal'
              items={b}
              onChange={this.onChange.bind(this, 'lessThanFive')}
              selectedIndex={this.state.lessThanFive}
            />
          </div>
        </section>
        <section>
          <p>Custom CSS classname</p>
          <div className='select-container'>
            <Select
              className='Select--blue'
              items={a}
              onChange={this.onChange.bind(this, 'moreThan5')}
              selectedIndex={this.state.moreThan5}
            />
          </div>
        </section>
        <section>
          <p>Constantly updating value to check scrolling behavior with open lists</p>
          <div className='select-container'>
            <Select
              items={cities}
              onChange={this.onChange.bind(this, 'city')}
              selectedIndex={this.state.city}
            />
          </div>
        </section>
      </div>
    )
  }

}

/**
 * Render parent component.
 */
ReactDOM.render(
  <App />,
  document.getElementById('react')
)
