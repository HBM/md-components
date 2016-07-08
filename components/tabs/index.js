
import React from 'react'
import {Link, withRouter} from 'react-router'

/**
 * Tabs component
 */
class Tabs extends React.Component {

  /**
   * Property types
   */
  static propTypes = {
    tabs: React.PropTypes.array
  }

  /**
   * Default properties
   */
  static defaultProps = {
    tabs: []
  }

  state = {
    index: 0,
    direction: ''
  }

  /**
   * Handle click on tab
   */
  onClick = (index) => {
    var direction = index > this.state.index ? 'right' : 'left'
    this.setState({
      index,
      direction
    })
  }

  /**
   * Component did mount
   */
  componentDidMount () {
    var activeRouteIndex = 0
    this.props.tabs.forEach((tab, index) => {
      if (this.props.router.isActive(tab.href)) {
        activeRouteIndex = index
      }
    })
    this.setState({
      index: activeRouteIndex
    })
  }

  /**
   * Render component
   */
  render () {
    var width = 100 / this.props.tabs.length
    var left = this.state.index * width
    var right = (this.props.tabs.length - this.state.index - 1) * width

    return (
      <div className='Tabs'>
        {this.props.tabs.map((tab, index) =>
          <Link
            key={index}
            activeClassName='active'
            to={tab.href}
            className='Tabs-Item'
            onClick={this.onClick.bind(this, index)}
          >
            {tab.text}
          </Link>
        )}
        <div
          className={`Tabs-InkBar transition-${this.state.direction}`}
          style={{
            left: `${left}%`,
            right: `${right}%`
          }}
        />
      </div>
    )
  }

}

export default withRouter(Tabs)
