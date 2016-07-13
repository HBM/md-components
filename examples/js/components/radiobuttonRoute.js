
import React from 'react'
import {Radiobutton} from '../../../'

export default class RadiobuttonRoute extends React.Component {

  state = {
    selectedValue: 'Germany'
  }

  onChange = (value) => {
    this.setState({
      selectedValue: value
    })
  }

  render () {
    return (
      <div>
        <section>
          <h2>Default radiobutton</h2>
          <label>
            Apple
            <input type='radio' name='fruit' value='apple' />
          </label>
          <label>
            Banana
            <input type='radio' name='fruit' value='banana' />
          </label>
          <label>
            Plum
            <input type='radio' name='fruit' value='plum' />
          </label>
        </section>
        <section>
          <h2>Radiobutton</h2>
          <Radiobutton
            name='country'
            selectedValue={this.state.selectedValue}
            items={['Germany', 'Spain', 'Sweden']}
            onChange={this.onChange}
          />
        </section>
      </div>
    )
  }

}
