// ── Component groups ─────────────────────────────────────────
// Each group file exports an array of { name, group, notes, code } objects.
import layoutItems from "./components/layout/index.js";
import primitivesItems from "./components/primitives/index.js";
import formsItems from "./components/forms/index.js";
import actionsItems from "./components/actions/index.js";
import navigationItems from "./components/navigation/index.js";
import dataItems from "./components/data/index.js";
import feedbackItems from "./components/feedback/index.js";
import overlaysItems from "./components/overlays/index.js";
import listsItems from "./components/lists/index.js";
import chartsItems from "./components/charts/index.js";
import mediaItems from "./components/media/index.js";
import calendarsItems from "./components/calendars/index.js";
import settingsItems from "./components/settings/index.js";
import surfacesItems from "./components/surfaces/index.js";
import cardGroupsItems from "./components/card-groups/index.js";
import developerItems from "./components/developer/index.js";

/**
 * Combined gallery items from all component groups.
 * Each item: { name: string, group: string, notes: string, code: string, frame?: string }
 */
export const galleryItems = [].concat(
  layoutItems,
  primitivesItems,
  formsItems,
  actionsItems,
  navigationItems,
  dataItems,
  feedbackItems,
  overlaysItems,
  listsItems,
  chartsItems,
  mediaItems,
  calendarsItems,
  settingsItems,
  surfacesItems,
  cardGroupsItems,
  developerItems,
);

// ── Engine API ────────────────────────────────────────────────
import {
  icon,
  button,
  chip,
  toggle,
  escapeHtml,
  normalize,
  refreshIcons,
  state,
  groups,
  filteredItems,
  themes,
  applyTheme,
  getSavedTheme,
  renderFilters,
  renderCard,
  renderGallery,
  renderThemeToggles,
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
  init,
} from "./engine/index.js";

export {
  icon,
  button,
  chip,
  toggle,
  escapeHtml,
  normalize,
  refreshIcons,
  state,
  groups,
  filteredItems,
  themes,
  applyTheme,
  getSavedTheme,
  renderFilters,
  renderCard,
  renderGallery,
  renderThemeToggles,
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
  init,
};

// ── Backward compat ──────────────────────────────────────────
/**
 * CompactGalleryUI — for backward compatibility with the original IIFE API.
 */
export const CompactGalleryUI = {
  hydrate: hydrateInteractive,
  refreshIcons: refreshIcons,
};
