'use strict';
(function () {
  var lastParagraph = document.querySelector('.gym__description p:last-child');
  if (lastParagraph) {
    var removeText = function () {
      if (window.innerWidth < 1200) {
        lastParagraph.style.display = 'none';
      } else {
        lastParagraph.style.display = 'inline';
      }
    };
    removeText();
    window.addEventListener('resize', removeText);
  }
}());
