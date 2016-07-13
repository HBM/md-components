
import React from 'react'
import {Select} from '../../../'

export default class SelectRoute extends React.Component {

  state = {
    selected: -1,
    selectedWithScrolling: -1
  }

  onChange = (index) => {
    this.setState({
      selected: index
    })
  }

  onChangeWithScrolling = (index) => {
    this.setState({
      selectedWithScrolling: index
    })
  }

  render () {
    let items = [
      'Blue',
      'Red',
      'Green'
    ]
    let itemsWithScrolling = [
      'Blue',
      'Red',
      'Green',
      'Yellow',
      'Orange',
      'Black',
      'White'
    ]
    return (
      <div>
        <section>
          <h2>Default select</h2>
          <select>
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </section>
        <section>
          <h2>Select</h2>
          <Select
            onChange={this.onChange}
            items={items}
            selectedIndex={this.state.selected}
          />
        </section>
        <section>
          <h2>Select with scrolling</h2>
          <Select
            onChange={this.onChangeWithScrolling}
            items={itemsWithScrolling}
            selectedIndex={this.state.selectedWithScrolling}
          />
        </section>
        <section>
          <h2>Select with label</h2>
          <Select
            label='Some label'
            onChange={this.onChange}
            items={items}
            selectedIndex={this.state.selected}
          />
        </section>
      </div>
    )
  }
}
