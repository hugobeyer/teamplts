import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Mini menu",
    group: "Overlays",
    notes: "Bordered floating panel",
    code: `<div class="panel"><div class="list"><div class="list-row"><span class="row">${icon("copy")}<span class="text">Duplicate</span></span></div><div class="list-row"><span class="row">${icon("share-2")}<span class="text">Share</span></span></div><div class="list-row"><span class="row">${icon("trash-2")}<span class="text">Delete</span></span></div></div></div>`,
  },
  {
    name: "Popover header",
    group: "Overlays",
    notes: "Panel surface",
    code: `<div class="panel"><div class="row between"><strong class="tiny">Widget settings</strong>${button("Done", "check", "primary")}</div><div class="text">Choose visibility and layout.</div></div>`,
  },
  {
    name: "Tooltip sample",
    group: "Overlays",
    notes: "Filled label",
    code: `<div class="row"><button class="btn icon-only">${icon("info")}</button><span class="chip dark">This is a tooltip</span></div>`,
  },
  {
    name: "Modal footer",
    group: "Overlays",
    notes: "Actions only",
    code: `<div class="row between"><button class="btn">Cancel</button>${button("Confirm", "check", "primary")}</div>`,
  },
  {
    name: "Context actions",
    group: "Overlays",
    notes: "Menu commands",
    code: `<div class="panel"><div class="stack"><button class="btn ghost">${icon("settings")}Configure</button><button class="btn ghost">${icon("copy")}Duplicate</button><button class="btn ghost danger">${icon("trash-2")}Delete</button></div></div>`,
  },
  {
    name: "Drawer panel",
    group: "Overlays",
    notes: "Side slide",
    code: `<div class="stack" style="border:1px solid var(--line);border-radius:5px;padding:7px"><div class="row between"><strong class="tiny">Notifications</strong><button class="btn ghost">${icon("x")}</button></div><div class="text">New comment on your post</div><div class="text">Build completed</div></div>`,
  },
  {
    name: "Side panel",
    group: "Overlays",
    notes: "Detail panel",
    code: `<div class="panel"><div class="row between"><strong class="tiny">Task details</strong>${icon("x")}</div><div class="divider"></div><div class="text">Review analytics dashboard mockups. Due tomorrow.</div><div class="row">${chip("Design", "blue")}${chip("High", "red")}</div></div>`,
  },
  {
    name: "Help panel",
    group: "Overlays",
    notes: "Support popover",
    code: `<div class="panel"><div class="row">${icon("circle-help")}<strong class="tiny">Need help?</strong></div><div class="text">Search docs or contact support.</div><div class="row">${button("Docs", "book-open")}${button("Chat", "message-circle", "primary")}</div></div>`,
  },
  {
    name: "Search panel",
    group: "Overlays",
    notes: "Command search",
    code: `<div class="panel"><div class="row" style="border-bottom:1px solid var(--line);padding-bottom:4px">${icon("search")}<input class="input" placeholder="Type a command..." style="border:none;background:transparent;padding:0 4px"></div><div class="list"><div class="list-row"><span class="row">${icon("layout-dashboard")}<span class="text">Go to Dashboard</span></span><span class="kbd">Ctrl 1</span></div><div class="list-row"><span class="row">${icon("settings")}<span class="text">Open Settings</span></span><span class="kbd">Ctrl ,</span></div></div></div>`,
  },
  {
    name: "Share dialog",
    group: "Overlays",
    notes: "Share panel",
    code: `<div class="panel"><div class="strong tiny">Share project</div><input class="input" value="https://tasktok.io/share/abc123"><div class="row">${button("Copy link", "copy")}${button("Share", "share-2", "primary")}</div></div>`,
  },
];
