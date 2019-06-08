# no-scroll


---

**SEEKING CO-MAINTAINERS!** Continued development of this project is going to require the work of one or more dedicated co-maintainers (or forkers). If you're interested, please comment in [this issue](https://github.com/davidtheclark/no-scroll/issues/13).

---


Disable the document's scrolling.

It's silly how many libraries have their own implementation of this.
So I thought I'd make a module that other libraries could use.

Here's how this works:
- When you turn it `on()`, the `documentElement` is styled with `width: calc(100% - scrollbarSize)`, `position: fixed`, `top: currentScrollTop`, and `overflow: hidden`.
- When you turn it `off()`, everything goes back to the way it was before.

## Installation

```
npm install no-scroll
```

Dependencies: *none*.

## Browser Support

Desktop: IE9+

Mobile: Has no effect in iOS, where this simple approach does not work. For a more complex approach that aims to block scrolling on iOS, try [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock).

## Usage

This module exposes three simple functions: `on()`, `off()` and `toggle()`.

```js
var noScroll = require('no-scroll');

// To turn off the document's scrolling
noScroll.on();

// To restore scrolling
noScroll.off();

// To toggle scrolling
noScroll.toggle();
```

If you do not have a CommonJS environment (no `module.exports`), the module
exposes the global object `noScroll`.
