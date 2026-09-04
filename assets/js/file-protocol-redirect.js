(function () {
  if (window.location.protocol !== "file:") {
    return;
  }

  var fileName = window.location.pathname.split("/").pop() || "index.html";
  var target = "http://127.0.0.1:8000/" + fileName + window.location.search + window.location.hash;
  var probe = new Image();

  probe.onload = function () {
    window.location.replace(target);
  };

  probe.src = "http://127.0.0.1:8000/assets/images/favicon.png?probe=" + Date.now();
})();
