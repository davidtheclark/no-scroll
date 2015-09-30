(function(root) {
  var scrollbarSize;

  function getScrollbarSize() {
    if (typeof scrollbarSize !== 'undefined') return scrollbarSize;

    var doc = document.documentElement;
    var dummyScroller = document.createElement('div');
    dummyScroller.setAttribute('style', 'width:99px;height:99px;'
      + 'position:absolute;top:-9999px;overflow:scroll;');
    doc.appendChild(dummyScroller);
    scrollbarSize = dummyScroller.offsetWidth - dummyScroller.clientWidth;
    doc.removeChild(dummyScroller);
    return scrollbarSize;
  }

  function hasScrollbar() {
    return document.documentElement.scrollHeight > window.innerHeight;
  }

  function on(options) {
    if (typeof document === 'undefined') return;
    var doc = document.documentElement;
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
    if (typeof document === 'undefined') return;
    var doc = document.documentElement;
    var cleanedStyle = doc.getAttribute('style')
      .replace(/overflow:hidden;(?:padding-right:.+?;)?/, '');
    doc.setAttribute('style', cleanedStyle);
  }

  var noScroll = {
    on: on,
    off: off,
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = noScroll;
  }
  else {
    root.noScroll = noScroll;
  }
})(this);
