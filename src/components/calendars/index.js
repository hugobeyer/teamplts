import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
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
];
