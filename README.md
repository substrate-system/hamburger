# hamburger
![tests](https://github.com/substrate-system/hamburger/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/hamburger?style=flat-square)](./dist/index.d.ts)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A hamburger menu, implemented as a web component.

![Hamburger button closed](image.png)
![Hamburger button open](image-1.png)

<!-- toc -->

- [install](#install)
- [use](#use)
- [example](#example)
  * [bundler](#bundler)
  * [HTML only](#html-only)
- [API](#api)
  * [events](#events)
  * [attributes](#attributes)
  * [CSS variables](#css-variables)
- [credits](#credits)

<!-- tocstop -->

## install

```sh
npm i -S @substrate-system/hamburger
```

## use
This is a web component. Just import the JS and CSS, then you can use the tag
in your HTML.

## example

* see code in [./example](./example/)
* [See a live demonstration](https://substrate-system.github.io/hamburger/)

### bundler
With a bundler such as [vite](https://vitejs.dev/),

```js
// just import, then we can use the tag in HTML
import '@sustrate-system/hamburger'
import '@sustrate-system/hamburger/style.css'

// import the application CSS, because we are defining some CSS variables
import './index.css'
```

### HTML only
You can use the files in this module directly by linking in your HTML.

First, copy the files to a location accessible to your web server. This package
includes minified files.

#### JS
```sh
cp ./node_modules/@sustrate-system/hamburger/dist/index.min.js ./public/hamburger.js
```

#### CSS
```sh
cp ./node_modules/@sustrate-system/hamburger/dist/style.min.css ./public/hamburger.css
```

Then link to them in HTML:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- the style -->
    <link rel="stylesheet" href="/hamburger.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
</head>
<body>
    <!-- use the element -->
    <hamburger-menu transition=800>
      <a href="#example">example link</a>
      <a href="#example">example two</a>
    </hamburger-menu>

    <!-- the JS -->
    <script type="module" src="/hamburger.js"></script>
  </body>
</html>
```

## API

### events
Two custom events, `open` and `close`.

```js
const burger = document.querySelector('hamburger-menu')

burger?.addEventListener('open', ev => {
  debug('open')
})

burger?.addEventListener('close', ev => {
  debug('close')
})
```

### attributes

#### transition
Take an attribute `transition` to set the time, in milliseconds that it takes
for the menu to transition in and out of the viewport.

Default is 200ms.

This corresponds to a CSS variable, `--hamburger-transition`, which is the
transition time as a CSS property. Eg, in CSS,
```css
hamburger-menu {
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

> [!NOTE]  
> 800 milliseconds is 0.8 seconds.

### CSS variables
Define several CSS variables to customize the appearance.

```css
:root {
  --hamburger-bgc: var(--white);  /* hamburger background color */
  --hamburger-color: var(--purple); /* hamburger text color */
  --hamburger-hover-color: var(--bright-white); /* hover state text color */
  --menu-bgc: var(--white);  /* background color for the expanded menu */
  --menu-color: var(--purple);  /* text color for expanded menu */
  --menu-hover-bgc: var(--purple); /* hover background color inside menu */
  --menu-hover-color: var(--white); /* hover text color inside menu */
  --menu-width: 200px;
  --hamburger-transition: .2s;  /* default is .2s */
}
```

## credits

Based on [this codepen page](https://codepen.io/vxdiazdel/pen/wzvNGy).
