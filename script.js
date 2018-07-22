'use strict';

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

// TODO restart on location change - allows to navigate to other videos on site
if (window.location.origin === "https://www.youtube.com") {

  var element = document.querySelector(".videoAdUiSkipContainer");

  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type == "attributes" && element.style.display != "none") {
        document.getElementsByClassName("videoAdUiSkipButton")[0].click();
      }
    });
  });

  // TODO close the "svg-close-button"

  observer.observe(element, {
    attributes: true
  });

  window.addEventListener('keydown', function (e) {
    if (e.keyCode == 32 || e.key === ' ' || e.code === 'Space' ) {
      e.preventDefault();
      document.querySelector(".video-stream").focus();
      var newEvent = new KeyboardEvent('keydown',{'keyCode':32,'which':32, 'target':e.target});
      document.querySelector(".video-stream").dispatchEvent(newEvent);
      // sometimes have to hit space twice before it works - look for possible solutions
    }
    else if (e.keyCode == 38 || e.key === 'ArrowDown' ||
    e.keyCode == 40 || e.key === 'ArrowUp') {
      document.querySelector(".video-stream").focus();
    }
  });

}
else {
  setTimeout(function () {
    document.getElementsByClassName("closeButton")[0].click();
  }, 3000);
}
