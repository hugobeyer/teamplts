import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
  {
    name: "Team grid",
    group: "Card Groups",
    notes: "Avatar cards",
    code: `<div class="card-grid"><div class="info-card"><div class="row"><div class="avatar" style="width:18px;height:18px;font-size:8px">HB</div><div><div class="strong tiny">Hugo Beyer</div><div class="tiny">Design</div></div></div>${chip("Online", "green")}</div><div class="info-card"><div class="row"><div class="avatar" style="width:18px;height:18px;font-size:8px">AL</div><div><div class="strong tiny">Ana Lima</div><div class="tiny">Dev</div></div></div>${chip("Away", "yellow")}</div><div class="info-card"><div class="row"><div class="avatar" style="width:18px;height:18px;font-size:8px">JS</div><div><div class="strong tiny">Joao Silva</div><div class="tiny">QA</div></div></div>${chip("Offline")}</div><div class="info-card"><div class="row"><div class="avatar" style="width:18px;height:18px;font-size:8px">MT</div><div><div class="strong tiny">Maria Torres</div><div class="tiny">PM</div></div></div><span class="switch active"><span></span></span></div></div>`,
  },
  {
    name: "Project cards",
    group: "Card Groups",
    notes: "Status grid",
    code: `<div class="card-grid"><div class="info-card"><div class="row between"><span class="strong">Alpha</span>${chip("Live", "green")}</div><div class="text">Landing page redesign</div><div class="row"><span class="tiny">Due Fri</span></div></div><div class="info-card"><div class="row between"><span class="strong">Beta</span>${chip("Draft")}</div><div class="text">Analytics dashboard</div><div class="row"><span class="tiny">Due Mon</span></div></div></div>`,
  },
  {
    name: "Metric cards",
    group: "Card Groups",
    notes: "KPI grid",
    code: `<div class="card-grid"><div class="info-card"><div class="strong">$12,430</div><div class="row between"><span class="text">Revenue</span>${chip("+12%", "green")}</div></div><div class="info-card"><div class="strong">245</div><div class="row between"><span class="text">Users</span>${chip("+8%", "green")}</div></div><div class="info-card"><div class="strong">89%</div><div class="row between"><span class="text">Retention</span>${chip("+3%", "green")}</div></div><div class="info-card"><div class="strong">32</div><div class="row between"><span class="text">Active</span>${chip("-2%", "red")}</div></div></div>`,
  },
  {
    name: "Pricing tiers",
    group: "Card Groups",
    notes: "3 columns",
    code: `<div class="grid3"><div class="info-card"><div class="strong">Starter</div><div class="strong">$12</div><div class="tiny">/mo</div><div class="text">Basic features</div>${button("Choose")}</div><div class="info-card" style="border-color:var(--primary)"><div class="row between"><div class="strong">Pro</div>${chip("Popular", "blue")}</div><div class="strong">$24</div><div class="tiny">/mo</div><div class="text">Full access</div>${button("Subscribe", "arrow-right", "primary")}</div><div class="info-card"><div class="strong">Enterprise</div><div class="strong">$48</div><div class="tiny">/mo</div><div class="text">Custom solutions</div>${button("Contact")}</div></div>`,
  },
  {
    name: "Feature cards",
    group: "Card Groups",
    notes: "Checklist items",
    code: `<div class="card-grid"><div class="info-card"><div class="icn">${icon("zap")}</div><div class="strong">Fast</div><div class="text">Optimized performance</div></div><div class="info-card"><div class="icn">${icon("shield")}</div><div class="strong">Secure</div><div class="text">End-to-end encryption</div></div><div class="info-card"><div class="icn">${icon("users")}</div><div class="strong">Team</div><div class="text">Collaborative editing</div></div><div class="info-card"><div class="icn">${icon("bar-chart")}</div><div class="strong">Analytics</div><div class="text">Real-time insights</div></div></div>`,
  },
  {
    name: "Plan compare",
    group: "Card Groups",
    notes: "Side by side",
    code: `<div class="grid2"><div class="info-card"><div class="strong tiny">Free</div><div class="row between"><span class="text">Projects</span><span class="tiny">3</span></div><div class="row between"><span class="text">Storage</span><span class="tiny">1 GB</span></div><div class="row between"><span class="text">Team</span><span class="tiny">1</span></div>${button("Current", "check", "primary")}</div><div class="info-card" style="border-color:var(--primary)"><div class="strong tiny">Pro <span class="badge-count" style="margin-left:4px">Save 20%</span></div><div class="row between"><span class="text">Projects</span><span class="tiny">Unlimited</span></div><div class="row between"><span class="text">Storage</span><span class="tiny">50 GB</span></div><div class="row between"><span class="text">Team</span><span class="tiny">10</span></div>${button("Upgrade", "arrow-right", "primary")}</div></div>`,
  },
  {
    name: "User profile card",
    group: "Card Groups",
    notes: "Single card",
    code: `<div class="info-card"><div class="row"><div class="avatar">HB</div><div><div class="strong">Hugo Beyer</div><div class="text">hugo@tasktok.io</div></div></div><div class="row between"><span class="row">${chip("Design", "blue")}${chip("Pro")}</span>${button("View", "arrow-right")}</div></div>`,
  },
  {
    name: "Notification group",
    group: "Card Groups",
    notes: "Alert cards",
    code: `<div class="card-grid"><div class="info-card" style="background:#ecfdf3"><div class="row"><span class="event-dot green"></span><div class="strong tiny">Build passed</div></div><div class="tiny">2m ago</div></div><div class="info-card" style="background:#fffaeb"><div class="row"><span class="event-dot yellow"></span><div class="strong tiny">Queue warning</div></div><div class="tiny">10m ago</div></div></div>`,
  },
  {
    name: "Integration cards",
    group: "Card Groups",
    notes: "App connectors",
    code: `<div class="card-grid"><div class="info-card"><div class="row"><div class="icn">${icon("code")}</div><div><div class="strong">GitHub</div><div class="tiny">Connected</div></div></div>${chip("Sync", "green")}</div><div class="info-card"><div class="row"><div class="icn">${icon("message-square")}</div><div><div class="strong">Slack</div><div class="tiny">Disconnected</div></div></div>${button("Connect")}</div></div>`,
  },
  {
    name: "Service status",
    group: "Card Groups",
    notes: "Health cards",
    code: `<div class="card-grid"><div class="info-card"><div class="row between"><span class="row"><span class="status-dot green"></span><span class="strong tiny">API</span></span><span class="tiny">99.9%</span></div></div><div class="info-card"><div class="row between"><span class="row"><span class="status-dot green"></span><span class="strong tiny">DB</span></span><span class="tiny">99.8%</span></div></div><div class="info-card"><div class="row between"><span class="row"><span class="status-dot yellow"></span><span class="strong tiny">Queue</span></span><span class="tiny">98%</span></div></div><div class="info-card"><div class="row between"><span class="row"><span class="status-dot green"></span><span class="strong tiny">Cache</span></span><span class="tiny">100%</span></div></div></div>`,
  },
  {
    name: "Document cards",
    group: "Card Groups",
    notes: "File cards",
    code: `<div class="card-grid"><div class="info-card"><div class="row"><div class="thumbnail" style="width:24px;height:24px">${icon("file-text")}</div><div><div class="strong tiny">Report Q1</div><div class="tiny">2.4 MB</div></div></div></div><div class="info-card"><div class="row"><div class="thumbnail" style="width:24px;height:24px;background:linear-gradient(135deg,#fef3f2,#fff)">${icon("image")}</div><div><div class="strong tiny">hero.png</div><div class="tiny">1.8 MB</div></div></div></div></div>`,
  },
  {
    name: "Pipeline cards",
    group: "Card Groups",
    notes: "Stage cards",
    code: `<div class="card-grid"><div class="info-card"><div class="strong tiny">Lead</div><div class="strong">12</div><div class="text">New prospects</div></div><div class="info-card"><div class="strong tiny">Qualified</div><div class="strong">8</div><div class="text">In review</div></div><div class="info-card"><div class="strong tiny">Proposal</div><div class="strong">5</div><div class="text">Sent quotes</div></div><div class="info-card"><div class="strong tiny">Closed</div><div class="strong">3</div><div class="text">Won deals</div></div></div>`,
  },
  {
    name: "KPI dashboard cards",
    group: "Card Groups",
    notes: "Mini dash",
    code: `<div class="card-grid"><div class="info-card"><div class="row between"><span class="strong">$12k</span>${chip("+14%", "green")}</div><div class="tiny">Revenue</div><div class="spark" style="height:16px"><span style="height:30%"></span><span style="height:46%"></span><span style="height:62%"></span><span style="height:80%"></span></div></div><div class="info-card"><div class="row between"><span class="strong">245</span>${chip("+8%", "green")}</div><div class="tiny">Users</div><div class="spark" style="height:16px"><span style="height:40%"></span><span style="height:55%"></span><span style="height:48%"></span><span style="height:72%"></span></div></div></div>`,
  },
];
