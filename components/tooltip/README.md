
# Tooltip

Tooltip component.

## Usage

```js
import React from 'react';
import {Tooltip} from 'react-components';

class App extends React.Component {

  render() {
    return (
      <Tooltip content="Press button to submit content">
        <button type="button">
          Submit
        </button>
      </Tooltip>
    );
  }

}
```

If you are using a React component inside `<Tooltip>...</Tooltip>` you have to pass
along some custom properties like `onMouseOver`.

```js
// some custom react component. {...this.props} is important!
class Box extends React.Component {

  render() {
    return (
      <div {...this.props}>
        Box content
      </div>
    );
  }

}

// use custom Box component with tooltip
class App extends React.Component {

  render() {
    return (
      <Tooltip content="Have a look into the box">
        <Box />
      </Tooltip>
    );
  }

}
```
