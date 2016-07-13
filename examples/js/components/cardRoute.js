
import React from 'react'
import {Button, Card, Title, Text, Actions} from '../../../'

export default class CardRoute extends React.Component {

  onClick = (event) => {
    console.log(event)
  }

  render () {
    return (
      <div>
        <section>
          <h2>Card</h2>
          <Card>
            <Title>
              Title
            </Title>
            <Text>
              Greyhound divisively hello coldly wonderfully marginally far upon excluding.
            </Text>
            <Actions>
              <Button onClick={this.onClick}>
                Cancel
              </Button>
              <Button onClick={this.onClick}>
                Submit
              </Button>
            </Actions>
          </Card>
        </section>
        <section>
          <h2>Card without title</h2>
          <Card>
            <Text>
              Greyhound divisively hello coldly wonderfully marginally far upon excluding.
            </Text>
            <Actions>
              <Button onClick={this.onClick}>
                Cancel
              </Button>
              <Button onClick={this.onClick}>
                Submit
              </Button>
            </Actions>
          </Card>
        </section>
      </div>
    )
  }

}
