'use strict';


if (window.location.origin === "https://www.youtube.com") {
  setTimeout(function () {
    document.getElementsByClassName("videoAdUiSkipButton")[0].click();
  }, 10000);
}
else {
  setTimeout(function () {
    document.getElementsByClassName("closeButton")[0].click();
  }, 3000);
}

