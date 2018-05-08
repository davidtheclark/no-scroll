# Changelog

## 2.1.1

- Prevent accidentally scrolling to the top of the viewport if you call `noScroll.on()` twice without any intervening `noScroll.off()`.

## 2.1.0

- Add `toggle` function.

## 2.0.0

- Switch methods for scroll blocking. Now we're fixing the `position` of `document.documentElement`.
- Switch methods for scrollbar compensation. Now we're using `calc()`.

## 1.1.2

- Fix IE bug.

## 1.1.0 and 1.1.1

- Expose `noScroll` globally if `module.exports` is unavailable (no CommonJS environment).

## 1.0.2

- No-op if there's no document.

## 1.0.1

- Switch inline styles from body to `documentElement`.

## 1.0.0

- Initial release.
