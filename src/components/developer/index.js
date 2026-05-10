import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
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
];
