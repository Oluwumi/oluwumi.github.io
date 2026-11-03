(function () {
  var root = document.documentElement;
  var base = document.body.getAttribute("data-base") || "";

  /* Theme toggle (remembered per browser when storage is available) */
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) {}
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function paintToggle(btn) {
    var dark = currentTheme() === "dark";
    btn.textContent = dark ? "☀" : "☾";
    btn.setAttribute("aria-label", dark ? "Switch To Light Theme" : "Switch To Dark Theme");
  }
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    paintToggle(btn);
    btn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      document.querySelectorAll(".theme-toggle").forEach(paintToggle);
    });
  });

  var projects = window.PROJECTS || [];
  var labels = window.STATUS_LABELS || {};
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function statusPill(s) { return '<span class="status status-' + esc(s) + '">' + esc(labels[s] || s) + "</span>"; }

  /* Case Studies dropdown */
  document.querySelectorAll("[data-case-menu]").forEach(function (menu) {
    menu.innerHTML = projects.map(function (p) {
      return '<a href="' + base + "case-studies/" + p.slug + '.html">' + esc(p.title) + "<small>" + esc(p.subtitle) + "</small></a>";
    }).join("");
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll("details.dropdown[open]").forEach(function (d) { if (!d.contains(e.target)) d.removeAttribute("open"); });
  });

  /* Project cards */
  var cards = document.querySelector("[data-cards]");
  if (cards) {
    cards.innerHTML = projects.map(function (p) {
      var br = p.brand || ["#142D4E", "#F18B75"];
      return '<a class="card" style="--b1:' + br[0] + ';--b2:' + br[1] + (p.frame ? ';--frame:' + p.frame : '') + '" href="' + base + "case-studies/" + p.slug + '.html">' +
        '<div class="card-thumb"><img src="' + base + p.thumb + '" alt="' + esc(p.thumbAlt) + '" loading="lazy" width="800" height="500"></div>' +
        '<div class="card-body">' +
          '<div class="card-meta"><span>' + esc(p.category) + "</span>" + statusPill(p.status) + "</div>" +
          "<h3>" + esc(p.title) + "</h3>" +
          (p.metrics ? '<div class="metrics">' + p.metrics.map(function (m) { return '<div><b>' + esc(m[0]) + '</b><span>' + esc(m[1]) + "</span></div>"; }).join("") + "</div>" : "") +
          '<div class="card-sub">' + esc(p.subtitle) + "</div>" +
          '<div class="card-role">' + esc(p.role) + "</div>" +
          '<p class="card-desc">' + esc(p.description) + "</p>" +
          '<div class="tags">' + p.tags.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
          '<span class="card-cta">Read Case Study →</span>' +
        "</div></a>";
    }).join("");
  }

  /* Key numbers in the case study header */
  var heroWrap = document.querySelector(".cs-hero .wrap");
  var nextAttr = document.querySelector("[data-next-case]");
  if (heroWrap && nextAttr) {
    var me = projects.find(function (p) { return p.slug === nextAttr.getAttribute("data-next-case"); });
    if (me && me.metrics) {
      var strip = document.createElement("div");
      strip.className = "hero-metrics";
      strip.innerHTML = me.metrics.map(function (m) { return '<div><b>' + esc(m[0]) + '</b><span>' + esc(m[1]) + "</span></div>"; }).join("");
      heroWrap.appendChild(strip);
    }
  }

  /* Next case study link */
  var nextEl = document.querySelector("[data-next-case]");
  if (nextEl) {
    var slug = nextEl.getAttribute("data-next-case");
    var i = projects.findIndex(function (p) { return p.slug === slug; });
    var n = projects[(i + 1) % projects.length];
    if (n && n.slug !== slug) {
      nextEl.innerHTML = '<a href="' + (base || "./") + "#work" + '"><small>Back</small><span>← All Case Studies</span></a>' +
        '<a href="' + n.slug + '.html" style="text-align:right"><small>Next Case Study</small><span>' + esc(n.title) + " →</span></a>";
    }
  }

  /* Copy email */
  document.querySelectorAll("[data-copy]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy");
      var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1600); };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { selectText(btn.previousElementSibling); });
      } else { selectText(btn.previousElementSibling); }
    });
  });
  function selectText(el) {
    if (!el) return;
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }

  /* Lightbox for screenshots */
  var box = null;
  document.querySelectorAll("button.shot").forEach(function (b) {
    b.addEventListener("click", function () {
      var img = b.querySelector("img");
      if (!img) return;
      box = document.createElement("div");
      box.className = "lightbox";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true");
      box.innerHTML = '<button type="button">Close</button><img alt="">';
      box.querySelector("img").src = img.currentSrc || img.src;
      box.querySelector("img").alt = img.alt;
      box.addEventListener("click", closeBox);
      document.body.appendChild(box);
      box.querySelector("button").focus();
    });
  });
  function closeBox() { if (box) { box.remove(); box = null; } }
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeBox(); });

  /* Highlight current section in the contents rail */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          tocLinks.forEach(function (a) { a.classList.remove("active"); });
          map[en.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) obs.observe(s); });
  }
})();
