import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Inline setting",
    group: "Settings",
    notes: "Label + state",
    code: `<div class="row between"><div><div class="strong">Auto save</div><div class="text">Save while editing</div></div><button class="btn primary">On</button></div>`,
  },
  {
    name: "Settings pair",
    group: "Settings",
    notes: "Two settings",
    code: `<div class="stack"><div class="row between"><span class="text">Auto save</span><button class="btn primary">On</button></div><div class="divider"></div><div class="row between"><span class="text">Compact mode</span><button class="btn">Off</button></div></div>`,
  },
  {
    name: "Role access",
    group: "Settings",
    notes: "Permissions",
    code: `<div class="stack"><div class="row between"><span class="text">Admin</span><button class="btn primary">Edit</button></div><div class="row between"><span class="text">Viewer</span><button class="btn">Read</button></div></div>`,
  },
  {
    name: "Grouped visibility",
    group: "Settings",
    notes: "Two-state toggle",
    code: `<div class="row between"><span class="text">Header</span>${toggle(["Hide", "Show"], 1)}</div>`,
  },
  {
    name: "Theme select",
    group: "Settings",
    notes: "Theme switcher",
    code: `<div class="row between"><span class="text">Theme</span><div class="seg"><button class="active" type="button">Light</button><button type="button">Dark</button></div></div>`,
  },
  {
    name: "Privacy toggle",
    group: "Settings",
    notes: "Switch row",
    code: `<div class="row between"><div><div class="strong">Analytics</div><div class="text">Share usage data</div></div><span class="switch active"><span></span></span></div>`,
  },
  {
    name: "Notif prefs",
    group: "Settings",
    notes: "Toggle list",
    code: `<div class="list"><div class="list-row"><span class="text">Email digests</span><span class="switch active"><span></span></span></div><div class="list-row"><span class="text">Push alerts</span><span class="switch"><span></span></span></div></div>`,
  },
];
