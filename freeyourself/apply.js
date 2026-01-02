(function () {
  var d = document;
  var w = "https://tally.so/widgets/embed.js";
  var loader = d.getElementById("loader");
  var iframe = d.getElementById("tallyFrame");

  function loadTally() {
    if (typeof Tally !== "undefined") {
      Tally.loadEmbeds();
    } else {
      iframe.src = iframe.dataset.tallySrc;
    }
  }

  iframe.addEventListener("load", function () {
    loader.style.display = "none";
  });

  if (typeof Tally !== "undefined") {
    loadTally();
  } else if (!d.querySelector('script[src="' + w + '"]')) {
    var s = d.createElement("script");
    s.src = w;
    s.onload = loadTally;
    s.onerror = loadTally;
    d.body.appendChild(s);
  }
})();
