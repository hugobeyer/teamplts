/**
 * Available themes for the gallery.
 */
export const themes = [
  { key: "clean", label: "Clean" },
  { key: "graphite", label: "Graphite" },
  { key: "dracula", label: "Dracula" },
  { key: "davinci", label: "Davinci" },
  { key: "casual", label: "Casual" },
];

/**
 * Applies a theme by setting the data-theme attribute on the document
 * and persisting to localStorage.
 * @param {string} key - Theme key to apply
 */
export function applyTheme(key) {
  document.documentElement.setAttribute("data-theme", key);
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("gallery-theme", key);
  }
  window.__galleryTheme = key;
}

/**
 * Returns the saved theme key from localStorage, defaulting to "clean".
 * @returns {string} Theme key
 */
export function getSavedTheme() {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("gallery-theme") || "clean";
  }
  return "clean";
}
