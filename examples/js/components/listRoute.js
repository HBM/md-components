import React from 'react'
import Playground from 'component-playground'
import { List, Row, Icon } from '../../../'

const longText = 'This is sometimes a very lengthy text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita graviter et severe voluptatem secrevit a bono. Aliter homines, aliter philosophos loqui putas oportere? Nunc haec primum fortasse audientis servire debemus'

const _singleLineItem =
`<List>
  <Row primary='Apple' />
  <Row primary='Banana' />
  <Row primary='Strawberry' />
</List>`

const _singleLineItemWithIcon =
`<List>
  <Row primary='Apple' icon={<Icon.Assessment />} />
  <Row primary='Banana' icon={<Icon.Assessment />} />
  <Row primary='Strawberry' icon={<Icon.Assessment />} />
</List>`

const _singleLineItemWithAvatar =
`<List>
  <Row primary='Apple' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
  <Row primary='Banana' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
  <Row primary='Strawberry' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
</List>`

const _singleLineItemWithAvatarAndIcon =
`<List>
  <Row primary='Apple' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' icon={<Icon.Assessment />} />
  <Row primary='Banana' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' icon={<Icon.Assessment />} />
  <Row primary='Strawberry' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' icon={<Icon.Assessment />} />
</List>`

const _twoLineItem =
`<List>
  <Row primary='Apple' secondary='From Belgium' />
  <Row primary='Banana' secondary='From Sweden' />
  <Row primary='Strawberry' secondary={'From Germany. ' + longText} />
</List>`

const _twoLineItemWithIcon =
`<List>
  <Row primary='Apple' icon={<Icon.Assessment />} secondary='Really fresh' />
  <Row primary='Banana' icon={<Icon.Assessment />} secondary='Really fresh' />
  <Row primary='Strawberry' icon={<Icon.Assessment />} secondary='Really fresh' />
</List>`

const _twoLineItemWithAvatar =
`<List>
  <Row primary='Apple' secondary='Really fresh' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
  <Row primary='Banana' secondary='Really fresh' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
  <Row primary='Strawberry' secondary='Really fresh' avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460' />
</List>`

const _twoLineItemWithAvatarAndIcon =
`<List>
  <Row
    primary='Apple'
    secondary='Really fresh'
    avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
    icon={<Icon.Assessment />} />
  <Row
    primary='Banana'
    secondary='Really fresh'
    avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
    icon={<Icon.Assessment />} />
  <Row
    primary='Strawberry'
    secondary={'Really fresh ' + longText}
    avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
    icon={<Icon.Assessment />} />
</List>`

const _threeLineSubheaderItem =
`<List>
  <Row primary='Apple' subheader='Try new fruits' secondary='From Belgium' />
  <Row primary='Banana' subheader='Try new fruits' secondary='From Sweden' />
  <Row primary='Strawberry' subheader='Try new fruits' secondary='From Germany' />
</List>`

const _threeLineSubheaderItemWithIcon =
`<List>
  <Row
    primary='Apple'
    subheader='Try new fruits'
    icon={<Icon.Assessment />}
    secondary='Really fresh' />
  <Row
    primary='Banana'
    subheader='Try new fruits'
    icon={<Icon.Assessment />}
    secondary='Really fresh' />
  <Row
    primary='Strawberry'
    subheader='Try new fruits'
    icon={<Icon.Assessment />}
    secondary='Really fresh' />
</List>`

const _threeLineSubheaderItemWithAvatar =
`<List>
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
</List>`

const _threeLineSubheaderItemWithAvatarAndIcon =
`<List>
  <Row
    primary='Apple'
    subheader='Try new fruits'
    secondary='Really fresh'
    avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
    icon={<Icon.Assessment />} />
  <Row
    primary='Banana'
    subheader='Try new fruits'
    secondary='Really fresh'
    avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
    icon={<Icon.Assessment />} />
  <Row
    primary='Strawberry'
    secondary='Really fresh'
    subheader='Try new fruits'
    avatar='https://avatars3.githubusercontent.com/u/445883?v=3&s=460'
    icon={<Icon.Assessment />} />
</List>`

const _customStyle =
`<List style={{backgroundColor: 'cyan'}}>
  <Row primary='Apple' />
  <Row primary='Banana' />
  <Row primary='Strawberry' />
</List>`

const _selectable_onFocusOrOnBlurDefinedOnRow =
`<List>
  <Row primary='Apple' onFocus={() => {}} />
  <Row primary='Banana' onFocus={() => {}} />
  <Row primary='Strawberry' onFocus={() => {}} />
</List>`

export default class ListRoute extends React.Component {

  render () {
    return (
      <div>
        <section>
          <h2>Single-line item</h2>
          <Playground
            codeText={_singleLineItem}
            scope={{React, List, Row}}
          />
        </section>
        <section>
          <h2>Single-line item with icon</h2>
          <Playground
            codeText={_singleLineItemWithIcon}
            scope={{React, List, Row, Icon}}
          />
        </section>
        <section>
          <h2>Single-line item with avatar</h2>
          <Playground
            codeText={_singleLineItemWithAvatar}
            scope={{React, List, Row}}
          />
        </section>
        <section>
          <h2>Single-line item with avatar and icon</h2>
          <Playground
            codeText={_singleLineItemWithAvatarAndIcon}
            scope={{React, List, Row, Icon}}
          />
        </section>
        <section>
          <h2>Two-line item</h2>
          <Playground
            codeText={_twoLineItem}
            scope={{React, List, Row, longText}}
          />
        </section>
        <section>
          <h2>Two-line item with icon</h2>
          <Playground
            codeText={_twoLineItemWithIcon}
            scope={{React, List, Row, Icon}}
          />
        </section>
        <section>
          <h2>Two-line item with avatar</h2>
          <Playground
            codeText={_twoLineItemWithAvatar}
            scope={{React, List, Row}}
          />
        </section>
        <section>
          <h2>Two-line item with avatar and icon</h2>
          <Playground
            codeText={_twoLineItemWithAvatarAndIcon}
            scope={{React, List, Row, Icon, longText}}
          />
        </section>
        <section>
          <h2>Three-line (subheader) item</h2>
          <Playground
            codeText={_threeLineSubheaderItem}
            scope={{React, List, Row}}
          />
        </section>
        <section>
          <h2>Three-line (subheader) item with icon</h2>
          <Playground
            codeText={_threeLineSubheaderItemWithIcon}
            scope={{React, List, Row, Icon}}
          />

        </section>
        <section>
          <h2>Three-line (subheader) item with avatar</h2>
          <Playground
            codeText={_threeLineSubheaderItemWithAvatar}
            scope={{React, List, Row}}
          />
        </section>
        <section>
          <h2>Three-line (subheader) item with avatar and icon</h2>
          <Playground
            codeText={_threeLineSubheaderItemWithAvatarAndIcon}
            scope={{React, List, Row, Icon}}
          />
        </section>
        <section>
          <h2>Custom style</h2>
          <Playground
            codeText={_customStyle}
            scope={{React, List, Row}}
          />

        </section>
        <section>
          <h2>Selectable (onFocus or onBlur defined on Row)</h2>
          <Playground
            codeText={_selectable_onFocusOrOnBlurDefinedOnRow}
            scope={{React, List, Row}}
          />
        </section>
      </div>
    )
  }

}
