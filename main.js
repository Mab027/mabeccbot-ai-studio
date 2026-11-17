/* MabeccBot AI Studio — minimal vanilla JS. No dependencies, no tracking. */
(function () {
  "use strict";

  /* ---- mobile navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- mark the current page in the nav ---- */
  var path = location.pathname.split("/").pop() || "index.html";
  var links = document.querySelectorAll(".nav-menu a[href]");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      links[i].setAttribute("aria-current", "page");
    }
  }

  /* ---- current year in footer ---- */
  var years = document.querySelectorAll("[data-year]");
  for (var y = 0; y < years.length; y++) {
    years[y].textContent = new Date().getFullYear();
  }

  /* ---- contact form -> email draft (no backend on this site) ---- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (id) {
        var el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };
      var name = get("name");
      var email = get("email");
      var service = get("service");
      var message = get("message");

      var subject = "Website enquiry — " + (service || "general") + (name ? " (" + name + ")" : "");
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Service: " + (service || "not specified") + "\n\n" +
        message;

      var url =
        "mailto:talesbeneaththebaobab01@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = url;

      var hint = document.getElementById("form-status");
      if (hint) {
        hint.textContent =
          "Opening your email app with this message pre-filled. If nothing opens, email talesbeneaththebaobab01@gmail.com or message us on WhatsApp.";
      }
    });
  }
})();
