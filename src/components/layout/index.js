import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Welcome panel",
    group: "Layout",
    notes: "Stats + action",
    code: `<div class="stack"><div class="row between"><div><div class="strong">Welcome back, Hugo</div><div class="text">Compact workspace overview</div></div>${button("Start", "plus", "primary")}</div><div class="stat-grid"><div class="stat"><strong>12</strong><span class="tiny">Projects</span></div><div class="stat"><strong>4</strong><span class="tiny">Tasks</span></div><div class="stat"><strong>8</strong><span class="tiny">Messages</span></div></div></div>`,
  },
  {
    name: "Setup pair",
    group: "Layout",
    notes: "Two compact panels",
    code: `<div class="grid2"><div class="stack"><div class="strong">Welcome back</div><div class="text">Resume work or finish setup.</div><div class="row">${button("New", "plus", "primary")}${button("Docs", "book-open")}</div></div><div class="sidebox"><div class="row between"><strong class="tiny">Setup</strong>${icon("chevron-right")}</div><div class="text">Profile, data, team.</div></div></div>`,
  },
  {
    name: "Compact card",
    group: "Layout",
    notes: "Simple object",
    code: `<div class="stack"><div class="row between"><strong class="strong">Project Alpha</strong>${chip("Active", "blue")}</div><div class="text">Last edited today</div></div>`,
  },
  {
    name: "Kanban mini",
    group: "Layout",
    notes: "Two columns",
    code: `<div class="grid2"><div class="stack">${chip("Todo")}${chip("Task A")}</div><div class="stack">${chip("Done", "green")}${chip("Task B")}</div></div>`,
  },
  {
    name: "Dashboard grid",
    group: "Layout",
    notes: "Four stat cards",
    code: `<div class="grid2"><div class="sidebox"><div class="strong">$12k</div><div class="tiny">Revenue</div></div><div class="sidebox"><div class="strong">245</div><div class="tiny">Users</div></div><div class="sidebox"><div class="strong">89%</div><div class="tiny">Retention</div></div><div class="sidebox"><div class="strong">32</div><div class="tiny">Active</div></div></div>`,
  },
  {
    name: "Sidebar layout",
    group: "Layout",
    notes: "Nav + content",
    code: `<div class="row" style="align-items:stretch"><div class="stack" style="width:52px;flex:none;padding:4px;border:1px solid var(--line);border-radius:5px;align-items:center">${icon("layout-dashboard")}${icon("list-todo")}${icon("settings")}</div><div class="stack" style="flex:1"><div class="strong">Dashboard</div><div class="text">Your workspace overview with compact metrics.</div></div></div>`,
  },
  {
    name: "Header bar",
    group: "Layout",
    notes: "Top app bar",
    code: `<div class="row between" style="padding:4px 0"><div class="row"><strong class="strong">Tasktok</strong><span class="v-divider"></span><span class="text">Overview</span></div><div class="row">${icon("bell")}<div class="avatar" style="width:18px;height:18px;font-size:8px">HB</div></div></div>`,
  },
];
