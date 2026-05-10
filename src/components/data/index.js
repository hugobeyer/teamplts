import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "User row",
    group: "Data",
    notes: "Identity row",
    code: `<div class="row between"><div class="row"><div class="avatar">HB</div><div><div class="strong">Hugo Beyer</div><div class="text">Tech Artist</div></div></div>${button("Open", "arrow-right")}</div>`,
  },
  {
    name: "Usage stats",
    group: "Data",
    notes: "Two metrics",
    code: `<div class="grid2"><div><div class="strong">12</div><div class="tiny">Projects</div></div><div><div class="strong">84%</div><div class="tiny">Usage</div></div></div>`,
  },
  {
    name: "Shortcuts",
    group: "Data",
    notes: "Keyboard rows",
    code: `<div class="stack"><div class="row between"><span class="text">Open search</span><span class="kbd">Ctrl K</span></div><div class="row between"><span class="text">Save</span><span class="kbd">Ctrl S</span></div></div>`,
  },
  {
    name: "Billing mini",
    group: "Data",
    notes: "Plan summary",
    code: `<div class="stack"><div class="row between"><span class="text">Plan</span><strong>Pro</strong></div><div class="row between"><span class="text">Usage</span><strong>72%</strong></div>${button("Manage", "arrow-right", "primary")}</div>`,
  },
  {
    name: "Activity feed",
    group: "Data",
    notes: "Stacked events",
    code: `<div class="stack"><div class="text">Page updated - 2m ago</div><div class="divider"></div><div class="text">New comment - 10m ago</div><div class="divider"></div><div class="text">Build finished - 1h ago</div></div>`,
  },
  {
    name: "Mini table",
    group: "Data",
    notes: "Two rows",
    code: `<div class="stack"><div class="row between"><strong class="tiny">Landing page</strong><span class="text">Now</span></div><div class="divider"></div><div class="row between"><strong class="tiny">Analytics</strong><span class="text">1h</span></div></div>`,
  },
  {
    name: "Team chips",
    group: "Data",
    notes: "Role chips",
    code: `<div class="row wrap">${chip("Admin")}${chip("Editor")}${chip("Viewer")}<button class="btn">+</button></div>`,
  },
  {
    name: "Metric row",
    group: "Data",
    notes: "Metric + delta",
    code: `<div class="row between"><div><div class="strong">$12,430</div><div class="text">Revenue</div></div>${chip("+12%", "green")}</div>`,
  },
  {
    name: "Task item",
    group: "Data",
    notes: "Checkbox row",
    code: `<label class="row"><input type="checkbox"><span class="text">Review onboarding flow</span></label>`,
  },
  {
    name: "Calendar mini",
    group: "Data",
    notes: "Schedule chips",
    code: `<div class="stack">${chip("Design review - 2PM")}${chip("Client sync - Tomorrow")}${chip("Launch - Friday")}</div>`,
  },
  {
    name: "Table with sort",
    group: "Data",
    notes: "Sortable columns",
    code: `<div class="stack"><div class="row between" style="padding:3px 0;border-bottom:1px solid var(--line)"><strong class="tiny">Name ▲</strong><strong class="tiny">Status</strong><strong class="tiny">Date</strong></div><div class="row between" style="padding:3px 0"><span class="text">API</span>${chip("Live", "green")}<span class="tiny">Now</span></div><div class="row between" style="padding:3px 0"><span class="text">Web</span>${chip("Draft")}<span class="tiny">1h</span></div></div>`,
  },
  {
    name: "Status table",
    group: "Data",
    notes: "Service status",
    code: `<div class="list"><div class="list-row"><span class="row"><span class="status-dot green"></span><span class="text">API Server</span></span><span class="tiny">99.9%</span></div><div class="list-row"><span class="row"><span class="status-dot green"></span><span class="text">Database</span></span><span class="tiny">99.8%</span></div><div class="list-row"><span class="row"><span class="status-dot yellow"></span><span class="text">Queue</span></span><span class="tiny">98.2%</span></div></div>`,
  },
  {
    name: "User table",
    group: "Data",
    notes: "Member rows",
    code: `<div class="list"><div class="list-row"><div class="row"><div class="avatar" style="width:16px;height:16px;font-size:7px">AL</div><span class="text">Ana Lima</span></div>${chip("Online", "green")}</div><div class="list-row"><div class="row"><div class="avatar" style="width:16px;height:16px;font-size:7px">JS</div><span class="text">Joao Silva</span></div>${chip("Away", "yellow")}</div><div class="list-row"><div class="row"><div class="avatar" style="width:16px;height:16px;font-size:7px">MT</div><span class="text">Maria Torres</span></div>${chip("Offline")}</div></div>`,
  },
];
