
import React from 'react'
import {Progress} from '../../../'

export default class ProgressRoute extends React.Component {

  state = {
    progress: 0
  }

  componentDidMount () {
    this.interval = window.setInterval(() => {
      const progress = this.state.progress + 5
      if (progress > 100) {
        return window.clearInterval(this.interval)
      }
      this.setState({progress})
    }, 500)
  }

  componentWillUnmount () {
    window.clearInterval(this.interval)
  }

  render () {
    return (
      <div>
        <section>
          <h2>Linear progress</h2>
          <Progress.Linear percentage={this.state.progress} />
        </section>
        <section>
          <h2>Circular progress</h2>
          <div style={{width: 100, height: 100}}>
            <Progress.Circular percentage={this.state.progress} />
          </div>
        </section>
      </div>
    )
  }

}
