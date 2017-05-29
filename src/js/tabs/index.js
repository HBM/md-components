
import React from 'react'

class Tabs extends React.Component {
  static propTypes = {
    tabs: React.PropTypes.array
  }

  static defaultProps = {
    tabs: []
  }

  componentDidMount () {
    this.setInkBarPosition()
  }

  componentDidUpdate () {
    // move inkbar AFTER nav/link children have been updated and reflect
    // "activeClassName" (active). This cannot be done before.
    this.setInkBarPosition()
  }

  setInkBarPosition = () => {
    const index = Array.prototype.slice.call(this.tabRoot.children)
      .filter(element => !element.classList.contains('Tabs-InkBar'))
      .findIndex(tab => tab.firstElementChild.classList.contains('active'))
    this.inkbarNode.classList.remove('transition-right', 'transition-left')
    if (index === -1) {
      this.inkbarNode.style.display = 'none'
    } else {
      this.inkbarNode.style.display = 'initial'
      const width = 100 / this.props.tabs.length
      const prevIndex = this.inkbarNode.style.left ? Math.round(parseFloat(this.inkbarNode.style.left) / width) : -1
      const direction = index > prevIndex ? 'right' : 'left'
      const left = index * width
      const right = (this.props.tabs.length - index - 1) * width
      this.inkbarNode.style.left = `${left}%`
      this.inkbarNode.style.right = `${right}%`
      if (prevIndex !== -1) {
        this.inkbarNode.classList.add(`transition-${direction}`)
      }
    }
  }

  render () {
    return (
      <div className='Tabs' ref={node => { this.tabRoot = node }}>
        {this.props.tabs.map((tab, index) =>
          <div key={index} className='Tabs-Item'>
            {tab}
          </div>
        )}
        <div
          ref={node => { this.inkbarNode = node }}
          className='Tabs-InkBar'
        />
      </div>
    )
  }
}

export default Tabs
