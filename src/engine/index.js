// ── Helpers ──────────────────────────────────────────────────
export {
  icon,
  button,
  chip,
  toggle,
  escapeHtml,
  normalize,
  refreshIcons,
} from "./helpers.js";

// ── State ────────────────────────────────────────────────────
export { state, groups, filteredItems } from "./state.js";

// ── Themes ───────────────────────────────────────────────────
export { themes, applyTheme, getSavedTheme } from "./themes.js";

// ── Renderer ─────────────────────────────────────────────────
export {
  renderFilters,
  renderCard,
  renderGallery,
  renderThemeToggles,
} from "./renderer.js";

// ── Interactions ─────────────────────────────────────────────
export {
  bind,
  setCheck,
  setRadio,
  pulseButton,
  dismissFrom,
  stepValue,
  togglePassword,
  selectDay,
  setRating,
  hydrateInteractive,
} from "./interactions.js";

// ── Init ─────────────────────────────────────────────────────
import { state, groups, filteredItems } from "./state.js";
import { themes, applyTheme, getSavedTheme } from "./themes.js";
import {
  renderFilters,
  renderGallery,
  renderThemeToggles,
} from "./renderer.js";
import { bind, hydrateInteractive } from "./interactions.js";

/**
 * Initializes the gallery viewer by wiring up all DOM elements,
 * rendering filters, gallery, and theme toggles, and binding events.
 *
 * Expects the following DOM elements to exist:
 * - #gallery    — container for the component cards
 * - #filters    — container for filter buttons
 * - #search     — search input field
 * - #themeToggles — container for theme buttons
 *
 * Also expects `galleryItems` to be set on `window` (or passed via a global).
 *
 * @param {Array} [items] - Gallery items array. If omitted, reads from window.galleryItems.
 */
export function init(items) {
  var allItems = items || window.galleryItems || [];

  var els = {
    gallery: document.getElementById("gallery"),
    filters: document.getElementById("filters"),
    search: document.getElementById("search"),
    themeToggles: document.getElementById("themeToggles"),
  };

  // Apply saved theme on start
  var saved = getSavedTheme();
  applyTheme(saved);

  function render() {
    var groupList = groups(allItems);
    renderFilters(groupList, state, els.filters);
    var filtered = filteredItems(allItems);
    renderGallery(filtered, els.gallery);
  }

  render();
  renderThemeToggles(themes, els.themeToggles);
  bind(els, state, render);
  hydrateInteractive(document);

  // Self-test assertions (non-blocking)
  runTests(allItems, els);
}

function runTests(allItems, els) {
  try {
    console.assert(allItems.length >= 120, "gallery has many items");
    console.assert(
      document.querySelectorAll(".doc-card").length === allItems.length,
      "all items render initially"
    );
    console.assert(
      document.querySelectorAll("[data-filter]").length > 10,
      "filters render"
    );
  } catch (e) {
    // Silently ignore test failures in production
  }
}
