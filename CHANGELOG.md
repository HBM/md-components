
# CHANGELOG

## v5.0.0 / 2016-10-11

- new component [Textarea](https://hbm.github.io/md-components/#/textarea) [c9d6c32](https://github.com/HBM/md-components/commit/c9d6c32331678f5ecb89549aab84592ddecb570e)
- use latest `react-router` v4 [71de4f0](https://github.com/HBM/md-components/commit/71de4f05619fedb75157bfbf0cff72f84ba16082)
- slider: add click handler to bar [cb71634](https://github.com/HBM/md-components/commit/cb71634e9b7c8c566233753b0b1a7b567da63252)
- textfield: improve styles to follow specification [8f4944e](https://github.com/HBM/md-components/commit/8f4944efce9a410d478c06477ff40cafd2aabf75)
- chip: vertically align input with chips [9af7c4b](https://github.com/HBM/md-components/commit/9af7c4bcee4ab36a70d5f15ede7f733de5a67969)
- navigation: fix overlay touch event propagation to underlying elements [adb0443](https://github.com/HBM/md-components/commit/adb0443191ba3d5b51f464e15263f5ef2887adcf)
- list: remove `h` tags to remove implicit semantic [cb625a8](https://github.com/HBM/md-components/commit/cb625a837511e6789dce430e7900b7e058c457a0)
- radiobutton: fix focus handling [56debb0](https://github.com/HBM/md-components/commit/56debb0858ff3a829e69551d7010ec7a58372c9f)
- checkbox: fix focus handling [c8b107b](https://github.com/HBM/md-components/commit/c8b107b1472368d253fe33eda86f39d24043c064)

## v4.0.0 / 2016-09-22

- rename `hbm-react-components` to `md-components`
- chip: fix remove icon style in Firefox and mobile [5d37167](https://github.com/HBM/md-components/commit/5d37167d96bca326214c5785f10dd356cd202940)
- chip: fix styles according to spec [f60a414](https://github.com/HBM/md-components/commit/f60a414061b55a8f524d1b2543b3e036c5a71d38)
- chip: add `deletable` property [d7416d9](https://github.com/HBM/md-components/commit/d7416d9d5c56ba2436690b8db64709fb0cfded02)
- chip: fix `onSubmit` behaviour in forms [717d72c](https://github.com/HBM/md-components/commit/717d72c84c16a3c8d3e44e2a2c4281b9535d44c0)
- add `npm run ...` scripts to make development on Windows easier [3261612](https://github.com/HBM/md-components/commit/326161202775740f9dde19293461aff103176ac0)
- textfield: add `autoCapitalize`, `autoComplete`, `autoCorrect` and `spellCheck` properties [263f6b2](https://github.com/HBM/md-components/commit/263f6b2d92980f29a23be8b7925b8752a8cd515b)
- textfield: add `placeholder` property [d7c0c06](https://github.com/HBM/md-components/commit/d7c0c068cfe39e32a96681f23a371673d440aec6)
- textfield: add `icon` property [2273c8d](https://github.com/HBM/md-components/commit/2273c8df50619de571a0b0e2f623c9bf000cdc8f)
- modal: replace `react-motion` with plain CSS [9ede6af](https://github.com/HBM/md-components/commit/9ede6af9aa5331b68471ad93dfd3858f0626f001)

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
