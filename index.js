var scrollbarSize;
var doc = document.documentElement;

function getScrollbarSize() {
  if (typeof scrollbarSize !== 'undefined') return scrollbarSize;

  var dummyScroller = document.createElement('div');
  dummyScroller.setAttribute('style', 'width:99px;height:99px;'
    + 'position:absolute;top:-9999px;overflow:scroll;');
  doc.appendChild(dummyScroller);
  scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
  doc.removeChild(dummyScroller);
  return scrollbarSize;
}

function hasScrollbar() {
  return doc.scrollHeight > window.innerHeight;
}

function on(options) {
  var rightPad = parseInt(getComputedStyle(doc)['padding-right'], 10);
  var originalStyle = doc.getAttribute('style') || '';
  originalStyle += 'overflow:hidden;';
  if (hasScrollbar()) {
    rightPad += getScrollbarSize();
    originalStyle += 'padding-right:' + rightPad + 'px;';
  }
  doc.setAttribute('style', originalStyle);
}

function off() {
  var cleanedStyle = doc.getAttribute('style')
    .replace(/overflow:hidden;(?:padding-right:.+?;)?/, '');
  doc.setAttribute('style', cleanedStyle);
}

module.exports = {
  on: on,
  off: off,
};
