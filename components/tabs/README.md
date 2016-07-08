
# Tabs

Tabs component.
Requires [react-router](https://github.com/rackt/react-router) as each tab has its own URL.

## Usage

```js
import React from 'react';
import {Tabs} from 'react-components';

/**
 * Require views
 */
import One from '../views/one';
import Two from '../views/two';
import Three from '../views/three';



/**
 * Main app component
 */
class App extends React.Component {

  render() {
    var tabs = [
      {href: 'one', text: 'one'},
      {href: 'two', text: 'two'},
      {href: 'three', text: 'three'}
    ];

    return (
      <div>
        <header>
          <Tabs tabs={tabs} />
        </header>
        <main>
          <RouteHandler/>
        </main>
      </div>
    );
  }

}



/**
 * Define routes
 */
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="one" handler={One}/>
    <Route name="two" handler={Two}/>
    <Route name="three" handler={Three}/>
    <DefaultRoute handler={One}/>
  </Route>
);



/**
 * Start app
 */
Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('react'));
});
```
