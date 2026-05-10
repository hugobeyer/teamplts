/**
 * Helper functions for building component HTML strings.
 * Converted from IIFE to ES modules.
 */

/**
 * Returns a Lucide icon element.
 * @param {string} name - The icon name (e.g. "copy", "check", "plus")
 * @returns {string} HTML string for the icon
 */
export function icon(name) {
  return '<i data-lucide="' + name + '"></i>';
}

/**
 * Returns a button HTML string.
 * @param {string} label - Button text
 * @param {string} [iconName] - Optional icon name
 * @param {string} [variant] - Optional CSS class variant
 * @returns {string} HTML string
 */
export function button(label, iconName, variant) {
  return (
    '<button class="btn ' +
    (variant || "") +
    '" type="button" data-demo-button' +
    (iconName === "x" ? " data-dismiss" : "") +
    ">" +
    (iconName ? icon(iconName) : "") +
    label +
    "</button>"
  );
}

/**
 * Returns a chip/tag span HTML string.
 * @param {string} label - Chip text
 * @param {string} [tone] - Optional tone class (e.g. "blue", "green")
 * @returns {string} HTML string
 */
export function chip(label, tone) {
  return '<span class="chip ' + (tone || "") + '">' + label + "</span>";
}

/**
 * Returns a segmented control / toggle group HTML string.
 * @param {string[]} labels - Array of button labels
 * @param {number} [active] - Index of the active button
 * @returns {string} HTML string
 */
export function toggle(labels, active) {
  return (
    '<div class="seg" data-toggle-group>' +
    labels
      .map(function (label, index) {
        return (
          '<button class="' +
          (index === active ? "active" : "") +
          '" type="button" data-toggle>' +
          label +
          "</button>"
        );
      })
      .join("") +
    "</div>"
  );
}

/**
 * Escapes HTML special characters.
 * @param {*} value - Value to escape
 * @returns {string} Escaped string
 */
export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Normalizes a value to lowercase for comparison.
 * @param {*} value - Value to normalize
 * @returns {string} Lowercased string
 */
export function normalize(value) {
  return String(value || "").toLowerCase();
}

/**
 * Refreshes Lucide icons on the page if the library is available.
 */
export function refreshIcons() {
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }
}
