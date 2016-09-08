
# CHANGELOG

## v3.0.0 / 2016-09-08

- add new list component [cb3485f](https://github.com/HBM/react-components/commit/cb3485f621fa6e355a7635f5fdc2906cb13367bb)
- all icons are now auto generated from original Material Design SVG icons [a7aafe0](https://github.com/HBM/react-components/commit/a7aafe0720e17493a63e99efec4c91ffaf94d031)
- rewrite tests using mocha instead karma [bc69f47](https://github.com/HBM/react-components/commit/bc69f47da39196e76c3f77319090672083793c0a)
- chip: remove focus outline glow [376e9ba](https://github.com/HBM/react-components/commit/376e9ba4683c6c915081de212ba67ff04ff50c2b)
- chip: add custom delimiter [ee2be49](https://github.com/HBM/react-components/commit/ee2be4917ff06c8478206df89d82639dada1b675)
- chip: add `onFocus` and `onBlur` properties [b5ad172](https://github.com/HBM/react-components/commit/b5ad17293b265d4b7dc5a03999fe21da4bbb7876)
- chip: add `autoFocus` property [3a831f5](https://github.com/HBM/react-components/commit/3a831f58858ec7c9d3cbc530417c7305947b7af1)
- chip: fix browser backspace behavior [dcf35bd](https://github.com/HBM/react-components/commit/dcf35bd84f0034a908b2b273857aa582d2cc6ee5)
- chip: add `placeholder` property [29eba18](https://github.com/HBM/react-components/commit/29eba18a506146ec5945598131801bb4f380761b)
- textfield: add `number` as allowed type to input field [b0e8d44](https://github.com/HBM/react-components/commit/b0e8d44b5f23efc70e478fc8ecc3b86c3b7ff409)
- textfield: add `float` property to stop label from floating [11d369f](https://github.com/HBM/react-components/commit/11d369f414c1b251e2a6b5f8876576e20edb90c7)
- checkbox: add `name` and `defaultChecked` properties [2578921](https://github.com/HBM/react-components/commit/2578921f5d2287bdf249ca6bc956176cdafc302a)
- progress: add prefix `Progress` to `Linear` and `Circular` components [b15a9f7](https://github.com/HBM/react-components/commit/b15a9f7a02e16e3aa51c2ef3cac9699fbd55f957)
- add live playground with editable code to docs

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
