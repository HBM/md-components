import React from 'react'
import { List, Row, Icon } from '../../../'

const longText = 'This is sometimes a very lengthy text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita graviter et severe voluptatem secrevit a bono. Aliter homines, aliter philosophos loqui putas oportere? Nunc haec primum fortasse audientis servire debemus'

export default class ListRoute extends React.Component {

  render () {
    const someIcon = <Icon.Assessment />
    return (
      <div>
        <section>
          <h2>Single-line item</h2>
          <List>
            <Row primary='Apple' />
            <Row primary='Banana' />
            <Row primary='Strawberry' />
          </List>
        </section>
        <section>
          <h2>Single-line item with icon</h2>
          <List>
            <Row primary='Apple' icon={<Icon.Assessment />} />
            <Row primary='Banana' icon={someIcon} />
            <Row primary='Strawberry' icon={someIcon} />
          </List>
        </section>
        <section>
          <h2>Single-line item with avatar</h2>
          <List>
            <Row primary='Apple' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
            <Row primary='Banana' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
            <Row primary='Strawberry' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
          </List>
        </section>
        <section>
          <h2>Single-line item with avatar and icon</h2>
          <List>
            <Row primary='Apple' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' icon={someIcon} />
            <Row primary='Banana' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' icon={someIcon} />
            <Row primary='Strawberry' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' icon={someIcon} />
          </List>
        </section>
        <section>
          <h2>Two-line item</h2>
          <List>
            <Row primary='Apple' secondary='From Belgium' />
            <Row primary='Banana' secondary='From Sweden' />
            <Row primary='Strawberry' secondary={'From Germany. ' + longText} />
          </List>
        </section>
        <section>
          <h2>Two-line item with icon</h2>
          <List>
            <Row primary='Apple' icon={<Icon.Assessment />} secondary='Really fresh' />
            <Row primary='Banana' icon={someIcon} secondary='Really fresh' />
            <Row primary='Strawberry' icon={someIcon} secondary='Really fresh' />
          </List>
        </section>
        <section>
          <h2>Two-line item with avatar</h2>
          <List>
            <Row primary='Apple' secondary='Really fresh' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
            <Row primary='Banana' secondary='Really fresh' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
            <Row primary='Strawberry' secondary='Really fresh' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
          </List>
        </section>
        <section>
          <h2>Two-line item with avatar and icon</h2>
          <List>
            <Row
              primary='Apple'
              secondary='Really fresh'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
              icon={someIcon} />
            <Row
              primary='Banana'
              secondary='Really fresh'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
              icon={someIcon} />
            <Row
              primary='Strawberry'
              secondary={'Really fresh ' + longText}
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
              icon={someIcon} />
          </List>
        </section>
        <section>
          <h2>Three-line (subheader) item</h2>
          <List>
            <Row primary='Apple' subheader='Try new fruits' secondary='From Belgium' />
            <Row primary='Banana' subheader='Try new fruits' secondary='From Sweden' />
            <Row primary='Strawberry' subheader='Try new fruits' secondary='From Germany' />
          </List>
        </section>
        <section>
          <h2>Three-line (subheader) item with icon</h2>
          <List>
            <Row
              primary='Apple'
              subheader='Try new fruits'
              icon={<Icon.Assessment />}
              secondary='Really fresh' />
            <Row
              primary='Banana'
              subheader='Try new fruits'
              icon={someIcon}
              secondary='Really fresh' />
            <Row
              primary='Strawberry'
              subheader='Try new fruits'
              icon={someIcon}
              secondary='Really fresh' />
          </List>
        </section>
        <section>
          <h2>Three-line (subheader) item with avatar</h2>
          <List>
            <Row
              primary='Apple'
              subheader='Try new fruits'
              secondary='Really fresh'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
            <Row
              primary='Banana'
              subheader='Try new fruits'
              secondary='Really fresh'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
            <Row
              primary='Strawberry'
              subheader='Try new fruits'
              secondary='Really fresh'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
          </List>
        </section>
        <section>
          <h2>Three-line (subheader) item with avatar and icon</h2>
          <List>
            <Row
              primary='Apple'
              subheader='Try new fruits'
              secondary='Really fresh'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
              icon={someIcon} />
            <Row
              primary='Banana'
              subheader='Try new fruits'
              secondary='Really fresh'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
              icon={someIcon} />
            <Row
              primary='Strawberry'
              secondary='Really fresh'
              subheader='Try new fruits'
              avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
              icon={someIcon} />
          </List>
        </section>
        <section>
          <h2>Custom style</h2>
          <List style={{backgroundColor: 'cyan'}}>
            <Row primary='Apple' />
            <Row primary='Banana' />
            <Row primary='Strawberry' />
          </List>
        </section>
      </div>
    )
  }

}
