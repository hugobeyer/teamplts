import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Status bar",
    group: "Feedback",
    notes: "State + refresh",
    code: `<div class="row between"><div class="row">${chip("Live", "green")}<span class="text">API healthy</span></div>${button("Check", "refresh-cw")}</div>`,
  },
  {
    name: "Notification",
    group: "Feedback",
    notes: "Info notice",
    code: `<div class="row between"><div class="row">${chip("Info", "blue")}<span class="text">Deployment completed</span></div>${button("Dismiss", "x", "ghost")}</div>`,
  },
  {
    name: "Progress",
    group: "Feedback",
    notes: "Usage meter",
    code: `<div class="stack"><div class="row between"><div class="strong">Storage</div><div class="tiny">64%</div></div><div class="progress"><span style="width:64%"></span></div></div>`,
  },
  {
    name: "Empty state",
    group: "Feedback",
    notes: "Centered CTA",
    code: `<div class="stack" style="place-items:center;text-align:center">${chip("Inbox")}<div class="strong">No items yet</div><div class="text">Create your first item</div>${button("Create", "plus", "primary")}</div>`,
  },
  {
    name: "Toast",
    group: "Feedback",
    notes: "Inline toast",
    code: `<div class="row between"><div class="row">${chip("Saved", "green")}<span class="text">Changes synced</span></div><button class="btn ghost">x</button></div>`,
  },
  {
    name: "Danger confirm",
    group: "Feedback",
    notes: "Destructive action",
    code: `<div class="stack"><div class="strong">Delete item?</div><div class="text">This action cannot be undone.</div><div class="row">${button("Delete", "trash-2", "danger")}${button("Cancel")}</div></div>`,
  },
  {
    name: "Announcement",
    group: "Feedback",
    notes: "Release note",
    code: `<div class="stack"><div class="strong">New release</div><div class="text">Version 2.1 is now available.</div>${button("Read notes", "arrow-right", "primary")}</div>`,
  },
  {
    name: "Skeleton rows",
    group: "Feedback",
    notes: "Loading state",
    code: `<div class="stack"><span class="skeleton" style="width:80%"></span><span class="skeleton" style="width:58%"></span><span class="skeleton" style="width:92%"></span></div>`,
  },
  {
    name: "Spinner row",
    group: "Feedback",
    notes: "Tiny loading",
    code: `<div class="row">${icon("loader")}<span class="text">Loading workspace...</span></div>`,
  },
  {
    name: "Offline state",
    group: "Feedback",
    notes: "Status line",
    code: `<div class="row between"><span class="row">${icon("wifi-off")}<span class="text">Offline mode</span></span>${chip("Local", "yellow")}</div>`,
  },
  {
    name: "Queued toast",
    group: "Feedback",
    notes: "Neutral toast",
    code: `<div class="callout">${icon("clock")}<span class="text">3 actions queued for sync.</span>${button("View")}</div>`,
  },
  {
    name: "Permission denied",
    group: "Feedback",
    notes: "Access message",
    code: `<div class="callout bad">${icon("lock")}<span class="text">You need admin access.</span></div>`,
  },
  {
    name: "Inline help",
    group: "Feedback",
    notes: "No border helper",
    code: `<div class="row">${icon("circle-help")}<span class="text">Use compact fields for dense panels.</span></div>`,
  },
  {
    name: "Rating row",
    group: "Feedback",
    notes: "Visual score",
    code: `<div class="row between"><span class="text">Satisfaction</span><span class="rating" data-rating="4"><span>*</span><span>*</span><span>*</span><span>*</span><span>*</span></span></div>`,
  },
  {
    name: "Confirmation dialog",
    group: "Feedback",
    notes: "Yes/no prompt",
    code: `<div class="panel"><div class="strong">Confirm changes?</div><div class="text">This will update 12 records.</div><div class="row">${button("Confirm", "check", "primary")}${button("Cancel")}</div></div>`,
  },
  {
    name: "Error boundary",
    group: "Feedback",
    notes: "Crash message",
    code: `<div class="callout bad">${icon("circle-alert")}<span class="text">Something went wrong.</span>${button("Reload", "refresh-cw")}</div>`,
  },
  {
    name: "Upgrade prompt",
    group: "Feedback",
    notes: "Plan upgrade CTA",
    code: `<div class="callout warn">${icon("zap")}<span class="text">You have used 85% of your plan.</span>${button("Upgrade", "arrow-right", "primary")}</div>`,
  },
  {
    name: "Trial banner",
    group: "Feedback",
    notes: "Expiring soon",
    code: `<div class="row between" style="padding:4px 6px;background:#fffaeb;border-radius:5px"><span class="row">${icon("clock")}<span class="text">Trial ends in 3 days</span></span>${button("Subscribe", "arrow-right", "primary")}</div>`,
  },
  {
    name: "Maintenance notice",
    group: "Feedback",
    notes: "Scheduled downtime",
    code: `<div class="row between"><div class="row">${icon("wrench")}<span class="text">Maintenance at 2AM UTC</span></div>${chip("Scheduled", "yellow")}</div>`,
  },
  {
    name: "Empty inbox",
    group: "Feedback",
    notes: "No messages",
    code: `<div class="stack" style="place-items:center;text-align:center">${icon("inbox")}<div class="text">No new notifications</div><div class="tiny">You are all caught up!</div></div>`,
  },
];
