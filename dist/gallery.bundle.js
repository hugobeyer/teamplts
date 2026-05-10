/**
 * SaaSBlocks — Compact SaaS Component Gallery Bundle
 * Auto-generated from modular source by scripts/build.js
 * Do not edit directly.
 */

(function () {

  // ═══════════════════════════════════════════════
  //  HELPERS
  // ═══════════════════════════════════════════════

  /**
   * Helper functions for building component HTML strings.
   * Converted from IIFE to ES modules.
   */

  /**
   * Returns a Lucide icon element.
   * @param {string} name - The icon name (e.g. "copy", "check", "plus")
   * @returns {string} HTML string for the icon
   */
  function icon(name) {
    return '<i data-lucide="' + name + '"></i>';
  }

  /**
   * Returns a button HTML string.
   * @param {string} label - Button text
   * @param {string} [iconName] - Optional icon name
   * @param {string} [variant] - Optional CSS class variant
   * @returns {string} HTML string
   */
  function button(label, iconName, variant) {
    return (
      '<button class="btn ' +
      (variant || "") +
      '" type="button" data-demo-button' +
      (iconName === "x" ? " data-dismiss" : "") +
      ">" +
      (iconName ? icon(iconName) : "") +
      label +
      "</button>"
    );
  }

  /**
   * Returns a chip/tag span HTML string.
   * @param {string} label - Chip text
   * @param {string} [tone] - Optional tone class (e.g. "blue", "green")
   * @returns {string} HTML string
   */
  function chip(label, tone) {
    return '<span class="chip ' + (tone || "") + '">' + label + "</span>";
  }

  /**
   * Returns a segmented control / toggle group HTML string.
   * @param {string[]} labels - Array of button labels
   * @param {number} [active] - Index of the active button
   * @returns {string} HTML string
   */
  function toggle(labels, active) {
    return (
      '<div class="seg" data-toggle-group>' +
      labels
        .map(function (label, index) {
          return (
            '<button class="' +
            (index === active ? "active" : "") +
            '" type="button" data-toggle>' +
            label +
            "</button>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  /**
   * Escapes HTML special characters.
   * @param {*} value - Value to escape
   * @returns {string} Escaped string
   */
  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  /**
   * Normalizes a value to lowercase for comparison.
   * @param {*} value - Value to normalize
   * @returns {string} Lowercased string
   */
  function normalize(value) {
    return String(value || "").toLowerCase();
  }

  /**
   * Refreshes Lucide icons on the page if the library is available.
   */
  function refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  // ═══════════════════════════════════════════════
  //  COMPONENT DATA
  // ═══════════════════════════════════════════════

  window.galleryItems = [
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
];,

[
  {
    name: "Month grid",
    group: "Calendars",
    notes: "Full 31-day",
    code: `<div class="stack"><div class="row between"><strong class="tiny">March 2025</strong>${icon("chevron-right")}</div><div class="month-grid"><span class="wd">S</span><span class="wd">M</span><span class="wd">T</span><span class="wd">W</span><span class="wd">T</span><span class="wd">F</span><span class="wd">S</span><span class="d other">23</span><span class="d other">24</span><span class="d other">25</span><span class="d other">26</span><span class="d other">27</span><span class="d other">28</span><span class="d">1</span><span class="d">2</span><span class="d">3</span><span class="d">4</span><span class="d">5</span><span class="d">6</span><span class="d">7</span><span class="d">8</span><span class="d">9</span><span class="d">10</span><span class="d">11</span><span class="d">12</span><span class="d today">13</span><span class="d">14</span><span class="d act">15</span><span class="d">16</span><span class="d">17</span><span class="d">18</span><span class="d">19</span><span class="d">20</span><span class="d">21</span><span class="d">22</span><span class="d">23</span><span class="d">24</span><span class="d">25</span><span class="d">26</span><span class="d">27</span><span class="d">28</span><span class="d">29</span><span class="d">30</span><span class="d">31</span></div></div>`,
  },
  {
    name: "Week view",
    group: "Calendars",
    notes: "7-column",
    code: `<div class="stack"><div class="row between"><strong class="tiny">Mon 10 - Sun 16</strong>${icon("chevron-right")}</div><div class="week-view"><span class="wh"></span><span class="wh">M</span><span class="wh">T</span><span class="wh">W</span><span class="wh">T</span><span class="wh">F</span><span class="wh">S</span><span class="wh">S</span><span class="wt">9a</span><span class="wc"></span><span class="wc"></span><span class="wc hl">Standup</span><span class="wc"></span><span class="wc"></span><span class="wc"></span><span class="wc"></span><span class="wt">10a</span><span class="wc"></span><span class="wc"></span><span class="wc hl">Review</span><span class="wc"></span><span class="wc"></span><span class="wc"></span><span class="wc"></span><span class="wt">11a</span><span class="wc"></span><span class="wc"></span><span class="wc"></span><span class="wc"></span><span class="wc"></span><span class="wc hl">Sync</span><span class="wc"></span></div></div>`,
  },
  {
    name: "Day agenda",
    group: "Calendars",
    notes: "Hourly timeline",
    code: `<div class="stack"><div class="row between"><strong class="tiny">Today</strong><span class="tiny">Mar 13</span></div><div class="row"><span class="tiny" style="width:28px">9a</span><span class="v-divider"></span><span class="chip" style="flex:1">Team standup</span></div><div class="row"><span class="tiny" style="width:28px">10a</span><span class="v-divider"></span><span class="chip blue" style="flex:1">Design review</span></div><div class="row"><span class="tiny" style="width:28px">11a</span><span class="v-divider"></span><span class="chip" style="flex:1">Client sync</span></div><div class="row"><span class="tiny" style="width:28px">12p</span><span class="v-divider"></span><span class="chip green" style="flex:1">Lunch</span></div></div>`,
  },
  {
    name: "Calendar events",
    group: "Calendars",
    notes: "With chips",
    code: `<div class="stack"><div class="calendar-grid"><span class="day">1</span><span class="day">2</span><span class="day">3</span><span class="day">4</span><span class="day">5</span><span class="day">6</span><span class="day">7</span><span class="day">8</span><span class="day">9</span><span class="day">10</span><span class="day">11</span><span class="day">12</span><span class="day active">13</span><span class="day">14</span><span class="day">15</span></div><div class="stack" style="gap:3px"><div class="row"><span class="event-dot"></span><span class="tiny">Standup 9a</span></div><div class="row"><span class="event-dot green"></span><span class="tiny">Review due</span></div><div class="row"><span class="event-dot yellow"></span><span class="tiny">Client meeting</span></div></div></div>`,
  },
  {
    name: "Date range picker",
    group: "Calendars",
    notes: "Start/end",
    code: `<div class="grid2"><div class="stack"><span class="tiny">Start</span><div class="month-grid"><span class="wd">S</span><span class="wd">M</span><span class="wd">T</span><span class="wd">W</span><span class="wd">T</span><span class="wd">F</span><span class="wd">S</span><span class="d">1</span><span class="d">2</span><span class="d act">3</span><span class="d">4</span><span class="d">5</span><span class="d">6</span><span class="d">7</span></div></div><div class="stack"><span class="tiny">End</span><div class="month-grid"><span class="wd">S</span><span class="wd">M</span><span class="wd">T</span><span class="wd">W</span><span class="wd">T</span><span class="wd">F</span><span class="wd">S</span><span class="d">1</span><span class="d">2</span><span class="d">3</span><span class="d act">7</span><span class="d">8</span><span class="d">9</span><span class="d">10</span></div></div></div>`,
  },
  {
    name: "Quarter view",
    group: "Calendars",
    notes: "3-month overview",
    code: `<div class="grid3"><div class="stack"><span class="tiny">Jan</span><div class="month-grid"><span class="d">1</span><span class="d">2</span><span class="d">3</span><span class="d">4</span><span class="d">5</span><span class="d">6</span><span class="d">7</span></div></div><div class="stack"><span class="tiny">Feb</span><div class="month-grid"><span class="d">1</span><span class="d">2</span><span class="d">3</span><span class="d">4</span><span class="d">5</span><span class="d">6</span><span class="d">7</span></div></div><div class="stack"><span class="tiny">Mar</span><div class="month-grid"><span class="d">1</span><span class="d">2</span><span class="d">3</span><span class="d act">4</span><span class="d">5</span><span class="d">6</span><span class="d">7</span></div></div></div>`,
  },
  {
    name: "Mini compact",
    group: "Calendars",
    notes: "Dot grid",
    code: `<div class="calendar-grid"><span class="day">1</span><span class="day">2</span><span class="day">3</span><span class="day active">4</span><span class="day">5</span><span class="day">6</span><span class="day">7</span><span class="day">8</span><span class="day">9</span><span class="day">10</span><span class="day">11</span><span class="day">12</span><span class="day">13</span><span class="day">14</span><span class="day">15</span></div>`,
  },
  {
    name: "Calendar dots",
    group: "Calendars",
    notes: "Event indicators",
    code: `<div class="stack"><div class="month-grid"><span class="d">1</span><span class="d" style="display:grid"><span>2</span><span class="event-dot" style="margin-top:1px"></span></span><span class="d">3</span><span class="d">4</span><span class="d" style="display:grid"><span>5</span><span class="event-dot green" style="margin-top:1px"></span></span><span class="d">6</span><span class="d">7</span></div><div class="row"><span class="event-dot"></span><span class="tiny">2 events</span><span class="event-dot green" style="margin-left:6px"></span><span class="tiny">1 deadline</span></div></div>`,
  },
  {
    name: "Availability grid",
    group: "Calendars",
    notes: "Free/busy",
    code: `<div class="stack"><div class="row between"><span class="tiny">Today</span></div><div class="calendar-grid"><span class="day" style="background:#ecfdf3">8</span><span class="day" style="background:#ecfdf3">9</span><span class="day" style="background:#fef3f2">10</span><span class="day" style="background:#fef3f2">11</span><span class="day active">12</span><span class="day" style="background:#ecfdf3">13</span><span class="day">14</span></div><div class="row"><span class="event-dot green"></span><span class="tiny">Free</span><span class="event-dot red" style="margin-left:6px"></span><span class="tiny">Busy</span></div></div>`,
  },
  {
    name: "Schedule timeline",
    group: "Calendars",
    notes: "Day plan",
    code: `<div class="stack"><div class="row between"><strong class="tiny">Mar 13</strong><span class="tiny">4 events</span></div><div class="timeline"><div class="timeline-row"><div><div class="strong">9:00 AM</div><div class="text">Daily standup</div></div></div><div class="timeline-row"><div><div class="strong">10:30 AM</div><div class="text">Design review</div></div></div><div class="timeline-row"><div><div class="strong">2:00 PM</div><div class="text">Client sync call</div></div></div></div></div>`,
  },
  {
    name: "Deadline view",
    group: "Calendars",
    notes: "Due dates",
    code: `<div class="list"><div class="list-row"><span class="row"><span class="status-dot red"></span><span class="text">Design handoff</span></span><span class="tiny">Today</span></div><div class="list-row"><span class="row"><span class="status-dot yellow"></span><span class="text">QA review</span></span><span class="tiny">Tomorrow</span></div><div class="list-row"><span class="row"><span class="status-dot green"></span><span class="text">Deploy v2</span></span><span class="tiny">Fri</span></div></div>`,
  },
  {
    name: "Week planner",
    group: "Calendars",
    notes: "Weekly slots",
    code: `<div class="stack"><div class="grid2"><div class="stack"><div class="row"><span class="event-dot"></span><span class="strong tiny">Mon</span></div><span class="text">Standup, Review</span></div><div class="stack"><div class="row"><span class="event-dot green"></span><span class="strong tiny">Tue</span></div><span class="text">Client call</span></div><div class="stack"><div class="row"><span class="event-dot yellow"></span><span class="strong tiny">Wed</span></div><span class="text">Workshop</span></div><div class="stack"><div class="row"><span class="event-dot"></span><span class="strong tiny">Thu</span></div><span class="text">Sprint plan</span></div></div></div>`,
  },
];,

[
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
];,

[
  {
    name: "Bar chart",
    group: "Charts",
    notes: "Mini visual",
    code: `<div class="stack"><div class="row between"><span class="text">Tasks</span><strong class="tiny">72</strong></div><div class="bar-chart"><span style="height:45%"></span><span style="height:80%"></span><span style="height:60%"></span><span style="height:95%"></span><span style="height:52%"></span></div></div>`,
  },
  {
    name: "Spark bars",
    group: "Charts",
    notes: "Tiny trend",
    code: `<div class="row between"><div><div class="strong">+18%</div><div class="text">Conversion</div></div><div class="spark"><span style="height:30%"></span><span style="height:46%"></span><span style="height:62%"></span><span style="height:80%"></span></div></div>`,
  },
  {
    name: "KPI trio",
    group: "Charts",
    notes: "Metric cluster",
    code: `<div class="grid3"><div><strong>91%</strong><div class="tiny">SLA</div></div><div><strong>14</strong><div class="tiny">Open</div></div><div><strong>3</strong><div class="tiny">Risk</div></div></div>`,
  },
  {
    name: "Progress stack",
    group: "Charts",
    notes: "Multiple meters",
    code: `<div class="stack"><div class="progress"><span style="width:40%"></span></div><div class="progress"><span style="width:72%"></span></div><div class="progress"><span style="width:88%"></span></div></div>`,
  },
  {
    name: "Quota meter",
    group: "Charts",
    notes: "Label + meter",
    code: `<div class="stack"><div class="row between"><span class="text">Storage</span><span class="tiny">18.2 / 25 GB</span></div><div class="progress"><span style="width:73%"></span></div></div>`,
  },
  {
    name: "Calendar grid",
    group: "Charts",
    notes: "Tiny month",
    code: `<div class="calendar-grid"><span class="day">1</span><span class="day">2</span><span class="day active">3</span><span class="day">4</span><span class="day">5</span><span class="day">6</span><span class="day">7</span></div>`,
  },
  {
    name: "Pie chart",
    group: "Charts",
    notes: "3-color split",
    code: `<div class="row between"><div class="pie"></div><div class="stack"><div class="row"><span class="tag-dot" style="background:var(--primary)"></span><span class="text">Design 45%</span></div><div class="row"><span class="tag-dot" style="background:#dbeafe"></span><span class="text">Dev 25%</span></div><div class="row"><span class="tag-dot" style="background:#fef3f2"></span><span class="text">QA 30%</span></div></div></div>`,
  },
  {
    name: "Donut chart",
    group: "Charts",
    notes: "64% fill",
    code: `<div class="row between"><div><div class="donut"></div></div><div><div class="strong">64%</div><div class="text">Completion</div></div><div class="stack"><div class="text">12 done</div><div class="text">7 left</div></div></div>`,
  },
  {
    name: "Gauge meter",
    group: "Charts",
    notes: "Semicircular",
    code: `<div class="stack" style="align-items:center"><div class="gauge"><div class="gauge-inner"></div></div><div class="row"><strong class="strong">72%</strong><span class="tiny">of capacity</span></div></div>`,
  },
  {
    name: "Line chart",
    group: "Charts",
    notes: "Gradient trend",
    code: `<div class="stack"><div class="row between"><span class="text">Revenue</span><strong class="tiny">+24%</strong></div><div class="line-chart"><span style="--h:22%"></span><span style="--h:34%"></span><span style="--h:28%"></span><span style="--h:45%"></span><span style="--h:60%"></span><span style="--h:52%"></span><span style="--h:78%"></span></div></div>`,
  },
  {
    name: "Area chart",
    group: "Charts",
    notes: "Filled trend",
    code: `<div class="stack"><div class="area-chart"><span style="height:12%"></span><span style="height:18%"></span><span style="height:24%"></span><span style="height:40%"></span><span style="height:55%"></span><span style="height:48%"></span><span style="height:72%"></span></div><div class="row between"><span class="tiny">Jan</span><span class="tiny">Jul</span></div></div>`,
  },
  {
    name: "Stacked bars",
    group: "Charts",
    notes: "Segment composition",
    code: `<div class="stack"><div class="row between"><span class="text">Resource mix</span><span class="tiny">CPU / Mem / Net</span></div><div class="stacked"><span style="width:40%;background:var(--primary)"></span><span style="width:35%;background:#93c5fd"></span><span style="width:25%;background:#dbeafe"></span></div></div>`,
  },
  {
    name: "Horizontal bars",
    group: "Charts",
    notes: "Row bars",
    code: `<div class="stack"><div class="h-bar"><span class="text" style="width:36px">Design</span><span class="bar" style="width:80%"></span><span class="tiny">80%</span></div><div class="h-bar"><span class="text" style="width:36px">Dev</span><span class="bar good" style="width:55%"></span><span class="tiny">55%</span></div><div class="h-bar"><span class="text" style="width:36px">QA</span><span class="bar bad" style="width:30%"></span><span class="tiny">30%</span></div></div>`,
  },
  {
    name: "Funnel chart",
    group: "Charts",
    notes: "Conversion steps",
    code: `<div class="funnel"><span style="width:100%">1,240</span><span>992</span><span>546</span><span>302</span></div>`,
  },
  {
    name: "Heatmap",
    group: "Charts",
    notes: "Activity grid",
    code: `<div class="stack"><div class="heat-row"><span class="heat-cell hi"></span><span class="heat-cell md"></span><span class="heat-cell lo"></span><span class="heat-cell"></span><span class="heat-cell md"></span></div><div class="heat-row"><span class="heat-cell md"></span><span class="heat-cell hi"></span><span class="heat-cell hi"></span><span class="heat-cell md"></span><span class="heat-cell lo"></span></div><div class="heat-row"><span class="heat-cell lo"></span><span class="heat-cell md"></span><span class="heat-cell hi"></span><span class="heat-cell hi"></span><span class="heat-cell md"></span></div><div class="row between"><span class="tiny">Mon</span><span class="tiny">Fri</span></div></div>`,
  },
  {
    name: "Comparison chart",
    group: "Charts",
    notes: "Two series",
    code: `<div class="stack"><div class="row between"><span class="text">This year</span><span class="tiny">vs last</span></div><div class="bar-chart" style="height:24px"><span style="height:60%;background:#93c5fd;width:40%"></span><span style="height:50%;background:var(--primary);width:40%"></span><span style="height:75%;background:#93c5fd;width:40%"></span><span style="height:85%;background:var(--primary);width:40%"></span><span style="height:45%;background:#93c5fd;width:40%"></span></div><div class="row"><span class="tag-dot" style="background:var(--primary)"></span><span class="tiny" style="margin-right:8px">Current</span><span class="tag-dot" style="background:#93c5fd"></span><span class="tiny">Previous</span></div></div>`,
  },
  {
    name: "Weekly activity",
    group: "Charts",
    notes: "7-day bars",
    code: `<div class="stack"><div class="row between"><span class="tiny">M</span><span class="tiny">T</span><span class="tiny">W</span><span class="tiny">T</span><span class="tiny">F</span><span class="tiny">S</span><span class="tiny">S</span></div><div class="bar-chart" style="height:24px"><span style="height:40%"></span><span style="height:70%"></span><span style="height:55%"></span><span style="height:90%"></span><span style="height:65%"></span><span style="height:30%"></span><span style="height:20%"></span></div></div>`,
  },
  {
    name: "Monthly trend",
    group: "Charts",
    notes: "12-month",
    code: `<div class="stack"><div class="bar-chart" style="height:20px;gap:2px"><span style="height:30%"></span><span style="height:25%"></span><span style="height:40%"></span><span style="height:55%"></span><span style="height:60%"></span><span style="height:45%"></span><span style="height:70%"></span><span style="height:80%"></span><span style="height:65%"></span><span style="height:85%"></span><span style="height:90%"></span><span style="height:75%"></span></div><div class="row between"><span class="tiny">J</span><span class="tiny">F</span><span class="tiny">M</span><span class="tiny">A</span><span class="tiny">M</span><span class="tiny">J</span><span class="tiny">J</span><span class="tiny">A</span><span class="tiny">S</span><span class="tiny">O</span><span class="tiny">N</span><span class="tiny">D</span></div></div>`,
  },
  {
    name: "Progress ring",
    group: "Charts",
    notes: "SVG circle",
    code: `<div class="row between"><div class="ring"><svg width="30" height="30" viewBox="0 0 30 30"><circle class="bg" cx="15" cy="15" r="11"></circle><circle class="fg" cx="15" cy="15" r="11" stroke-dasharray="69.1" stroke-dashoffset="24.9"></circle></svg></div><div><div class="strong">64%</div><div class="text">Complete</div></div>${chip("+8%", "green")}</div>`,
  },
  {
    name: "Bullet chart",
    group: "Charts",
    notes: "Target vs actual",
    code: `<div class="stack"><div class="row between"><span class="text">Revenue target</span><span class="tiny">$84k / $120k</span></div><div class="progress" style="position:relative"><span style="width:70%"></span></div></div>`,
  },
  {
    name: "Multi series",
    group: "Charts",
    notes: "Grouped bars",
    code: `<div class="stack"><div class="bar-chart" style="height:24px;gap:6px"><span style="height:60%;width:30%;background:#93c5fd"></span><span style="height:50%;width:30%;background:var(--primary)"></span><span style="height:75%;width:30%;background:#93c5fd"></span><span style="height:85%;width:30%;background:var(--primary)"></span><span style="height:45%;width:30%;background:#93c5fd"></span></div><div class="row"><span class="tag-dot" style="background:var(--primary)"></span><span class="tiny" style="margin-right:6px">Sales</span><span class="tag-dot" style="background:#93c5fd"></span><span class="tiny">Target</span></div></div>`,
  },
];,

[
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
];,

[
  {
    name: "Code token",
    group: "Developer",
    notes: "Code fill",
    code: `<div class="code-line">window.TaskTokUIComponents.button("Save")</div>`,
  },
  {
    name: "API status",
    group: "Developer",
    notes: "Service row",
    code: `<div class="row between"><span class="row"><span class="tag-dot"></span><span class="text">GET /tasks</span></span>${chip("200", "green")}</div>`,
  },
  {
    name: "Env row",
    group: "Developer",
    notes: "Key value",
    code: `<div class="list"><div class="list-row"><span class="text">NODE_ENV</span><span class="code-line">production</span></div><div class="list-row"><span class="text">REGION</span><span class="code-line">sa-east</span></div></div>`,
  },
  {
    name: "Log row",
    group: "Developer",
    notes: "Dense log",
    code: `<div class="row"><span class="code-line">11:42:08</span><span class="text">Widget rendered successfully</span></div>`,
  },
  {
    name: "Feature flags",
    group: "Developer",
    notes: "Toggle list",
    code: `<div class="list"><div class="list-row"><span class="text">newBuilder</span><span class="switch active"><span></span></span></div><div class="list-row"><span class="text">betaGrid</span><span class="switch"><span></span></span></div></div>`,
  },
  {
    name: "Webhook display",
    group: "Developer",
    notes: "Endpoint row",
    code: `<div class="row between"><div class="stack"><span class="code-line" style="font-size:9px">https://api.tasktok.io/hooks/abc</span><span class="tiny">Last triggered 2m ago</span></div>${button("Test", "play")}</div>`,
  },
  {
    name: "Integration status",
    group: "Developer",
    notes: "Service health",
    code: `<div class="list"><div class="list-row"><span class="row"><span class="status-dot green"></span><span class="text">Stripe</span></span><span class="tiny">Connected</span></div><div class="list-row"><span class="row"><span class="status-dot green"></span><span class="text">SendGrid</span></span><span class="tiny">Connected</span></div><div class="list-row"><span class="row"><span class="status-dot red"></span><span class="text">S3</span></span><span class="tiny">Error</span></div></div>`,
  },
  {
    name: "Log viewer",
    group: "Developer",
    notes: "Multi-line log",
    code: `<div class="stack" style="background:#f8fafc;border-radius:5px;padding:5px"><div class="code-line" style="background:transparent;padding:1px 0">INFO  Deploy started</div><div class="code-line" style="background:transparent;padding:1px 0;color:var(--good)">PASS  Tests: 42</div><div class="code-line" style="background:transparent;padding:1px 0;color:var(--bad)">WARN  Memory high</div></div>`,
  },
  {
    name: "Env config",
    group: "Developer",
    notes: "Config pairs",
    code: `<div class="stack"><div class="row between"><span class="code-line" style="width:80px;flex:none">API_URL</span><input class="input" value="https://api.tasktok.io"></div><div class="row between"><span class="code-line" style="width:80px;flex:none">API_KEY</span><input class="input" type="password" value="sk-abc123"></div></div>`,
  },
];,

[
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
];,

[
  {
    name: "Login form",
    group: "Forms",
    notes: "Stacked auth",
    code: `<div class="stack"><input class="input" placeholder="Email"><input class="input" placeholder="Password" type="password"><div class="row between"><label class="row text"><input type="checkbox"> Remember</label><button class="btn ghost">Forgot?</button></div>${button("Sign in", "log-in", "primary")}${button("Create account", "user-plus")}</div>`,
  },
  {
    name: "Inline comment",
    group: "Forms",
    notes: "Textarea + submit",
    code: `<div class="row"><textarea class="textarea" placeholder="Write a comment..."></textarea>${button("Send", "send", "primary")}</div>`,
  },
  {
    name: "Search command",
    group: "Forms",
    notes: "Input + action",
    code: `<div class="row"><input class="input" placeholder="Search actions, pages, users...">${button("Go", "search", "primary")}</div>`,
  },
  {
    name: "Invite user",
    group: "Forms",
    notes: "Email capture",
    code: `<div class="row"><input class="input" placeholder="Invite by email">${button("Invite", "user-plus", "primary")}</div>`,
  },
  {
    name: "Search filter",
    group: "Forms",
    notes: "Input + filter",
    code: `<div class="row between"><div class="row"><input class="input" placeholder="Search..."><button class="btn">Active</button></div>${button("Filter", "sliders-horizontal")}</div>`,
  },
  {
    name: "Two fields",
    group: "Forms",
    notes: "Paired inputs",
    code: `<div class="grid2"><input class="input" placeholder="First name"><input class="input" placeholder="Last name"></div>`,
  },
  {
    name: "Select row",
    group: "Forms",
    notes: "Select + apply",
    code: `<div class="row"><select class="select"><option>Default</option></select>${button("Apply")}</div>`,
  },
  {
    name: "File upload",
    group: "Forms",
    notes: "Drop target",
    code: `<div class="stack" style="place-items:center;text-align:center">${chip("Upload", "blue")}<div class="strong">Drop files here</div><div class="text">Assets or documents</div>${button("Browse", "folder-open")}</div>`,
  },
  {
    name: "Date range",
    group: "Forms",
    notes: "Start/end",
    code: `<div class="grid2"><input class="input" type="date"><input class="input" type="date"></div>`,
  },
  {
    name: "Copy field",
    group: "Forms",
    notes: "URL field",
    code: `<div class="row"><input class="input" value="https://app.example/link">${button("Copy", "copy")}</div>`,
  },
  {
    name: "Title subtitle",
    group: "Forms",
    notes: "Checkbox fields",
    code: `<div class="grid2"><div class="row"><input type="checkbox" checked><input class="input" placeholder="Title"></div><div class="row"><input type="checkbox" checked><input class="input" placeholder="Subtitle"></div></div>`,
  },
  {
    name: "Field labels",
    group: "Forms",
    notes: "Label + input",
    code: `<div class="grid2"><label class="field-label"><span>Workspace</span><input class="input" value="Tasktok"></label><label class="field-label"><span>Slug</span><input class="input" value="tasktok"></label></div>`,
  },
  {
    name: "Input with icon",
    group: "Forms",
    notes: "Inline search",
    code: `<div class="row"><button class="btn icon-only">${icon("search")}</button><input class="input" placeholder="Find record"></div>`,
  },
  {
    name: "Amount input",
    group: "Forms",
    notes: "Prefix control",
    code: `<div class="row"><button class="btn">$</button><input class="input" value="1240.00"><button class="btn">USD</button></div>`,
  },
  {
    name: "Stepper input",
    group: "Forms",
    notes: "Numeric stepper",
    code: `<div class="row"><button class="btn icon-only" data-step="-1">${icon("minus")}</button><input class="input" value="3" data-step-value><button class="btn icon-only" data-step="1">${icon("plus")}</button></div>`,
  },
  {
    name: "Password row",
    group: "Forms",
    notes: "Field action",
    code: `<div class="row"><input class="input" type="password" value="secret"><button class="btn icon-only" data-password-toggle>${icon("eye")}</button></div>`,
  },
  {
    name: "Validation field",
    group: "Forms",
    notes: "Border needed for field",
    code: `<div class="stack"><input class="input" value="hugo@app"><div class="row">${chip("Invalid", "red")}<span class="text">Use a full email address</span></div></div>`,
  },
  {
    name: "Radio group",
    group: "Forms",
    notes: "Choices no panel",
    code: `<div class="stack"><label class="row"><span class="radio active"></span><span class="text">Owner</span></label><label class="row"><span class="radio"></span><span class="text">Editor</span></label></div>`,
  },
  {
    name: "Checkbox group",
    group: "Forms",
    notes: "Checklist controls",
    code: `<div class="stack"><label class="row"><span class="check active">${icon("check")}</span><span class="text">Header</span></label><label class="row"><span class="check"></span><span class="text">Footer</span></label></div>`,
  },
  {
    name: "Slider row",
    group: "Forms",
    notes: "Native compact",
    code: `<div class="row between"><span class="text">Opacity</span><input style="width:120px" type="range" value="64"><span class="tiny">64%</span></div>`,
  },
  {
    name: "Token input",
    group: "Forms",
    notes: "Tags + input",
    code: `<div class="row">${chip("Admin")}${chip("Clinic")}<input class="input" placeholder="Add tag"></div>`,
  },
  {
    name: "Color picker",
    group: "Forms",
    notes: "Swatch row",
    code: `<div class="row between"><span class="text">Accent</span><div class="row"><span class="tag-dot" style="background:#2563eb;width:14px;height:14px"></span><span class="tag-dot" style="background:#059669;width:14px;height:14px"></span><span class="tag-dot" style="background:#d97706;width:14px;height:14px"></span><span class="tag-dot" style="background:#dc2626;width:14px;height:14px"></span></div></div>`,
  },
  {
    name: "Time picker",
    group: "Forms",
    notes: "Hour/min inputs",
    code: `<div class="row"><input class="input" style="width:44px" value="09"><span class="text">:</span><input class="input" style="width:44px" value="30"><select class="select" style="width:60px"><option>AM</option></select></div>`,
  },
  {
    name: "Phone input",
    group: "Forms",
    notes: "Country + number",
    code: `<div class="row"><button class="btn" style="width:40px">+1</button><input class="input" placeholder="(555) 123-4567"></div>`,
  },
  {
    name: "URL input",
    group: "Forms",
    notes: "Link field",
    code: `<div class="row"><span class="chip" style="border-radius:5px 0 0 5px;border-right:0">https://</span><input class="input" value="mysite.com/page" style="border-radius:0 5px 5px 0"></div>`,
  },
  {
    name: "Currency field",
    group: "Forms",
    notes: "Money input",
    code: `<div class="row"><button class="btn" style="width:32px">$</button><input class="input" value="1,250.00" style="text-align:right"><select class="select" style="width:52px"><option>USD</option></select></div>`,
  },
  {
    name: "Search results",
    group: "Forms",
    notes: "Live results",
    code: `<div class="list"><div class="list-row"><span class="text">Getting started guide</span><span class="tiny">Docs</span></div><div class="list-row"><span class="text">API reference</span><span class="tiny">Dev</span></div><div class="list-row"><span class="text">Billing settings</span><span class="tiny">Admin</span></div></div>`,
  },
  {
    name: "Filter bar",
    group: "Forms",
    notes: "Multi filter row",
    code: `<div class="row wrap"><select class="select" style="width:70px"><option>Status</option></select><select class="select" style="width:80px"><option>Priority</option></select><input class="input" style="width:80px" placeholder="Search">${button("Clear")}</div>`,
  },
  {
    name: "Multi select chips",
    group: "Forms",
    notes: "Chip selector",
    code: `<div class="row wrap">${chip("Design", "blue")}${chip("Dev", "blue")}${chip("Marketing")}<button class="btn">+ Add</button></div>`,
  },
];,

[
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
];,

[
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
];,

[
  {
    name: "File row",
    group: "Media",
    notes: "No card needed",
    code: `<div class="row between"><span class="row">${icon("file-text")}<span class="text">contract.pdf</span></span><span class="tiny">2.4 MB</span></div>`,
  },
  {
    name: "Image thumbnail",
    group: "Media",
    notes: "Bounded visual",
    code: `<div class="row"><div class="thumbnail">${icon("image")}</div><div><div class="strong">hero.png</div><div class="text">1200 x 800</div></div></div>`,
  },
  {
    name: "Upload dropzone",
    group: "Media",
    notes: "Dashed border needed",
    code: `<div class="dropzone">${icon("upload")}<div class="strong">Drop image</div><div class="text">PNG, JPG, SVG</div></div>`,
  },
  {
    name: "Attachment chips",
    group: "Media",
    notes: "Tags no border",
    code: `<div class="row wrap">${chip("brief.pdf")}${chip("logo.svg")}${chip("photo.jpg")}</div>`,
  },
  {
    name: "Media actions",
    group: "Media",
    notes: "Thumbnail + buttons",
    code: `<div class="row between"><div class="row"><div class="thumbnail">${icon("image")}</div><span class="text">Background</span></div><div class="row">${button("Crop", "crop")}${button("Remove", "trash-2", "danger")}</div></div>`,
  },
  {
    name: "Gallery grid",
    group: "Media",
    notes: "Image grid",
    code: `<div class="grid3"><div class="thumbnail" style="height:28px">${icon("image")}</div><div class="thumbnail" style="height:28px;background:linear-gradient(135deg,#fef3f2,#ecfdf3)">${icon("image")}</div><div class="thumbnail" style="height:28px;background:linear-gradient(135deg,#fffaeb,#f3e8ff)">${icon("image")}</div></div>`,
  },
  {
    name: "Carousel mini",
    group: "Media",
    notes: "Dot nav",
    code: `<div class="stack"><div class="thumbnail" style="height:30px">${icon("image")}</div><div class="row" style="justify-content:center"><span class="tag-dot" style="background:var(--primary);width:5px;height:5px"></span><span class="tag-dot" style="width:5px;height:5px"></span><span class="tag-dot" style="width:5px;height:5px"></span></div></div>`,
  },
  {
    name: "Video embed",
    group: "Media",
    notes: "Play overlay",
    code: `<div class="thumbnail" style="height:32px;background:#111827;color:#fff">${icon("play")} <span class="tiny">Intro video</span></div>`,
  },
];,

[
  {
    name: "Breadcrumbs",
    group: "Navigation",
    notes: "Compact path",
    code: `<div class="row"><span class="text">Home</span><span class="text">/</span><span class="text">Projects</span><span class="text">/</span><strong class="tiny">Current</strong></div>`,
  },
  {
    name: "Tabs compact",
    group: "Navigation",
    notes: "Segmented tabs",
    code: toggle(["Overview", "Data", "Roles"], 0),
  },
  {
    name: "Stepper",
    group: "Navigation",
    notes: "Three steps",
    code: `<div class="row between">${chip("1", "blue")}<span class="divider" style="flex:1"></span>${chip("2")}<span class="divider" style="flex:1"></span>${chip("3")}</div>`,
  },
  {
    name: "Pagination",
    group: "Navigation",
    notes: "Pager",
    code: `<div class="row between">${button("Prev")}<span class="text">Page 1 of 8</span>${button("Next")}</div>`,
  },
  {
    name: "Top nav",
    group: "Navigation",
    notes: "Links no borders",
    code: `<div class="row"><a class="pill-link" href="#">Overview</a><a class="pill-link" href="#">Tasks</a><a class="pill-link" href="#">Files</a><a class="pill-link" href="#">Team</a></div>`,
  },
  {
    name: "Segmented nav",
    group: "Navigation",
    notes: "Border needed as control",
    code: toggle(["Day", "Week", "Month"], 1),
  },
  {
    name: "Command item",
    group: "Navigation",
    notes: "Menu row",
    code: `<div class="row between"><span class="row">${icon("search")}<span class="text">Open command palette</span></span><span class="kbd">Ctrl K</span></div>`,
  },
  {
    name: "Sidebar item",
    group: "Navigation",
    notes: "Plain row",
    code: `<div class="stack"><div class="row">${icon("layout-dashboard")}<span class="text">Dashboard</span></div><div class="row">${icon("list-todo")}<span class="text">Tasks</span></div><div class="row">${icon("settings")}<span class="text">Settings</span></div></div>`,
  },
  {
    name: "Pagination compact",
    group: "Navigation",
    notes: "Grouped controls",
    code: `<div class="row between"><div class="seg"><button type="button">${icon("chevron-left")}</button><button class="active" type="button">1</button><button type="button">2</button><button type="button">${icon("chevron-right")}</button></div><span class="tiny">24 rows</span></div>`,
  },
  {
    name: "Tab with count",
    group: "Navigation",
    notes: "Segmented count",
    code: `<div class="seg"><button class="active" type="button">Open ${chip("8", "blue")}</button><button type="button">Done ${chip("21")}</button></div>`,
  },
  {
    name: "Underline tabs",
    group: "Navigation",
    notes: "Border indicator",
    code: `<div class="tab-line"><button class="act" type="button">Overview</button><button type="button">Analytics</button><button type="button">Settings</button></div>`,
  },
  {
    name: "Pill tabs",
    group: "Navigation",
    notes: "Rounded pills",
    code: `<div class="tab-pill"><button class="act" type="button">All</button><button type="button">Active</button><button type="button">Draft</button><button type="button">Archived</button></div>`,
  },
  {
    name: "Icon tabs",
    group: "Navigation",
    notes: "Icons + labels",
    code: `<div class="tab-icon"><button class="act" type="button">${icon("layout-dashboard")}Overview</button><button type="button">${icon("list-todo")}Tasks</button><button type="button">${icon("settings")}</button></div>`,
  },
  {
    name: "Vertical tabs",
    group: "Navigation",
    notes: "Side stacked",
    code: `<div class="tab-v"><button class="act" type="button">${icon("layout-dashboard")}Dashboard</button><button type="button">${icon("list-todo")}Tasks</button><button type="button">${icon("users")}Team</button></div>`,
  },
  {
    name: "Breadcrumb tabs",
    group: "Navigation",
    notes: "Link path",
    code: `<div class="row"><a class="pill-link" href="#">Workspace</a><span class="text">/</span><a class="pill-link" href="#">Projects</a><span class="text">/</span><span class="text">Current</span></div>`,
  },
  {
    name: "Status tabs",
    group: "Navigation",
    notes: "With dots",
    code: `<div class="seg"><button class="active" type="button"><span class="status-dot green" style="display:inline-block;vertical-align:middle;margin-right:3px"></span>Healthy</button><button type="button"><span class="status-dot yellow" style="display:inline-block;vertical-align:middle;margin-right:3px"></span>Warn</button></div>`,
  },
  {
    name: "Filter tabs with counts",
    group: "Navigation",
    notes: "Badge numbers",
    code: `<div class="seg"><button class="active" type="button">All <span class="badge-count ghost">12</span></button><button type="button">Open <span class="badge-count">8</span></button><button type="button">Done</button></div>`,
  },
  {
    name: "Section nav",
    group: "Navigation",
    notes: "Grouped links",
    code: `<div class="stack"><div class="tiny" style="margin:2px 0">Main</div><div class="row">${icon("layout-dashboard")}<span class="text">Dashboard</span></div><div class="row">${icon("list-todo")}<span class="text">Tasks</span></div><div class="tiny" style="margin:2px 0">Account</div><div class="row">${icon("settings")}<span class="text">Settings</span></div></div>`,
  },
  {
    name: "Step wizard",
    group: "Navigation",
    notes: "Numbered steps",
    code: `<div class="row between"><div class="row">${chip("1", "blue")}<span class="text">Profile</span></div>${icon("chevron-right")}<div class="row">${chip("2")}<span class="text">Team</span></div>${icon("chevron-right")}<div class="row">${chip("3")}<span class="text">Billing</span></div></div>`,
  },
  {
    name: "Toggle view",
    group: "Navigation",
    notes: "Two states",
    code: `<div class="row between"><div class="seg"><button class="active" type="button">${icon("list")}List</button><button type="button">${icon("grid")}Grid</button></div><span class="tiny">Show all</span></div>`,
  },
  {
    name: "Side nav expanded",
    group: "Navigation",
    notes: "Full sidebar",
    code: `<div class="stack" style="background:#f8fafc;border-radius:5px;padding:6px;width:100%"><div class="tab-v"><button class="act" type="button">${icon("layout-dashboard")}Dashboard</button><button type="button">${icon("list-todo")}Tasks <span class="badge-count" style="margin-left:auto">3</span></button><button type="button">${icon("users")}Team</button><button type="button">${icon("settings")}Settings</button></div></div>`,
  },
];,

[
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
];,

[
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
];,

[
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
];,

[
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
];;

  // ═══════════════════════════════════════════════
  //  STATE
  // ═══════════════════════════════════════════════

  var els = {};

  /**
   * Reactive state for the gallery viewer.
   */
  const state = { group: "All", query: "" };

  /**
   * Extracts unique groups from the gallery items, sorted alphabetically,
   * with "All" prepended.
   * @param {Array<{group: string}>} items - Gallery items
   * @returns {string[]} Sorted unique group names with "All" first
   */
  function groups(items) {
    return ["All"].concat(
      Array.from(
        new Set(
          items.map(function (item) {
            return item.group;
          })
        )
      ).sort()
    );
  }

  /**
   * Filters gallery items by the current state's group and query.
   * @param {Array<{group: string, name: string, notes: string, code: string}>} items - Full gallery items array
   * @returns {Array} Filtered items
   */
  function filteredItems(items) {
    var q = normalize(state.query);
    return items.filter(function (item) {
      var groupMatch = state.group === "All" || item.group === state.group;
      var searchText = normalize(
        [item.name, item.group, item.notes, item.code].join(" ")
      );
      return groupMatch && (!q || searchText.includes(q));
    });
  }

  // ═══════════════════════════════════════════════
  //  THEMES
  // ═══════════════════════════════════════════════

  /**
   * Available themes for the gallery.
   */
  const themes = [
    { key: "clean", label: "Clean" },
    { key: "graphite", label: "Graphite" },
    { key: "dracula", label: "Dracula" },
    { key: "davinci", label: "Davinci" },
    { key: "casual", label: "Casual" },
  ];

  /**
   * Applies a theme by setting the data-theme attribute on the document
   * and persisting to localStorage.
   * @param {string} key - Theme key to apply
   */
  function applyTheme(key) {
    document.documentElement.setAttribute("data-theme", key);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("gallery-theme", key);
    }
    window.__galleryTheme = key;
  }

  /**
   * Returns the saved theme key from localStorage, defaulting to "clean".
   * @returns {string} Theme key
   */
  function getSavedTheme() {
    if (typeof localStorage !== "undefined") {
      return localStorage.getItem("gallery-theme") || "clean";
    }
    return "clean";
  }

  // ═══════════════════════════════════════════════
  //  RENDERER
  // ═══════════════════════════════════════════════

  /**
   * Renders filter buttons into the given container.
   * @param {string[]} groupList - Array of group names (from state.groups)
   * @param {{group: string, query: string}} currentState - Current filter state
   * @param {HTMLElement} container - DOM element to render into
   */
  function renderFilters(groupList, currentState, container) {
    container.innerHTML = groupList
      .map(function (group) {
        return (
          '<button type="button" class="' +
          (currentState.group === group ? "active" : "") +
          '" data-filter="' +
          escapeHtml(group) +
          '">' +
          escapeHtml(group) +
          "</button>"
        );
      })
      .join("");
  }

  /**
   * Renders a single gallery card.
   * @param {{name: string, group: string, notes: string, code: string, frame?: string}} item - Gallery item
   * @param {number} index - Index in the items array
   * @returns {string} HTML string for the card
   */
  function renderCard(item, index) {
    var frame = item.frame || (item.group === "Primitives" ? "plain" : "card");
    return (
      '<section class="doc-card" data-index="' +
      index +
      '">' +
      '<div class="doc-head"><div><div class="doc-title">' +
      escapeHtml(item.name) +
      '</div><div class="doc-meta">' +
      escapeHtml(item.group) +
      " / " +
      escapeHtml(item.notes || "") +
      "</div></div></div>" +
      '<div class="preview" data-frame="' +
      escapeHtml(frame) +
      '">' +
      item.code +
      "</div>" +
      '<div class="doc-actions"><button class="icon-btn" type="button" data-copy="' +
      index +
      '" title="Copy ' +
      escapeHtml(item.name) +
      '" aria-label="Copy ' +
      escapeHtml(item.name) +
      '">' +
      icon("copy") +
      "<span>Copy</span></button></div>" +
      "</section>"
    );
  }

  /**
   * Renders the full gallery of filtered items into the container.
   * Also hydrates interactive elements after rendering.
   * @param {Array} items - Filtered gallery items to render
   * @param {HTMLElement} container - DOM element to render into
   */
  function renderGallery(items, container) {
    container.innerHTML = items.map(renderCard).join("");
    hydrateInteractive(container);
  }

  /**
   * Renders theme toggle buttons into the given container.
   * @param {Array<{key: string, label: string}>} themeList - Available themes
   * @param {HTMLElement} container - DOM element to render into
   */
  function renderThemeToggles(themeList, container) {
    if (!container) return;
    var current = window.__galleryTheme || "clean";
    container.innerHTML = themeList
      .map(function (t) {
        return (
          '<button type="button" class="' +
          (t.key === current ? "active" : "") +
          '" data-theme-key="' +
          t.key +
          '">' +
          t.label +
          "</button>"
        );
      })
      .join("");
  }

  // ═══════════════════════════════════════════════
  //  INTERACTIONS
  // ═══════════════════════════════════════════════

  // ── Internal utilities ──────────────────────────────────────────

  function fallbackCopy(text) {
    var area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.left = "-9999px";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    area.remove();
  }

  function copyText(text, button) {
    var old = button.innerHTML;
    function done() {
      button.classList.add("done");
      button.innerHTML = icon("check") + "<span>Copied</span>";
      refreshIcons();
      setTimeout(function () {
        button.classList.remove("done");
        button.innerHTML = old;
        refreshIcons();
      }, 800);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(done)
        .catch(function () {
          fallbackCopy(text);
          done();
        });
    } else {
      fallbackCopy(text);
      done();
    }
  }

  // ── Interaction handlers ────────────────────────────────────────

  /**
   * Toggles a checkbox element's active state and re-renders its inner icon.
   * @param {HTMLElement} el - The .check element
   * @param {boolean} active - Whether to set it active
   */
  function setCheck(el, active) {
    el.classList.toggle("active", active);
    el.setAttribute("aria-checked", active ? "true" : "false");
    el.innerHTML = active ? icon("check") : "";
    refreshIcons();
  }

  /**
   * Activates a radio element and deactivates sibling radios within the same scope.
   * @param {HTMLElement} el - The .radio element
   */
  function setRadio(el) {
    var scope =
      el.closest("[data-radio-group]") ||
      el.closest(".stack,.list,.panel,.preview");
    (scope || document).querySelectorAll(".radio").forEach(function (radio) {
      radio.classList.remove("active");
      radio.setAttribute("aria-checked", "false");
    });
    el.classList.add("active");
    el.setAttribute("aria-checked", "true");
  }

  /**
   * Pulses a demo button briefly (unless it's a filter, toggle, step, etc.).
   * @param {HTMLElement} button - The button element
   */
  function pulseButton(button) {
    if (
      button.closest(".doc-actions") ||
      button.matches(
        "[data-filter],[data-toggle],[data-step],[data-password-toggle],[data-dismiss]",
      )
    )
      return;
    button.classList.add("active");
    setTimeout(function () {
      button.classList.remove("active");
    }, 420);
  }

  /**
   * Dismisses (hides) the parent callout, list-row, soft-row, or row of a dismiss button.
   * @param {HTMLElement} button - The dismiss button
   */
  function dismissFrom(button) {
    var target = button.closest(".callout,.list-row,.soft-row,.row.between");
    if (target) target.style.display = "none";
  }

  /**
   * Increments or decrements a step-input value.
   * @param {HTMLElement} button - The [data-step] button
   */
  function stepValue(button) {
    var row = button.closest(".row");
    var input =
      row &&
      (row.querySelector("[data-step-value]") || row.querySelector("input"));
    if (!input) return;
    var next = Number(input.value || 0) + Number(button.dataset.step || 0);
    input.value = String(Math.max(0, next));
  }

  /**
   * Toggles password visibility for a password field.
   * @param {HTMLElement} button - The [data-password-toggle] button
   */
  function togglePassword(button) {
    var row = button.closest(".row");
    var input =
      row &&
      row.querySelector('input[type="password"],input[data-password-visible]');
    if (!input) return;
    var visible = input.type === "text";
    input.type = visible ? "password" : "text";
    input.toggleAttribute("data-password-visible", !visible);
    button.innerHTML = icon(visible ? "eye" : "eye-off");
    refreshIcons();
  }

  /**
   * Selects a day cell in a calendar/month grid.
   * @param {HTMLElement} day - The day element
   */
  function selectDay(day) {
    var grid = day.closest(".calendar-grid,.month-grid");
    if (!grid) return;
    grid.querySelectorAll(".day,.d").forEach(function (item) {
      item.classList.remove("act");
    });
    day.classList.add("act");
  }

  /**
   * Sets the rating value based on which star span was clicked.
   * @param {HTMLElement} target - The clicked star span
   */
  function setRating(target) {
    var rating = target.closest(".rating");
    if (!rating) return;
    var stars = Array.from(rating.querySelectorAll("span"));
    var value = stars.indexOf(target) + 1;
    rating.dataset.rating = String(value);
    stars.forEach(function (star, index) {
      star.style.opacity = index < value ? "1" : ".28";
    });
  }

  /**
   * Hydrates interactive elements (switches, checks, radios, ratings) with ARIA
   * attributes and proper inner content after DOM rendering.
   * @param {HTMLElement} root - Root element to hydrate within
   */
  function hydrateInteractive(root) {
    root.querySelectorAll(".switch").forEach(function (el) {
      el.setAttribute("role", "switch");
      el.setAttribute(
        "aria-checked",
        el.classList.contains("active") ? "true" : "false",
      );
      if (!el.firstElementChild) el.innerHTML = "<span></span>";
    });
    root.querySelectorAll(".check").forEach(function (el) {
      el.setAttribute("role", "checkbox");
      el.setAttribute(
        "aria-checked",
        el.classList.contains("active") ? "true" : "false",
      );
      if (el.classList.contains("active") && !el.querySelector("svg,i"))
        el.innerHTML = icon("check");
    });
    root.querySelectorAll(".radio").forEach(function (el) {
      el.setAttribute("role", "radio");
      el.setAttribute(
        "aria-checked",
        el.classList.contains("active") ? "true" : "false",
      );
    });
    root.querySelectorAll(".rating").forEach(function (rating) {
      var value = Number(rating.dataset.rating || 0);
      rating.querySelectorAll("span").forEach(function (star, index) {
        star.style.opacity = !value || index < value ? "1" : ".28";
      });
    });
    refreshIcons();
  }

  // ── Bind all event listeners ────────────────────────────────────

  /**
   * Binds all click and input event listeners to the document and the search input.
   * @param {{gallery: HTMLElement, filters: HTMLElement, search: HTMLInputElement, themeToggles: HTMLElement}} els - Element references
   * @param {{group: string, query: string}} state - Reactive state object
   * @param {Function} renderFn - Callback to re-render filters and gallery (e.g. () => { renderFilters(...); renderGallery(...); })
   */
  function bind(els, state, renderFn) {
    document.addEventListener("click", function (event) {
      var filter = event.target.closest("[data-filter]");
      if (filter) {
        state.group = filter.dataset.filter;
        renderFn();
        return;
      }

      var toggleButton = event.target.closest("[data-toggle]");
      if (toggleButton) {
        var group = toggleButton.closest("[data-toggle-group]");
        if (group) {
          group.querySelectorAll("[data-toggle]").forEach(function (btn) {
            btn.classList.remove("active");
          });
          toggleButton.classList.add("active");
        }
        return;
      }

      var segButton = event.target.closest(".seg button");
      if (segButton && !segButton.matches("[data-filter]")) {
        var seg = segButton.closest(".seg");
        seg.querySelectorAll("button").forEach(function (btn) {
          btn.classList.remove("active");
        });
        segButton.classList.add("active");
        return;
      }

      var stepBtn = event.target.closest("[data-step]");
      if (stepBtn) {
        stepValue(stepBtn);
        return;
      }

      var passwordBtn = event.target.closest("[data-password-toggle]");
      if (passwordBtn) {
        togglePassword(passwordBtn);
        return;
      }

      var switchEl = event.target.closest(".switch");
      if (switchEl) {
        switchEl.classList.toggle("active");
        switchEl.setAttribute(
          "aria-checked",
          switchEl.classList.contains("active") ? "true" : "false",
        );
        return;
      }

      var checkEl = event.target.closest(".check");
      if (checkEl) {
        setCheck(checkEl, !checkEl.classList.contains("active"));
        return;
      }

      var radioEl = event.target.closest(".radio");
      if (radioEl) {
        setRadio(radioEl);
        return;
      }

      var day = event.target.closest(".day,.d");
      if (day) {
        selectDay(day);
        return;
      }

      var star = event.target.closest(".rating span");
      if (star) {
        setRating(star);
        return;
      }

      var bar = event.target.closest(".bar-chart span");
      if (bar) {
        bar.parentElement.querySelectorAll("span").forEach(function (item) {
          item.classList.remove("active");
        });
        bar.classList.add("active");
        return;
      }

      var dropzone = event.target.closest(".dropzone");
      if (dropzone) {
        dropzone.classList.toggle("active");
        return;
      }

      var copyBtn = event.target.closest("[data-copy]");
      if (copyBtn) {
        var card = copyBtn.closest(".doc-card");
        if (card) {
          var preview = card.querySelector(".preview");
          if (preview) {
            copyText(preview.innerHTML, copyBtn);
          }
        }
        return;
      }

      var dismissBtn = event.target.closest("[data-dismiss]");
      if (dismissBtn) {
        dismissFrom(dismissBtn);
        return;
      }

      if (event.target.closest("#copyAll")) {
        var cards = els.gallery ? els.gallery.querySelectorAll(".preview") : [];
        var text = Array.from(cards)
          .map(function (preview) {
            return "<!-- component -->\n" + preview.innerHTML;
          })
          .join("\n\n");
        copyText(text, document.getElementById("copyAll"));
      }

      var demoButton = event.target.closest(".btn");
      if (demoButton) pulseButton(demoButton);

      var tabLine = event.target.closest(".tab-line button");
      if (tabLine) {
        tabLine
          .closest(".tab-line")
          .querySelectorAll("button")
          .forEach(function (btn) {
            btn.classList.remove("act");
          });
        tabLine.classList.add("act");
        return;
      }

      var tabPill = event.target.closest(".tab-pill button");
      if (tabPill) {
        tabPill
          .closest(".tab-pill")
          .querySelectorAll("button")
          .forEach(function (btn) {
            btn.classList.remove("act");
          });
        tabPill.classList.add("act");
        return;
      }

      var tabIcon = event.target.closest(".tab-icon button");
      if (tabIcon) {
        tabIcon
          .closest(".tab-icon")
          .querySelectorAll("button")
          .forEach(function (btn) {
            btn.classList.remove("act");
          });
        tabIcon.classList.add("act");
        return;
      }

      var tabV = event.target.closest(".tab-v button");
      if (tabV) {
        tabV
          .closest(".tab-v")
          .querySelectorAll("button")
          .forEach(function (btn) {
            btn.classList.remove("act");
          });
        tabV.classList.add("act");
        return;
      }

      var themeBtn = event.target.closest("[data-theme-key]");
        if (themeBtn) {
          applyTheme(themeBtn.dataset.themeKey);
          renderThemeToggles(themes, els.themeToggles);
          return;
        }
    });

    if (els.search) {
      els.search.addEventListener("input", function () {
        state.query = els.search.value;
        renderFn();
      });
    }

    document.addEventListener("input", function (event) {
      var range = event.target.closest('input[type="range"]');
      if (!range) return;
      var label =
        range.parentElement && range.parentElement.querySelector(".tiny");
      if (label) label.textContent = range.value + "%";
    });
  }

  // ═══════════════════════════════════════════════
  //  INIT
  // ═══════════════════════════════════════════════

  function render() {
    var groupList = groups(window.galleryItems);
    renderFilters(groupList, state, els.filters);
    var filtered = filteredItems(window.galleryItems);
    renderGallery(filtered, els.gallery);
  }

  function runTests() {
    try {
      console.assert(window.galleryItems.length >= 120, "gallery has many items");
      console.assert(
        document.querySelectorAll(".doc-card").length >= window.galleryItems.length,
        "all items render initially"
      );
      console.assert(
        document.querySelectorAll("[data-filter]").length > 10,
        "filters render"
      );
    } catch (e) {
      // Silently ignore test failures in production
    }
  }

  function init() {
    els.gallery = document.getElementById("gallery");
    els.filters = document.getElementById("filters");
    els.search = document.getElementById("search");
    els.themeToggles = document.getElementById("themeToggles");

    // Apply saved theme on start
    var saved = getSavedTheme();
    applyTheme(saved);

    render();
    renderThemeToggles(themes, els.themeToggles);
    bind(els, state, render);
    hydrateInteractive(document);
    runTests();
  }

  // ═══════════════════════════════════════════════
  //  EXPOSE & BOOT
  // ═══════════════════════════════════════════════

  window.CompactGalleryUI = {
    hydrate: hydrateInteractive,
    refreshIcons: refreshIcons,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
