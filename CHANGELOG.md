
# CHANGELOG

## v2.0.0 / 2016-08-16

- button: remove `isRequired` from `onClick` method since submit buttons do not need one [31207e9](https://github.com/HBM/react-components/commit/31207e999f472e5e60eecd2505981500c3efbf4a)
- button: rewrite tests using enzyme [cd19fe8](https://github.com/HBM/react-components/commit/cd19fe80cf3c1d09d3df947f8f47d0be5990f19a)
- card: rewrite tests using enzyme (fix #9)
- checkbox: rewrite tests using enzyme [ac81430](https://github.com/HBM/react-components/commit/ac81430276b45b05883ef5571b596dca1bf1d71c)
- chip: add new component [9d6027c](https://github.com/HBM/react-components/commit/9d6027cd44bfc5fad8eaa98d45f4fb258964b805)
- header: show shadow only on scroll (fix #7)
- menu: add `transformX` and `transformY` props to configure transform origin [0346e97](https://github.com/HBM/react-components/commit/0346e97b2a3b8d6b9dc32c7d2517c438ef423d24)
- menu: make `DIVIDER` not all uppercase, i.e. `Divider` (fix #8)
- modal: remove origin prop (fix #1)
- progress: rewrite tests using enzyme [d66532a](https://github.com/HBM/react-components/commit/d66532a62be75654075610dd189c48d0f7cfafb5)
- sparkline: add first simple test [7d00010](https://github.com/HBM/react-components/commit/7d000103f49ddd3be4fe5f99fcbacbf38254b3f9)
- textfield: add `defaultValue` and fix default props [c78d44e](https://github.com/HBM/react-components/commit/c78d44e66982905f1b90a87b3b8b1865d95f3f84)
- textfield: add `email`, `search`, `tel` and `url` to allowed types [7cd565f](https://github.com/HBM/react-components/commit/7cd565fc2da4203bfca557ba4d37a5f9822d45d4)
- upload: rewrite tests using enzyme [4ced558](https://github.com/HBM/react-components/commit/4ced5585d48f25098e656c7e61fa0955afc6c5ae)

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
