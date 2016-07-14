
# hbm-react-components

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/HBM/react-components.svg?branch=master)](https://travis-ci.org/HBM/react-components)
[![npm](https://img.shields.io/npm/v/hbm-react-components.svg)](https://www.npmjs.com/package/hbm-react-components)
[![Coverage Status](https://coveralls.io/repos/github/HBM/react-components/badge.svg)](https://coveralls.io/github/HBM/react-components)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/zemirco.svg)](https://saucelabs.com/u/zemirco)

## Installation

```bash
$ npm install --save hbm-react-components
```

## Usage

`/js/index.js`

```js
import React from 'react';
import {Button} from 'react-components';


class App extends React.Component {

  onClick = () => {
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

`/css/index.scss`

```scss
@import "../node_modules/react-components/css/hbm";
@import "../node_modules/react-components/button/Button";
```

## Design Decisions

Interested in more of our technical decisions? See [Design Decisions](decisions/README.md).

## Development

- [Google Material Design](https://www.google.com/design/spec/material-design/introduction.html)
- use [Sass](http://sass-lang.com/)
- follow [SUIT CSS](https://suitcss.github.io/) guidelines

## License

MIT
