
# md-components

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Build Status](https://travis-ci.org/HBM/md-components.svg?branch=master)](https://travis-ci.org/HBM/md-components)
[![npm](https://img.shields.io/npm/v/md-components.svg)](https://www.npmjs.com/package/md-components)
[![Coverage Status](https://coveralls.io/repos/github/HBM/md-components/badge.svg)](https://coveralls.io/github/HBM/md-components)

## Demo

Demos with __editable__ code examples are available on the [gh-pages](https://hbm.github.io/md-components).

## Installation

NodeJS > 6 is required for building the examples and running the tests.

```bash
$ npm install --save md-components
```

## Usage

`/js/index.js`

```js
import React from 'react'
import {Button} from 'md-components'


class App extends React.Component {

  onClick = () => {
    console.log('clicked')
  }

  render() {
    return (
      <div>
        <Button onClick={this.onClick}>
          Hello
        </Button>
      </div>
    )
  }

}
```

`/css/index.scss`

```scss
@import "../node_modules/md-components/css/base";
@import "../node_modules/md-components/button/Button";
```

## Development

```
make watch &
make css &
make serve &
```

- [Google Material Design](https://www.google.com/design/spec/material-design/introduction.html)
- use [Sass](http://sass-lang.com/)
- follow [SUIT CSS](https://suitcss.github.io/) guidelines

### New release

[np - A better npm publish](https://github.com/sindresorhus/np)

```
$ np
```

## License

MIT
