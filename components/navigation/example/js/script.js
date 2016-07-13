
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Navigation from '../../'
import Header from '../../../header/'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  onChange = (item) => {
    console.log('got change: ', item)
  }

  render () {
    var links = [
      {
        text: 'Material design',
        link: '/home'
      },
      {
        text: 'What is material?',
        link: '/metrics',
        links: [
          {text: 'One', link: '/metrics/one'},
          {text: 'Two', link: '/metrics/two'},
          {text: 'Three', link: '/metrics/three'}
        ]
      },
      {
        text: 'About',
        link: '/about'
      }
    ]

    return (
      <div>
        <Header title='title' subtitle='subtitle' />
        <Navigation links={links} onChange={this.onChange} />
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }

}

class Home extends React.Component {

  render () {
    return (
      <div>
        Home
      </div>
    )
  }

}

class Metrics extends React.Component {

  render () {
    return (
      <div>
        Metrics
        {this.props.children}
      </div>
    )
  }

}

class MetricsOne extends React.Component {

  render () {
    return (
      <div>
        One
      </div>
    )
  }

}

class MetricsTwo extends React.Component {

  render () {
    return (
      <div>
        Two
      </div>
    )
  }

}

class MetricsThree extends React.Component {

  render () {
    return (
      <div>
        Three
      </div>
    )
  }

}

class About extends React.Component {

  render () {
    return (
      <div>
        About
      </div>
    )
  }

}

// var onEnter = (location, replaceWith) => {
//   replaceWith('about')
// }

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={Home} />
      <Route path='metrics' component={Metrics}>
        <Route path='one' component={MetricsOne} />
        <Route path='two' component={MetricsTwo} />
        <Route path='three' component={MetricsThree} />
      </Route>
      <Route path='about' component={About} />
    </Route>
  </Router>
)

/**
 * Render parent component.
 */
ReactDOM.render(routes, document.getElementById('react'))
