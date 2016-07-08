
# Icon

Icon component.

## Usage

```js
import React from 'react';
import {Icon} from 'react-components';

/**
 * Main app component
 */
class App extends React.Component {

  onClick = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div>
        <Icon.User />
        <Icon.Button onClick={this.onClick}>
          <Icon.Help />
        </Icon.Button>
      </div>
    );
  }

}
```
