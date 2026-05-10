import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Primary button",
    group: "Primitives",
    notes: "Needs border as control",
    code: button("Save", "save", "primary"),
  },
  {
    name: "Secondary button",
    group: "Primitives",
    notes: "Outlined control",
    code: button("Preview", "eye"),
  },
  {
    name: "Ghost button",
    group: "Primitives",
    notes: "No border action",
    code: button("Cancel", "x", "ghost"),
  },
  {
    name: "Icon buttons",
    group: "Primitives",
    notes: "Toolbar controls",
    code: `<div class="row wrap"><button class="btn icon-only">${icon("plus")}</button><button class="btn icon-only">${icon("settings")}</button><button class="btn icon-only">${icon("trash-2")}</button></div>`,
  },
  {
    name: "Chip tones",
    group: "Primitives",
    notes: "No border tags",
    code: `<div class="row wrap">${chip("Default")}${chip("Info", "blue")}${chip("Good", "green")}${chip("Warn", "yellow")}${chip("Bad", "red")}</div>`,
  },
  {
    name: "Dark badge",
    group: "Primitives",
    notes: "Filled label",
    code: `<div class="row">${chip("Production", "dark")}<span class="text">Stable channel</span></div>`,
  },
  {
    name: "Text link",
    group: "Primitives",
    notes: "No border",
    code: `<div class="row between"><span class="text">Documentation</span><a class="pill-link" href="#">Open</a></div>`,
  },
  {
    name: "Divider pair",
    group: "Primitives",
    notes: "Separator only",
    code: `<div class="row"><span class="text">Left</span><span class="v-divider"></span><span class="text">Right</span></div>`,
  },
  {
    name: "Avatar stack",
    group: "Primitives",
    notes: "Border only between overlaps",
    code: `<div class="row between"><div class="avatar-stack"><div class="avatar">HB</div><div class="avatar">MR</div><div class="avatar">JS</div></div><span class="tiny">+4 online</span></div>`,
  },
  {
    name: "Checkbox visual",
    group: "Primitives",
    notes: "Tiny state control",
    code: `<div class="row"><span class="check active">${icon("check")}</span><span class="text">Selected item</span></div>`,
  },
  {
    name: "Radio visual",
    group: "Primitives",
    notes: "Tiny choice control",
    code: `<div class="row"><span class="radio active"></span><span class="text">Primary option</span></div>`,
  },
  {
    name: "Switch visual",
    group: "Primitives",
    notes: "Binary control",
    code: `<div class="row between"><span class="text">Notifications</span><span class="switch active"><span></span></span></div>`,
  },
  {
    name: "Button sizes",
    group: "Primitives",
    notes: "Size variants",
    code: `<div class="row wrap"><button class="btn" style="font-size:9px;min-height:18px;padding:0 5px">Small</button><button class="btn">Default</button><button class="btn" style="font-size:12px;min-height:26px;padding:0 10px">Large</button></div>`,
  },
  {
    name: "Button states",
    group: "Primitives",
    notes: "State variants",
    code: `<div class="row wrap">${button("Normal")}${button("Primary", "check", "primary")}<button class="btn active" type="button">Active</button><button class="btn" disabled type="button">Disabled</button></div>`,
  },
  {
    name: "Status dots",
    group: "Primitives",
    notes: "Semantic indicators",
    code: `<div class="row wrap"><span class="status-dot green"></span><span class="text">Online</span><span class="status-dot yellow"></span><span class="text">Away</span><span class="status-dot red"></span><span class="text">Offline</span></div>`,
  },
  {
    name: "Badge count",
    group: "Primitives",
    notes: "Number badges",
    code: `<div class="row wrap"><span class="badge-count">3</span><span class="badge-count">12</span><span class="badge-count ghost">99+</span><span class="badge-count" style="background:var(--bad)">!</span></div>`,
  },
  {
    name: "Avatar with status",
    group: "Primitives",
    notes: "Online ring",
    code: `<div class="row wrap"><div class="avatar-badge"><div class="avatar">HB</div><span class="dot green"></span></div><div class="avatar-badge"><div class="avatar">AL</div><span class="dot yellow"></span></div><div class="avatar-badge"><div class="avatar">MT</div><span class="dot red"></span></div></div>`,
  },
  {
    name: "Typography scale",
    group: "Primitives",
    notes: "Text sizes",
    code: `<div class="stack"><span class="strong">Heading (12px)</span><span class="text">Body (11px)</span><span class="tiny">Caption (10px)</span><span style="font-size:9px;color:var(--muted)">Meta (9px)</span></div>`,
  },
  {
    name: "Icon + label",
    group: "Primitives",
    notes: "Decorated tags",
    code: `<div class="row wrap"><span class="chip">${icon("zap")}Pro</span><span class="chip blue">${icon("check")}Verified</span><span class="chip green">${icon("trending-up")}Growing</span></div>`,
  },
  {
    name: "Toolbar dark",
    group: "Primitives",
    notes: "Dark icons",
    code: `<div class="row wrap" style="background:#1f2937;border-radius:5px;padding:4px"><button class="btn" style="background:transparent;border-color:transparent;color:#fff">${icon("bold")}</button><button class="btn" style="background:transparent;border-color:transparent;color:#fff">${icon("italic")}</button><button class="btn" style="background:transparent;border-color:transparent;color:#fff">${icon("underline")}</button></div>`,
  },
];
