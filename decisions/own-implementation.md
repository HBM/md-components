
# Own implementation vs. using an existing one

We have multiple reasons building our own components instead of using an already existing React Material Design implementation like

  - [material-ui](https://github.com/callemall/material-ui)
  - [react-toolbox](https://github.com/react-toolbox/react-toolbox)
  - [react-mdl](https://github.com/tleunen/react-mdl)
  - [Essence](https://github.com/Evo-Forge/Essence)

1. We care about long term support

	HBM was founded 60 years and we plan to exist for at least another 60 years. Our high end devices have lifetimes greater than 10 years and we have to ensure we are always able to update them. The web frontend is getting more and more important these days and so we have to achieve the same high quality we have for our embedded code. We are using our react components on a daily basis in our products and ship them to our customers. Fixing bugs will always have highest priority which means you'll always get support. Two engineers are working full time on our frontends and on our react components.

2. We care about code quality

	We use standard for code formatting, have unit tests for all our components and a code coverage greater than 90%. We follow SemVer for releases, write detailed relase notes and have pull requests reviewed by a second person.

3. We care about the Google Material Design Styleguide

	The [menu](https://material.google.com/components/menus.html) component (or select / dropdown) is probably the hardest to implement. If you take a look at the videos you'll see that the list always appears on top of the selected element. The list is automatically scrolled to the right position and the selected item never repeats itself. Check out our implementation. You'll love it.
