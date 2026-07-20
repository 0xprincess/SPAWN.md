/* SPAWN.md project page interactions. No dependencies. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme toggle ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }
  function paintThemeBtn() {
    if (themeBtn) themeBtn.textContent = currentTheme() === "dark" ? "Light" : "Dark";
  }
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("spawn-theme", next); } catch (e) {}
      paintThemeBtn();
    });
    paintThemeBtn();
  }

  /* ---------- generic tabs ---------- */
  function wireTabs(tabSelector, panelSelector) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll(tabSelector));
    if (!tabs.length) return;
    var panels = Array.prototype.slice.call(document.querySelectorAll(panelSelector));

    function select(tab) {
      tabs.forEach(function (t) {
        var on = t === tab;
        t.setAttribute("aria-selected", on ? "true" : "false");
        var p = document.getElementById(t.getAttribute("aria-controls"));
        if (p) p.hidden = !on;
      });
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab); });
      tab.addEventListener("keydown", function (e) {
        var j = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") j = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") j = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") j = 0;
        if (e.key === "End") j = tabs.length - 1;
        if (j !== null) { e.preventDefault(); tabs[j].focus(); select(tabs[j]); }
      });
    });
    // panels variable referenced to fail loudly if the selector is wrong
    if (panels.length !== tabs.length && window.console) {
      console.warn("tab/panel count mismatch", tabSelector, tabs.length, panels.length);
    }
  }
  wireTabs(".q-tab", ".q-panel");
  wireTabs(".phase-tab", ".phase-panel");

  /* ---------- lifecycle stepper ---------- */
  var STEP_CONTENT = {
    "step-draft": ["Draft",
      "Under active design. The proposal's Specification section uses MUST/SHOULD/MAY language and must be checkable — a proposal that cannot be tested cannot be tracked."],
    "step-review": ["Review",
      "Design complete, awaiting approval. Relationship headers are settled here: Supersedes, Requires, Extended-By."],
    "step-accepted": ["Accepted",
      "Approved; implementation may begin. Architecture-track decisions are made BEFORE implementation — a nontrivial mechanism gets its proposal accepted first, then built. This is what lets parallel worker sessions build against a stable contract."],
    "step-final": ["Final",
      "Specification settled and immutable — except for adding Superseded-By: and appending dated, operator-authorized Amendment sections that narrow or extend the decision without rewriting it. Amendments state their own supersession boundary explicitly."],
    "step-superseded": ["Superseded",
      "Replaced by a later proposal (see the Superseded-By: header). Design changes to a Final proposal are made by writing a NEW proposal with a Supersedes: header — decision history stays append-only."],
    "step-withdrawn": ["Withdrawn",
      "Abandoned without replacement. An exit, kept on record like every other state — the decision history is append-only by construction."]
  };
  var steps = Array.prototype.slice.call(document.querySelectorAll(".step"));
  var stepTitle = document.getElementById("step-title");
  var stepBody = document.getElementById("step-body");
  var stepDetail = document.getElementById("step-detail");
  if (steps.length && stepTitle && stepBody) {
    steps.forEach(function (step, i) {
      function activate() {
        steps.forEach(function (s) { s.setAttribute("aria-selected", s === step ? "true" : "false"); });
        var c = STEP_CONTENT[step.id];
        if (c) { stepTitle.textContent = c[0]; stepBody.textContent = c[1]; }
      }
      step.addEventListener("click", activate);
      step.addEventListener("keydown", function (e) {
        var j = null;
        if (e.key === "ArrowRight") j = (i + 1) % steps.length;
        if (e.key === "ArrowLeft") j = (i - 1 + steps.length) % steps.length;
        if (j !== null) { e.preventDefault(); steps[j].focus(); steps[j].click(); }
      });
    });
    if (stepDetail) {
      stepDetail.addEventListener("click", function () { /* no-op: keeps panel semantics clear */ });
    }
  }

  /* ---------- playbook accordion ---------- */
  var rules = Array.prototype.slice.call(document.querySelectorAll("#playbook-list .rule"));
  var expandBtn = document.getElementById("expand-all");
  var collapseBtn = document.getElementById("collapse-all");
  if (expandBtn) expandBtn.addEventListener("click", function () {
    rules.forEach(function (r) { r.open = true; });
  });
  if (collapseBtn) collapseBtn.addEventListener("click", function () {
    rules.forEach(function (r) { r.open = false; });
  });

  /* ---------- B1 prefix widget ---------- */
  var prefixInput = document.getElementById("prefix-input");
  var prefixOut = document.getElementById("prefix-output");
  function derivePrefix(name) {
    var cleaned = (name || "").replace(/[^A-Za-z]/g, "");
    if (!cleaned) return null;
    return cleaned[0].toUpperCase() + "IP";
  }
  if (prefixInput && prefixOut) {
    var update = function () {
      var p = derivePrefix(prefixInput.value);
      prefixOut.textContent = p ? p + "-0001" : "—";
    };
    prefixInput.addEventListener("input", update);
    update();
  }

  /* ---------- copy starter prompt ---------- */
  var copyBtn = document.getElementById("copy-prompt");
  var promptText = document.getElementById("prompt-text");
  if (copyBtn && promptText) {
    copyBtn.addEventListener("click", function () {
      var text = promptText.textContent;
      function done() {
        copyBtn.textContent = "Copied";
        setTimeout(function () { copyBtn.textContent = "Copy"; }, 1600);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text, done); });
      } else {
        fallbackCopy(text, done);
      }
    });
  }
  function fallbackCopy(text, done) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    done();
  }

  /* ---------- scroll reveal ---------- */
  var revealEls = Array.prototype.slice.call(
    document.querySelectorAll(".q-panels, .step-detail, .conf-card, .phase-panel, .rule, .bind, .scale-note, .prompt-card, .start-steps li, .hero-card")
  );
  // Fail-safe: if observer support is missing or anything throws, content must
  // simply be visible. The reveal class is only added when we can observe.
  var io = null;
  if (!reduceMotion && "IntersectionObserver" in window) {
    try {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
    } catch (e) { io = null; }
  }
  if (io) {
    revealEls.forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
    // Safety net: anything still hidden after 1.8s (observer never fired for
    // it — e.g. odd embedding contexts) becomes visible anyway.
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }, 1800);
  }
})();
