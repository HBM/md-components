
import React from 'react'
import ReactDOM from 'react-dom'
import Switch from '../../Switch'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      first: false,
      second: true,
      third: false
    }
  }

  onChange = (event) => {
    let {name, checked} = event.target
    this.setState({
      [name]: checked
    })
  }

  render () {
    return (
      <div>
        <section className='u-flex u-flexAlignItemsCenter'>
          <Switch
            checked={this.state.first}
            name='first'
            onChange={this.onChange}
          />
          <div style={{marginLeft: 20}}>
            Switch off
          </div>
        </section>
        <section className='u-flex u-flexAlignItemsCenter'>
          <Switch
            checked={this.state.second}
            name='second'
            onChange={this.onChange}
          />
          <div style={{marginLeft: 20}}>
            Switch on
          </div>
        </section>
        <section className='u-flex u-flexAlignItemsCenter'>
          <Switch
            checked={this.state.third}
            disabled
            name='third'
            onChange={this.onChange}
          />
          <div style={{marginLeft: 20}}>
            Switch disabled
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
