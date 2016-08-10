
import React from 'react'
import {Chip} from '../../../'

export default class ChipRoute extends React.Component {

  onDelete = () => {
    console.log('on delete')
  }

  render () {
    return (
      <div>
        <section>
          <h2>Chip</h2>
          <Chip />
        </section>
        <section>
          <h2>Chip with delete</h2>
          <Chip onDelete={this.onDelete} />
        </section>
        <section>
          <h2>Chip with icon</h2>
          <Chip icon='A' />
        </section>
        <section>
          <h2>Chip with delete and icon</h2>
          <Chip icon='A' onDelete={this.onDelete} />
        </section>
      </div>
    )
  }

}
