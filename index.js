var scrollbarSize;

function getScrollbarSize() {
  if (typeof scrollbarSize !== 'undefined') return scrollbarSize;

  var dummyScroller = document.createElement('div');
  dummyScroller.setAttribute('style', 'width:99px;height:99px;'
    + 'position:absolute;top:-9999px;overflow:scroll;');
  document.body.appendChild(dummyScroller);
  scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
  document.body.removeChild(dummyScroller);
  return scrollbarSize;
}

function hasScrollbar() {
  return document.body.scrollHeight > window.innerHeight;
}

function on(options) {
  var rightPad = parseInt(getComputedStyle(document.body)['padding-right'], 10);
  var originalStyle = document.body.getAttribute('style') || '';
  originalStyle += 'overflow:hidden;';
  if (hasScrollbar()) {
    rightPad += getScrollbarSize();
    originalStyle += 'padding-right:' + rightPad + 'px;';
  }
  document.body.setAttribute('style', originalStyle);
}

function off() {
  var cleanedStyle = document.body.getAttribute('style')
    .replace(/overflow:hidden;(?:padding-right:.+?;)?/, '');
  document.body.setAttribute('style', cleanedStyle);
}

module.exports = {
  on: on,
  off: off,
};
