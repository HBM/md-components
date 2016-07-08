
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'
import Tabs from '../../Tabs'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  render () {
    var tabs = [
      {href: '/one', text: 'one'},
      {href: '/two', text: 'two'},
      {href: '/three', text: 'three'}
    ]

    return (
      <div>
        <header>
          <Tabs tabs={tabs} />
        </header>
        <div className='content'>
          {this.props.children}
        </div>
      </div>
    )
  }

}

/**
 * Tab One content
 */
class One extends React.Component {

  render () {
    return (
      <div>
        One
      </div>
    )
  }

}

/**
 * Tab Two content
 */
class Two extends React.Component {

  render () {
    return (
      <div>
        Two
      </div>
    )
  }

}

/**
 * Tab Three content
 */
class Three extends React.Component {

  render () {
    return (
      <div>
        Three
      </div>
    )
  }

}

/**
 * Define routes
 */
var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/one' component={One} />
      <Route path='/two' component={Two} />
      <Route path='/three' component={Three} />
    </Route>
  </Router>
)

/**
 * Start app
 */
ReactDOM.render(routes, document.getElementById('react'))
