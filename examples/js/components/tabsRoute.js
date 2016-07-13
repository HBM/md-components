
import React from 'react'
import {Tabs} from '../../../'

export default class TabsRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Tabs</h2>
          <Tabs tabs={[
            {href: '/tabs/germany', text: 'Germany'},
            {href: '/tabs/spain', text: 'Spain'},
            {href: '/tabs/sweden', text: 'Sweden'}
          ]} />
          <div>
            {this.props.children}
          </div>
        </section>
      </div>
    )
  }

}
