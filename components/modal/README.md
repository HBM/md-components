
# Modal

Modal component.

## Usage

```js
import React from 'react';
import {Modal} from 'react-components';

class App extends React.Component {

  render() {

    var header = <p>some header</p>;
    var body = <div><p>first paragraph</p><p>second paragraph</p></div>;
    var footer = <p>some footer</p>;

    return (
      <div>
        <Modal
          header={header}
          body={body}
          footer={footer}
          isVisible={true}
        />
      </div>
    );
  }

}
```
