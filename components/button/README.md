
# Button

Button component.

## Usage

```js
import React from 'react';
import {Button} from 'react-components';

class App extends React.Component {

  onClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>
          Hello
        </Button>
      </div>
    );
  }

}
```
