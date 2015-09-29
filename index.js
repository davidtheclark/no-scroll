(function(root) {
  var scrollbarSize;
  var doc = root.document && root.document.documentElement;

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
    if (!doc) return;
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
    if (!doc) return;
    var cleanedStyle = doc.getAttribute('style')
      .replace(/overflow:hidden;(?:padding-right:.+?;)?/, '');
    doc.setAttribute('style', cleanedStyle);
  }

  var noScroll = {
    on: on,
    off: off,
  };

  if (root.module && root.module.exports) {
    module.exports = noScroll;
  }
  else {
    root.noScroll = noScroll;
  }
})(this);
