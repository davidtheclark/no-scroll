# no-scroll

Disable the document's scrolling.

It's silly how many libraries have their own implementation of this.
So I thought I'd make a module that other libraries could use.

Here's how this works:
- When you turn it `on()`, the `document.body` is styled with `overflow: hidden`
  and a `padding-right` that mimics the width of the scrollbar.
- When you turn it `off()`, everything goes back to the way it was before.

## Installation

```
npm install no-scroll
```

Dependencies: *none*.

## Usage

This module exposes two simple functions: `on()` and `off()`.

```js
var noScroll = require('no-scroll');

// To turn off the document's scrolling
noScroll.on();

// To restore scrolling
noScroll.off();
```

## Caveats

I have not yet figured out or found an ideal way of stopping scrolling *on touch devices*.
(The common practice of `e.preventDefault()` on `touchmove` events is too obstructive,
at least for a library;
for example, it disables scrolling of *any* element, not just the document.)
*Any big ideas? Please PR?*

## Browser Support

IE9+
Not touchscreens :(
