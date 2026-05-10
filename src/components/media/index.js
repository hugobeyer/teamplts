import { icon, button, chip, toggle } from '../../engine/helpers.js';

export default [
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
];
