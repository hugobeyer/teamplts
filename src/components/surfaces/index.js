import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Panel card",
    group: "Surfaces",
    notes: "Border needed: contained panel",
    code: `<div class="panel"><div class="row between"><strong class="tiny">Workspace</strong>${chip("Live", "green")}</div><div class="text">A bounded surface with its own content.</div></div>`,
  },
  {
    name: "Nested plain row",
    group: "Surfaces",
    notes: "No inner border",
    code: `<div class="panel"><div class="soft-row row between"><span class="text">Header</span>${chip("Visible", "green")}</div><div class="soft-row row between"><span class="text">Footer</span>${chip("Hidden")}</div></div>`,
  },
  {
    name: "Metric panel",
    group: "Surfaces",
    notes: "Border groups metrics",
    code: `<div class="panel"><div class="grid3"><div><strong>42</strong><div class="tiny">Tasks</div></div><div><strong>8</strong><div class="tiny">Late</div></div><div><strong>91%</strong><div class="tiny">SLA</div></div></div></div>`,
  },
  {
    name: "Split panel",
    group: "Surfaces",
    notes: "Panel + divider",
    code: `<div class="panel"><div class="row"><div><div class="strong">Basic</div><div class="text">$12/mo</div></div><span class="v-divider"></span><div><div class="strong">Pro</div><div class="text">$24/mo</div></div></div></div>`,
  },
  {
    name: "Plain summary",
    group: "Surfaces",
    notes: "No panel needed",
    code: `<div class="row between"><div><div class="strong">Project Alpha</div><div class="text">Updated today</div></div>${chip("Active", "blue")}</div>`,
  },
  {
    name: "Info callout",
    group: "Surfaces",
    notes: "Soft fill no border",
    code: `<div class="callout">${icon("info")}<span class="text">This setting applies to new widgets only.</span></div>`,
  },
  {
    name: "Success callout",
    group: "Surfaces",
    notes: "Semantic fill",
    code: `<div class="callout good">${icon("check")}<span class="text">Changes saved successfully.</span></div>`,
  },
  {
    name: "Warning callout",
    group: "Surfaces",
    notes: "Semantic fill",
    code: `<div class="callout warn">${icon("triangle-alert")}<span class="text">Billing limit almost reached.</span></div>`,
  },
  {
    name: "Error callout",
    group: "Surfaces",
    notes: "Semantic fill",
    code: `<div class="callout bad">${icon("circle-alert")}<span class="text">Sync failed. Retry required.</span></div>`,
  },
  {
    name: "Feature highlight",
    group: "Surfaces",
    notes: "Panel with CTA",
    code: `<div class="panel" style="background:#eff6ff;border-color:#b2ccff"><div class="strong">New: Dark mode</div><div class="text">Switch themes in settings.</div><div class="row">${button("Try now", "sparkles", "primary")}</div></div>`,
  },
];
