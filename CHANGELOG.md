
# CHANGELOG

## v1.1.0 / 2016-07-12

- remove several warnings "Unknown prop xmlns on tag". As the `xmlns` attribute is not a required tag for SVG elements which are inside HTML documents we can safely remove the attribute. Removing the attribute also removes the warning.
- make Sauce Labs work with Travis CI. This is currently just a proof of concept and will become even more awesome in the near future.
- rewrite build and test process using npm scripts instead Makefile. npm scripts are platform independent and `make` only works on Linux.
- use [ref callback](https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute) instead `ReactDOM.findDOMNode`.
- use [classnames](https://github.com/JedWatson/classnames) instead custom ES6 string interpolation for conditional CSS classnames.
- create examples in master branch to make playing around and viewing the components easier.

## v1.0.1 / 2016-07-12

- [1dae340](https://github.com/HBM/react-components/commit/1dae3407eb0a70be9f1cd3623979dad86a801ae0): fix path to progress component

## v1.0.0 / 2016-07-12

- initial release
