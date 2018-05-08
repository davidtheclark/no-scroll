var noScroll = require('..');

global.noScroll = noScroll;

var activators = document.getElementsByClassName('js-activator');
var deactivators = document.getElementsByClassName('js-deactivator');

document.addEventListener('click', function(e) {
  if (e.target.className === 'js-activator') {
    activate();
  } else if (e.target.className === 'js-deactivator') {
    deactivate();
  }
});

function activate() {
  noScroll.on();
  for (var i = 0, l = activators.length; i < l; i++) {
    activators[i].disabled = true;
  }
  for (var j = 0, k = deactivators.length; j < k; j++) {
    deactivators[j].disabled = false;
  }
}

function deactivate() {
  noScroll.off();
  for (var i = 0, l = activators.length; i < l; i++) {
    activators[i].disabled = false;
  }
  for (var j = 0, k = deactivators.length; j < k; j++) {
    deactivators[j].disabled = true;
  }
}
