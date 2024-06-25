# hamnurger
![tests](https://github.com/nichoth/hamburger/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@nichoth/hamburger?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A hamburger menu, implemented as a web component.

## install

```sh
npm i -S @nichoth/hamburger
```

## use

This is a web component. Just import the JS and CSS, then you can use the tag
in your HTML.

## example

### bundler
With a bundler such as [vite](https://vitejs.dev/),

```js
// just import, then we can use the tag in HTML
import '@nichoth/hamburger'
import '@nichoth/hamburger/style.css'

// import the application CSS, because we are defining some CSS variables
import './index.css'
```

## API

### attributes

#### transition
Take an attribute `transition` to set the time, in milliseconds that it takes
for the menu to transition in and out of the viewport.

Default is 200ms.

This corresponds to a CSS variable, `--hamburger-transition`, which is the
transition time as a CSS property. Eg, in CSS,
```css
:root {
  --hamburger-transition: .8s
}
```

corresponds with this HTML:
```html
<hamburger-menu transition=800>
  <a href="#example">example link</a>
  <a href="#example">example two</a>
</hamburger-menu>
```

> !NOTE!
> 800 milliseconds is 0.8 seconds.

## credits

Based on [this codepen page](https://codepen.io/vxdiazdel/pen/wzvNGy).
