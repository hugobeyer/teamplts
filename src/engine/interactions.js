import { icon, normalize, refreshIcons } from "./helpers.js";

// ── Internal utilities ──────────────────────────────────────────

function fallbackCopy(text) {
  var area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  area.remove();
}

function copyText(text, button) {
  var old = button.innerHTML;
  function done() {
    button.classList.add("done");
    button.innerHTML = icon("check") + "<span>Copied</span>";
    refreshIcons();
    setTimeout(function () {
      button.classList.remove("done");
      button.innerHTML = old;
      refreshIcons();
    }, 800);
  }
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(done)
      .catch(function () {
        fallbackCopy(text);
        done();
      });
  } else {
    fallbackCopy(text);
    done();
  }
}

// ── Interaction handlers ────────────────────────────────────────

/**
 * Toggles a checkbox element's active state and re-renders its inner icon.
 * @param {HTMLElement} el - The .check element
 * @param {boolean} active - Whether to set it active
 */
export function setCheck(el, active) {
  el.classList.toggle("active", active);
  el.setAttribute("aria-checked", active ? "true" : "false");
  el.innerHTML = active ? icon("check") : "";
  refreshIcons();
}

/**
 * Activates a radio element and deactivates sibling radios within the same scope.
 * @param {HTMLElement} el - The .radio element
 */
export function setRadio(el) {
  var scope =
    el.closest("[data-radio-group]") ||
    el.closest(".stack,.list,.panel,.preview");
  (scope || document).querySelectorAll(".radio").forEach(function (radio) {
    radio.classList.remove("active");
    radio.setAttribute("aria-checked", "false");
  });
  el.classList.add("active");
  el.setAttribute("aria-checked", "true");
}

/**
 * Pulses a demo button briefly (unless it's a filter, toggle, step, etc.).
 * @param {HTMLElement} button - The button element
 */
export function pulseButton(button) {
  if (
    button.closest(".doc-actions") ||
    button.matches(
      "[data-filter],[data-toggle],[data-step],[data-password-toggle],[data-dismiss]",
    )
  )
    return;
  button.classList.add("active");
  setTimeout(function () {
    button.classList.remove("active");
  }, 420);
}

/**
 * Dismisses (hides) the parent callout, list-row, soft-row, or row of a dismiss button.
 * @param {HTMLElement} button - The dismiss button
 */
export function dismissFrom(button) {
  var target = button.closest(".callout,.list-row,.soft-row,.row.between");
  if (target) target.style.display = "none";
}

/**
 * Increments or decrements a step-input value.
 * @param {HTMLElement} button - The [data-step] button
 */
export function stepValue(button) {
  var row = button.closest(".row");
  var input =
    row &&
    (row.querySelector("[data-step-value]") || row.querySelector("input"));
  if (!input) return;
  var next = Number(input.value || 0) + Number(button.dataset.step || 0);
  input.value = String(Math.max(0, next));
}

/**
 * Toggles password visibility for a password field.
 * @param {HTMLElement} button - The [data-password-toggle] button
 */
export function togglePassword(button) {
  var row = button.closest(".row");
  var input =
    row &&
    row.querySelector('input[type="password"],input[data-password-visible]');
  if (!input) return;
  var visible = input.type === "text";
  input.type = visible ? "password" : "text";
  input.toggleAttribute("data-password-visible", !visible);
  button.innerHTML = icon(visible ? "eye" : "eye-off");
  refreshIcons();
}

/**
 * Selects a day cell in a calendar/month grid.
 * @param {HTMLElement} day - The day element
 */
export function selectDay(day) {
  var grid = day.closest(".calendar-grid,.month-grid");
  if (!grid) return;
  grid.querySelectorAll(".day,.d").forEach(function (item) {
    item.classList.remove("act");
  });
  day.classList.add("act");
}

/**
 * Sets the rating value based on which star span was clicked.
 * @param {HTMLElement} target - The clicked star span
 */
export function setRating(target) {
  var rating = target.closest(".rating");
  if (!rating) return;
  var stars = Array.from(rating.querySelectorAll("span"));
  var value = stars.indexOf(target) + 1;
  rating.dataset.rating = String(value);
  stars.forEach(function (star, index) {
    star.style.opacity = index < value ? "1" : ".28";
  });
}

/**
 * Hydrates interactive elements (switches, checks, radios, ratings) with ARIA
 * attributes and proper inner content after DOM rendering.
 * @param {HTMLElement} root - Root element to hydrate within
 */
export function hydrateInteractive(root) {
  root.querySelectorAll(".switch").forEach(function (el) {
    el.setAttribute("role", "switch");
    el.setAttribute(
      "aria-checked",
      el.classList.contains("active") ? "true" : "false",
    );
    if (!el.firstElementChild) el.innerHTML = "<span></span>";
  });
  root.querySelectorAll(".check").forEach(function (el) {
    el.setAttribute("role", "checkbox");
    el.setAttribute(
      "aria-checked",
      el.classList.contains("active") ? "true" : "false",
    );
    if (el.classList.contains("active") && !el.querySelector("svg,i"))
      el.innerHTML = icon("check");
  });
  root.querySelectorAll(".radio").forEach(function (el) {
    el.setAttribute("role", "radio");
    el.setAttribute(
      "aria-checked",
      el.classList.contains("active") ? "true" : "false",
    );
  });
  root.querySelectorAll(".rating").forEach(function (rating) {
    var value = Number(rating.dataset.rating || 0);
    rating.querySelectorAll("span").forEach(function (star, index) {
      star.style.opacity = !value || index < value ? "1" : ".28";
    });
  });
  refreshIcons();
}

// ── Bind all event listeners ────────────────────────────────────

/**
 * Binds all click and input event listeners to the document and the search input.
 * @param {{gallery: HTMLElement, filters: HTMLElement, search: HTMLInputElement, themeToggles: HTMLElement}} els - Element references
 * @param {{group: string, query: string}} state - Reactive state object
 * @param {Function} renderFn - Callback to re-render filters and gallery (e.g. () => { renderFilters(...); renderGallery(...); })
 */
export function bind(els, state, renderFn) {
  document.addEventListener("click", function (event) {
    var filter = event.target.closest("[data-filter]");
    if (filter) {
      state.group = filter.dataset.filter;
      renderFn();
      return;
    }

    var toggleButton = event.target.closest("[data-toggle]");
    if (toggleButton) {
      var group = toggleButton.closest("[data-toggle-group]");
      if (group) {
        group.querySelectorAll("[data-toggle]").forEach(function (btn) {
          btn.classList.remove("active");
        });
        toggleButton.classList.add("active");
      }
      return;
    }

    var segButton = event.target.closest(".seg button");
    if (segButton && !segButton.matches("[data-filter]")) {
      var seg = segButton.closest(".seg");
      seg.querySelectorAll("button").forEach(function (btn) {
        btn.classList.remove("active");
      });
      segButton.classList.add("active");
      return;
    }

    var stepBtn = event.target.closest("[data-step]");
    if (stepBtn) {
      stepValue(stepBtn);
      return;
    }

    var passwordBtn = event.target.closest("[data-password-toggle]");
    if (passwordBtn) {
      togglePassword(passwordBtn);
      return;
    }

    var switchEl = event.target.closest(".switch");
    if (switchEl) {
      switchEl.classList.toggle("active");
      switchEl.setAttribute(
        "aria-checked",
        switchEl.classList.contains("active") ? "true" : "false",
      );
      return;
    }

    var checkEl = event.target.closest(".check");
    if (checkEl) {
      setCheck(checkEl, !checkEl.classList.contains("active"));
      return;
    }

    var radioEl = event.target.closest(".radio");
    if (radioEl) {
      setRadio(radioEl);
      return;
    }

    var day = event.target.closest(".day,.d");
    if (day) {
      selectDay(day);
      return;
    }

    var star = event.target.closest(".rating span");
    if (star) {
      setRating(star);
      return;
    }

    var bar = event.target.closest(".bar-chart span");
    if (bar) {
      bar.parentElement.querySelectorAll("span").forEach(function (item) {
        item.classList.remove("active");
      });
      bar.classList.add("active");
      return;
    }

    var dropzone = event.target.closest(".dropzone");
    if (dropzone) {
      dropzone.classList.toggle("active");
      return;
    }

    var copyBtn = event.target.closest("[data-copy]");
    if (copyBtn) {
      var card = copyBtn.closest(".doc-card");
      if (card) {
        var preview = card.querySelector(".preview");
        if (preview) {
          copyText(preview.innerHTML, copyBtn);
        }
      }
      return;
    }

    var dismissBtn = event.target.closest("[data-dismiss]");
    if (dismissBtn) {
      dismissFrom(dismissBtn);
      return;
    }

    if (event.target.closest("#copyAll")) {
      var cards = els.gallery ? els.gallery.querySelectorAll(".preview") : [];
      var text = Array.from(cards)
        .map(function (preview) {
          return "<!-- component -->\n" + preview.innerHTML;
        })
        .join("\n\n");
      copyText(text, document.getElementById("copyAll"));
    }

    var demoButton = event.target.closest(".btn");
    if (demoButton) pulseButton(demoButton);

    var tabLine = event.target.closest(".tab-line button");
    if (tabLine) {
      tabLine
        .closest(".tab-line")
        .querySelectorAll("button")
        .forEach(function (btn) {
          btn.classList.remove("act");
        });
      tabLine.classList.add("act");
      return;
    }

    var tabPill = event.target.closest(".tab-pill button");
    if (tabPill) {
      tabPill
        .closest(".tab-pill")
        .querySelectorAll("button")
        .forEach(function (btn) {
          btn.classList.remove("act");
        });
      tabPill.classList.add("act");
      return;
    }

    var tabIcon = event.target.closest(".tab-icon button");
    if (tabIcon) {
      tabIcon
        .closest(".tab-icon")
        .querySelectorAll("button")
        .forEach(function (btn) {
          btn.classList.remove("act");
        });
      tabIcon.classList.add("act");
      return;
    }

    var tabV = event.target.closest(".tab-v button");
    if (tabV) {
      tabV
        .closest(".tab-v")
        .querySelectorAll("button")
        .forEach(function (btn) {
          btn.classList.remove("act");
        });
      tabV.classList.add("act");
      return;
    }

    var themeBtn = event.target.closest("[data-theme-key]");
    if (themeBtn) {
      // Dynamically import to avoid circular dependency
      import("./themes.js").then(function (mod) {
        mod.applyTheme(themeBtn.dataset.themeKey);
        import("./renderer.js").then(function (rend) {
          rend.renderThemeToggles(mod.themes, els.themeToggles);
        });
      });
      return;
    }
  });

  if (els.search) {
    els.search.addEventListener("input", function () {
      state.query = els.search.value;
      renderFn();
    });
  }

  document.addEventListener("input", function (event) {
    var range = event.target.closest('input[type="range"]');
    if (!range) return;
    var label =
      range.parentElement && range.parentElement.querySelector(".tiny");
    if (label) label.textContent = range.value + "%";
  });
}
