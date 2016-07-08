
import React from 'react'
import ReactDOM from 'react-dom'
import {Card, Title, Text, Actions} from '../../Card'
import Button from '../../../button/Button'

/**
 * Create parent component and include button.
 */
class App extends React.Component {

  save = (event) => {
    console.log(event)
  }

  render () {
    return (
      <div>
        <section>
          <Card>
            <Title>
              Title goes here
            </Title>
            <Text>
              Greyhound divisively hello coldly wonderfully marginally far upon excluding.
            </Text>
            <Actions>
              <Button onClick={this.save}>
                submit
              </Button>
              <Button onClick={this.save}>
                Cancel
              </Button>
            </Actions>
          </Card>
        </section>
        <section>
          <Card>
            <Text>
              Greyhound divisively hello coldly wonderfully marginally far upon excluding.
            </Text>
            <Actions>
              <Button onClick={this.save}>
                Clear
              </Button>
              <Button onClick={this.save}>
                Return
              </Button>
            </Actions>
          </Card>
        </section>
      </div>
    )
  }

}

/**
 * Render parent component.
 */
ReactDOM.render(
  <App />,
  document.getElementById('react')
)
