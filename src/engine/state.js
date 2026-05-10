import { normalize } from "./helpers.js";

/**
 * Reactive state for the gallery viewer.
 */
export const state = { group: "All", query: "" };

/**
 * Extracts unique groups from the gallery items, sorted alphabetically,
 * with "All" prepended.
 * @param {Array<{group: string}>} items - Gallery items
 * @returns {string[]} Sorted unique group names with "All" first
 */
export function groups(items) {
  return ["All"].concat(
    Array.from(
      new Set(
        items.map(function (item) {
          return item.group;
        })
      )
    ).sort()
  );
}

/**
 * Filters gallery items by the current state's group and query.
 * @param {Array<{group: string, name: string, notes: string, code: string}>} items - Full gallery items array
 * @returns {Array} Filtered items
 */
export function filteredItems(items) {
  var q = normalize(state.query);
  return items.filter(function (item) {
    var groupMatch = state.group === "All" || item.group === state.group;
    var searchText = normalize(
      [item.name, item.group, item.notes, item.code].join(" ")
    );
    return groupMatch && (!q || searchText.includes(q));
  });
}
