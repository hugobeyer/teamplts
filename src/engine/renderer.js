import { icon, escapeHtml, refreshIcons } from "./helpers.js";
import { hydrateInteractive } from "./interactions.js";

/**
 * Renders filter buttons into the given container.
 * @param {string[]} groupList - Array of group names (from state.groups)
 * @param {{group: string, query: string}} currentState - Current filter state
 * @param {HTMLElement} container - DOM element to render into
 */
export function renderFilters(groupList, currentState, container) {
  container.innerHTML = groupList
    .map(function (group) {
      return (
        '<button type="button" class="' +
        (currentState.group === group ? "active" : "") +
        '" data-filter="' +
        escapeHtml(group) +
        '">' +
        escapeHtml(group) +
        "</button>"
      );
    })
    .join("");
}

/**
 * Renders a single gallery card.
 * @param {{name: string, group: string, notes: string, code: string, frame?: string}} item - Gallery item
 * @param {number} index - Index in the items array
 * @returns {string} HTML string for the card
 */
export function renderCard(item, index) {
  var frame = item.frame || (item.group === "Primitives" ? "plain" : "card");
  return (
    '<section class="doc-card" data-index="' +
    index +
    '">' +
    '<div class="doc-head"><div><div class="doc-title">' +
    escapeHtml(item.name) +
    '</div><div class="doc-meta">' +
    escapeHtml(item.group) +
    " / " +
    escapeHtml(item.notes || "") +
    "</div></div></div>" +
    '<div class="preview" data-frame="' +
    escapeHtml(frame) +
    '">' +
    item.code +
    "</div>" +
    '<div class="doc-actions"><button class="icon-btn" type="button" data-copy="' +
    index +
    '" title="Copy ' +
    escapeHtml(item.name) +
    '" aria-label="Copy ' +
    escapeHtml(item.name) +
    '">' +
    icon("copy") +
    "<span>Copy</span></button></div>" +
    "</section>"
  );
}

/**
 * Renders the full gallery of filtered items into the container.
 * Also hydrates interactive elements after rendering.
 * @param {Array} items - Filtered gallery items to render
 * @param {HTMLElement} container - DOM element to render into
 */
export function renderGallery(items, container) {
  container.innerHTML = items.map(renderCard).join("");
  hydrateInteractive(container);
}

/**
 * Renders theme toggle buttons into the given container.
 * @param {Array<{key: string, label: string}>} themeList - Available themes
 * @param {HTMLElement} container - DOM element to render into
 */
export function renderThemeToggles(themeList, container) {
  if (!container) return;
  var current = window.__galleryTheme || "clean";
  container.innerHTML = themeList
    .map(function (t) {
      return (
        '<button type="button" class="' +
        (t.key === current ? "active" : "") +
        '" data-theme-key="' +
        t.key +
        '">' +
        t.label +
        "</button>"
      );
    })
    .join("");
}
