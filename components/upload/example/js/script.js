
import React from 'react'
import ReactDOM from 'react-dom'
import Upload from '../../Upload'

class App extends React.Component {

  state = {
    disabled: false,
    text: 'Select .md File'
  }

  onChange = (files) => {
    console.log(files)
    this.setState({
      text: files[0].name
    })
  }

  render () {
    return (
      <div>
        <button type='button' onClick={(e) => this.setState({disabled: !this.state.disabled})}>
          Toggle disabled
        </button>
        <Upload
          disabled={this.state.disabled}
          textBefore='To see your content:'
          buttonText={this.state.text}
          onChange={this.onChange}
          accept='.md'
        />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)
