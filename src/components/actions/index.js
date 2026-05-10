import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Quick actions",
    group: "Actions",
    notes: "Inline commands",
    code: `<div class="row wrap">${button("New", "plus", "primary")}${button("Duplicate", "copy")}${button("Share", "share-2")}${button("Delete", "trash-2", "danger")}</div>`,
  },
  {
    name: "Grouped filters",
    group: "Actions",
    notes: "Segmented control",
    code: toggle(["All", "Active", "Draft", "Archived"], 0),
  },
  {
    name: "Toolbar",
    group: "Actions",
    notes: "Icon actions",
    code: `<div class="row wrap"><button class="btn">${icon("bold")}</button><button class="btn">${icon("italic")}</button><button class="btn">${icon("link")}</button><button class="btn">${icon("code")}</button></div>`,
  },
  {
    name: "Bulk actions",
    group: "Actions",
    notes: "Select all + action",
    code: `<div class="row between"><label class="row"><input type="checkbox" checked><span class="text">3 selected</span></label><div class="row">${button("Archive")}${button("Delete", "trash-2", "danger")}</div></div>`,
  },
  {
    name: "Sort dropdown",
    group: "Actions",
    notes: "Order control",
    code: `<div class="row between"><span class="text">Sort by</span><div class="seg"><button class="active" type="button">Name</button><button type="button">Date</button></div></div>`,
  },
  {
    name: "Filter chips",
    group: "Actions",
    notes: "Active filters",
    code: `<div class="row wrap">${chip("Status: Active", "blue")}${chip("Priority: High")}${chip("Team: Design")}<button class="btn ghost">Clear all</button></div>`,
  },
];
