import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Plain list",
    group: "Lists",
    notes: "No outer border",
    code: `<div class="list"><div class="list-row"><span class="text">Landing page</span><span class="tiny">Now</span></div><div class="list-row"><span class="text">Dashboard</span><span class="tiny">1h</span></div></div>`,
  },
  {
    name: "Checklist list",
    group: "Lists",
    notes: "Rows only",
    code: `<div class="list"><div class="list-row"><span class="row"><span class="check active">${icon("check")}</span><span class="text">Copy updated</span></span>${chip("Done", "green")}</div><div class="list-row"><span class="row"><span class="check"></span><span class="text">QA pass</span></span>${chip("Todo")}</div></div>`,
  },
  {
    name: "User list",
    group: "Lists",
    notes: "Avatar rows",
    code: `<div class="list"><div class="list-row"><span class="row"><span class="avatar">AL</span><span class="text">Ana Lima</span></span>${chip("Owner", "blue")}</div><div class="list-row"><span class="row"><span class="avatar">JS</span><span class="text">Joao Silva</span></span>${chip("Editor")}</div></div>`,
  },
  {
    name: "Notification list",
    group: "Lists",
    notes: "Icon rows",
    code: `<div class="list"><div class="list-row"><span class="row">${icon("bell")}<span class="text">New request</span></span><span class="tiny">2m</span></div><div class="list-row"><span class="row">${icon("check")}<span class="text">Build passed</span></span><span class="tiny">8m</span></div></div>`,
  },
  {
    name: "Compact table",
    group: "Lists",
    notes: "Borderless rows",
    code: `<div class="list"><div class="list-row"><strong class="tiny">Name</strong><strong class="tiny">State</strong></div><div class="list-row"><span class="text">API</span>${chip("Live", "green")}</div><div class="list-row"><span class="text">Billing</span>${chip("Draft")}</div></div>`,
  },
  {
    name: "Timeline",
    group: "Lists",
    notes: "Dots not cards",
    code: `<div class="timeline"><div class="timeline-row"><div><div class="strong">Created</div><div class="text">Workspace opened</div></div></div><div class="timeline-row"><div><div class="strong">Edited</div><div class="text">Theme updated</div></div></div></div>`,
  },
  {
    name: "Key value list",
    group: "Lists",
    notes: "Dense info",
    code: `<div class="list"><div class="list-row"><span class="text">Plan</span><strong class="tiny">Pro</strong></div><div class="list-row"><span class="text">Seats</span><strong class="tiny">12</strong></div><div class="list-row"><span class="text">Region</span><strong class="tiny">BR</strong></div></div>`,
  },
  {
    name: "Audit row",
    group: "Lists",
    notes: "Status trail",
    code: `<div class="row between"><span class="row"><span class="tag-dot"></span><span class="text">Config changed</span></span><span class="tiny">Hugo / 11:42</span></div>`,
  },
  {
    name: "Tree view",
    group: "Lists",
    notes: "Nested items",
    code: `<div class="stack"><div class="row">${icon("chevron-right")}${icon("folder")}<span class="text">src</span></div><div class="row" style="padding-left:18px">${icon("file-text")}<span class="text">index.ts</span></div><div class="row" style="padding-left:18px">${icon("folder")}<span class="text">components</span></div><div class="row" style="padding-left:36px">${icon("file-text")}<span class="text">Button.tsx</span></div></div>`,
  },
  {
    name: "Accordion",
    group: "Lists",
    notes: "Expand/collapse",
    code: `<div class="stack"><div class="accordion-row"><div class="ah"><span class="strong">General settings</span>${icon("chevron-down")}</div><div class="ac">Language, timezone, region preferences.</div></div><div class="divider"></div><div class="accordion-row"><div class="ah"><span class="strong">Notifications</span>${icon("chevron-right")}</div></div></div>`,
  },
  {
    name: "Expandable row",
    group: "Lists",
    notes: "Detail expand",
    code: `<div class="list"><div class="list-row"><span class="strong">Order #1024</span><span class="tiny">2 items</span></div><div class="stack" style="padding:4px 0 4px 12px;border-bottom:1px solid #edf0f3"><div class="text">Widget Pro x 1</div><div class="text">Theme Pack x 1</div></div><div class="list-row"><span class="strong">Order #1025</span><span class="tiny">1 item</span></div></div>`,
  },
];
