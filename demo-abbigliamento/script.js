document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });
});
