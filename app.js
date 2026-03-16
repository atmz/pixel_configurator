// Pixel41 Tile Configurator — app.js

// ── Color Data (from pixel.41zero42.com API) ──────────────────────────────────

const COLORS = [
  { number: "01", name: "Red",        hex: "#c43a34", code: "4100799", grout: "KK 08 Argilla / MP 143 Terracotta" },
  { number: "02", name: "Lobster",    hex: "#c75732", code: "4100800", grout: "KK 08 Argilla / MP 143 Terracotta" },
  { number: "03", name: "Coral",      hex: "#c17858", code: "4100801", grout: "KK 08 Argilla / MP 143 Terracotta" },
  { number: "04", name: "Bordeaux",   hex: "#6d2a36", code: "4100802", grout: "KK 08 Argilla / MP 141 Caramel" },
  { number: "05", name: "Purple",     hex: "#361040", code: "4100803", grout: "KK 14 Biscotto / MP 141 Caramel" },
  { number: "06", name: "Violet",     hex: "#543145", code: "4100804", grout: "KK 14 Biscotto / MP 141 Caramel" },
  { number: "07", name: "Rose",       hex: "#f7e0d0", code: "4100805", grout: "KK 02 Avorio / MP 131 Vanilla" },
  { number: "08", name: "Strawberry", hex: "#ce978a", code: "4100806", grout: "KK 08 Argilla / MP 134 Silk" },
  { number: "09", name: "Blush",      hex: "#dba589", code: "4100807", grout: "KK 08 Argilla / MP 134 Silk" },
  { number: "10", name: "Nude",       hex: "#ddb08f", code: "4100808", grout: "KK 06 Sesamo / MP 134 Silk" },
  { number: "11", name: "Powder",     hex: "#e9d1b8", code: "4100809", grout: "KK 02 Avorio / MP 131 Vanilla" },
  { number: "12", name: "Terra",      hex: "#cba782", code: "4100810", grout: "KK 06 Sesamo / MP 134 Silk" },
  { number: "13", name: "Tobacco",    hex: "#966240", code: "4100811", grout: "KK 08 Argilla / MP 141 Caramel" },
  { number: "14", name: "Curry",      hex: "#c9aa6a", code: "4100812", grout: "KK 06 Sesamo / MP 134 Silk" },
  { number: "15", name: "Khaki",      hex: "#90833c", code: "4100813", grout: "KK 14 Biscotto / MP 141 Caramel" },
  { number: "16", name: "Lemon",      hex: "#feef8d", code: "4100814", grout: "KK 02 Avorio / MP 131 Vanilla" },
  { number: "17", name: "Vanilla",    hex: "#f3e8bc", code: "4100815", grout: "KK 02 Avorio / MP 131 Vanilla" },
  { number: "18", name: "Sand",       hex: "#ddccab", code: "4100816", grout: "KK 06 Sesamo / MP 134 Silk" },
  { number: "19", name: "Nut",        hex: "#dbc7ab", code: "4100817", grout: "KK 06 Sesamo / MP 134 Silk" },
  { number: "20", name: "Almond",     hex: "#f2ebe0", code: "4100818", grout: "KK 02 Avorio / MP 131 Vanilla" },
  { number: "21", name: "White",      hex: "#ffffff", code: "4100819", grout: "KK 01 Bianco / MP 100 White" },
  { number: "22", name: "Pearl",      hex: "#dedad3", code: "4100820", grout: "KK 02 Avorio / MP 131 Vanilla" },
  { number: "23", name: "Grey",       hex: "#b9b09c", code: "4100821", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "24", name: "Mud",        hex: "#b1a893", code: "4100822", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "25", name: "Black",      hex: "#050400", code: "4100823", grout: "KK 15 Grigio Scuro / MP 120 Black" },
  { number: "26", name: "Antrax",     hex: "#3e3d40", code: "4100824", grout: "KK 15 Grigio Scuro / MP 120 Black" },
  { number: "27", name: "Notte",      hex: "#465057", code: "4100825", grout: "KK 15 Grigio Scuro / MP 114 Anthracite" },
  { number: "28", name: "Ocean",      hex: "#003769", code: "4100826", grout: "KK 15 Grigio Scuro / MP 114 Anthracite" },
  { number: "29", name: "Tuareg",     hex: "#79a5d1", code: "4100827", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "30", name: "Pool",       hex: "#7fa8c5", code: "4100828", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "31", name: "Cerulean",   hex: "#8294a4", code: "4100829", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "32", name: "Cloud",      hex: "#90a2a6", code: "4100830", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "33", name: "Sky",        hex: "#a7b2ab", code: "4100831", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "34", name: "Celadon",    hex: "#9fab9f", code: "4100832", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "35", name: "Musk",       hex: "#8b9485", code: "4100833", grout: "KK 03 Grigio Perla / MP 114 Anthracite" },
  { number: "36", name: "Salvia",     hex: "#d2d4c5", code: "4100834", grout: "KK 02 Avorio / MP 131 Vanilla" },
  { number: "37", name: "Military",   hex: "#5b6555", code: "4100835", grout: "KK 15 Grigio Scuro / MP 114 Anthracite" },
  { number: "38", name: "Frog",       hex: "#819e79", code: "4100836", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "39", name: "Peacock",    hex: "#0b4a48", code: "4100837", grout: "KK 15 Grigio Scuro / MP 114 Anthracite" },
  { number: "40", name: "Marine",     hex: "#7fbdb2", code: "4100838", grout: "KK 03 Grigio Perla / MP 110 Manhattan" },
  { number: "41", name: "Mint",       hex: "#b4d2bc", code: "4100839", grout: "KK 02 Avorio / MP 131 Vanilla" },
];

// Packing constants
const TILES_PER_BOX = 28;
const SQM_PER_BOX = 0.37;
const KG_PER_BOX = 9.20;
const WASTE_FACTOR = 1.08; // 8% waste

// Grout color options
const GROUT_COLORS = [
  { name: "White",      hex: "#ffffff" },
  { name: "Ivory",      hex: "#f5f0e1" },
  { name: "Light Grey", hex: "#c8c8c8" },
  { name: "Pearl Grey", hex: "#a0a0a0" },
  { name: "Anthracite", hex: "#4a4a4a" },
  { name: "Black",      hex: "#1a1a1a" },
  { name: "Caramel",    hex: "#a0764a" },
  { name: "Terracotta", hex: "#b05a3a" },
];

// ── State ─────────────────────────────────────────────────────────────────────

let state = {
  cols: 6,
  rows: 6,
  grid: [],           // flat array of color indices (null = empty)
  selectedColor: 0,   // index into COLORS
  baseColor: 20,       // index into COLORS (default: White #21)
  tool: "paint",
  mode: "pattern", // "pattern" or "freeform"
  groutColor: "#c8c8c8",
  groutWidthMM: 3.5, // mm (recommended 3-4mm)

  previewW: 3.0,  // meters
  previewH: 3.0,
  painting: false,
};

// ── DOM refs ──────────────────────────────────────────────────────────────────

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const gridEl = $("#grid-container");
const paletteEl = $("#palette");
const colorInfoEl = $("#color-info");
const groutPaletteEl = $("#grout-palette");
const presetsEl = $("#presets");
const previewCanvas = $("#preview-canvas");
const previewCtx = previewCanvas.getContext("2d");

// ── Init ──────────────────────────────────────────────────────────────────────

function init() {
  buildPalette();
  buildGroutPalette();
  buildPresets();
  updateBaseUI();
  initGrid();
  bindEvents();
  applyMode();
}

function applyMode() {
  const isFreeform = state.mode === "freeform";
  $(".preview-section").classList.toggle("hidden", isFreeform);
  $("#grid-controls-tiles").classList.toggle("hidden", isFreeform);
  $("#freeform-dims").classList.toggle("hidden", !isFreeform);
  $(".editor-section h2").innerHTML = isFreeform
    ? 'Freeform Editor <span class="hint">Paint your exact surface</span>'
    : 'Pattern Editor <span class="hint">Click/drag to paint</span>';
  renderGrid();
}

// ── Palette ───────────────────────────────────────────────────────────────────

function buildPalette() {
  paletteEl.innerHTML = "";
  COLORS.forEach((c, i) => {
    const el = document.createElement("div");
    el.className = "swatch" + (i === state.selectedColor ? " selected" : "");
    el.style.backgroundColor = c.hex;
    // ensure light colors have a subtle border
    if (isLight(c.hex)) el.style.boxShadow = "inset 0 0 0 1px rgba(0,0,0,0.15)";
    el.title = `${c.number} ${c.name}`;
    el.dataset.index = i;
    el.addEventListener("click", () => selectColor(i));
    el.addEventListener("mouseenter", () => {
      colorInfoEl.textContent = `${c.number} ${c.name} — ${c.code}`;
    });
    el.addEventListener("mouseleave", () => {
      const sel = COLORS[state.selectedColor];
      colorInfoEl.textContent = `${sel.number} ${sel.name} — ${sel.code}`;
    });
    paletteEl.appendChild(el);
  });
  updateColorInfo();
}

function selectColor(i) {
  state.selectedColor = i;
  if (state.tool === "erase") state.tool = "paint";
  paletteEl.querySelectorAll(".swatch").forEach((el, idx) => {
    el.classList.toggle("selected", idx === i);
  });
  updateToolButtons();
  updateColorInfo();
}

function updateColorInfo() {
  const c = COLORS[state.selectedColor];
  colorInfoEl.textContent = `${c.number} ${c.name} — ${c.code}`;
}

function updateBaseUI() {
  const bc = COLORS[state.baseColor];
  $("#base-swatch").style.backgroundColor = bc.hex;
  if (isLight(bc.hex)) $("#base-swatch").style.boxShadow = "inset 0 0 0 1px rgba(0,0,0,0.15)";
  else $("#base-swatch").style.boxShadow = "none";
  $("#base-info").textContent = `${bc.number} ${bc.name}`;
}

function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 180;
}

// ── Grout Palette ─────────────────────────────────────────────────────────────

function buildGroutPalette() {
  groutPaletteEl.innerHTML = "";
  GROUT_COLORS.forEach((g) => {
    const el = document.createElement("div");
    el.className = "grout-swatch" + (g.hex === state.groutColor ? " selected" : "");
    el.style.backgroundColor = g.hex;
    if (isLight(g.hex)) el.style.boxShadow = "inset 0 0 0 1px rgba(0,0,0,0.15)";
    el.title = g.name;
    el.addEventListener("click", () => {
      state.groutColor = g.hex;
      groutPaletteEl.querySelectorAll(".grout-swatch").forEach((s) => {
        s.classList.toggle("selected", s.title === g.name);
      });
      applyGrout();
      renderPreview();
    });
    groutPaletteEl.appendChild(el);
  });
}

// Convert mm to display pixels (approximate: 1mm ≈ 1px at typical cell sizes)
function groutPx() {
  return Math.max(1, Math.round(state.groutWidthMM));
}

function applyGrout() {
  const px = groutPx();
  gridEl.style.gap = px + "px";
  gridEl.style.backgroundColor = state.groutColor;
  gridEl.style.padding = px + "px";
}

// ── Grid ──────────────────────────────────────────────────────────────────────

function initGrid() {
  const { cols, rows, baseColor } = state;
  state.grid = new Array(cols * rows).fill(baseColor);
  renderGrid();
}

function renderGrid() {
  const { cols, rows, mode } = state;
  gridEl.innerHTML = "";

  // In freeform mode, shrink cells to fit the available space
  let cellSize;
  if (mode === "freeform") {
    const gp = groutPx();
    const availW = (gridEl.parentElement.clientWidth || 600) - gp * (cols + 1);
    const availH = (window.innerHeight - 120) - gp * (rows + 1);
    cellSize = Math.max(8, Math.min(36, Math.floor(Math.min(availW / cols, availH / rows))));
  } else {
    cellSize = 36;
  }

  gridEl.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
  gridEl.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
  applyGrout();

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.idx = i;
    setCellColor(cell, i);
    gridEl.appendChild(cell);
  }
  if (mode === "pattern") renderPreview();
  updateGridDims();
  updateOrder();
}

function updateGridDims() {
  const { cols, rows } = state;
  const pitch = pitchCM();
  const wM = ((cols * pitch) / 100).toFixed(2);
  const hM = ((rows * pitch) / 100).toFixed(2);
  $("#grid-dims").textContent = `${cols} × ${rows} tiles — ${wM} × ${hM} m`;
}

function setCellColor(cell, idx) {
  const ci = state.grid[idx];
  cell.style.backgroundColor = ci !== null ? COLORS[ci].hex : COLORS[state.baseColor].hex;
}

function paintCell(idx) {
  const tool = state.tool;
  if (tool === "paint") {
    // Toggle: if already this color, set to base
    state.grid[idx] = (state.grid[idx] === state.selectedColor)
      ? state.baseColor
      : state.selectedColor;
  } else if (tool === "erase") {
    state.grid[idx] = state.baseColor;
  } else if (tool === "fill") {
    floodFill(idx, state.grid[idx], state.selectedColor);
  } else if (tool === "eyedrop") {
    if (state.grid[idx] !== null) {
      selectColor(state.grid[idx]);
      state.tool = "paint";
      updateToolButtons();
    }
    return;
  }
  refreshCells();
  renderPreview();
  updateOrder();
}

function floodFill(idx, target, replacement) {
  if (target === replacement) return;
  const { cols, rows } = state;
  const stack = [idx];
  const visited = new Set();
  while (stack.length) {
    const i = stack.pop();
    if (visited.has(i)) continue;
    if (state.grid[i] !== target) continue;
    visited.add(i);
    state.grid[i] = replacement;
    const r = Math.floor(i / cols);
    const c = i % cols;
    if (c > 0) stack.push(i - 1);
    if (c < cols - 1) stack.push(i + 1);
    if (r > 0) stack.push(i - cols);
    if (r < rows - 1) stack.push(i + cols);
  }
}

function refreshCells() {
  const cells = gridEl.querySelectorAll(".cell");
  cells.forEach((cell) => setCellColor(cell, +cell.dataset.idx));
}

// ── Tools ─────────────────────────────────────────────────────────────────────

function updateToolButtons() {
  $$(".tool-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tool === state.tool);
  });
}

// ── Presets ───────────────────────────────────────────────────────────────────

const PRESETS = [
  { name: "Checker", fn: checkerPreset },
  { name: "Stripes H", fn: stripesH },
  { name: "Stripes V", fn: stripesV },
  { name: "Diagonal", fn: diagonalPreset },
  { name: "Border", fn: borderPreset },
  { name: "Gradient", fn: gradientPreset },
];

function buildPresets() {
  presetsEl.innerHTML = "";
  PRESETS.forEach((p) => {
    const btn = document.createElement("button");
    btn.textContent = p.name;
    btn.addEventListener("click", () => {
      p.fn();
      refreshCells();
      renderPreview();
      updateOrder();
    });
    presetsEl.appendChild(btn);
  });
}

function checkerPreset() {
  const { cols } = state;
  const c1 = state.selectedColor;
  const c2 = (c1 + 20) % COLORS.length; // contrasting color
  state.grid = state.grid.map((_, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    return (r + c) % 2 === 0 ? c1 : c2;
  });
}

function stripesH() {
  const { cols } = state;
  const c1 = state.selectedColor;
  const c2 = (c1 + 20) % COLORS.length;
  state.grid = state.grid.map((_, i) => {
    const r = Math.floor(i / cols);
    return r % 2 === 0 ? c1 : c2;
  });
}

function stripesV() {
  const { cols } = state;
  const c1 = state.selectedColor;
  const c2 = (c1 + 20) % COLORS.length;
  state.grid = state.grid.map((_, i) => {
    const c = i % cols;
    return c % 2 === 0 ? c1 : c2;
  });
}

function diagonalPreset() {
  const { cols } = state;
  const c1 = state.selectedColor;
  const c2 = (c1 + 20) % COLORS.length;
  state.grid = state.grid.map((_, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    return (r + c) % 2 === 0 ? c1 : c2;
  });
}

function borderPreset() {
  const { cols, rows } = state;
  const c1 = state.selectedColor;
  state.grid = state.grid.map((_, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) return c1;
    return state.baseColor;
  });
}

function gradientPreset() {
  const { cols } = state;
  // pick a range of colors
  const start = state.selectedColor;
  state.grid = state.grid.map((_, i) => {
    const c = i % cols;
    const offset = Math.floor((c / cols) * 10);
    return (start + offset) % COLORS.length;
  });
}

// ── Tiled Preview ─────────────────────────────────────────────────────────────

// Real dimensions: tile 11.55cm, joint ~3.5mm
const TILE_CM = 11.55;

function pitchCM() {
  return TILE_CM + state.groutWidthMM / 10;
}

function renderPreview() {
  const { cols, rows, grid, groutColor, groutWidthMM, previewW, previewH } = state;

  // How many individual tiles fit in the requested area
  const tilesX = Math.ceil(previewW * 100 / pitchCM());
  const tilesY = Math.ceil(previewH * 100 / pitchCM());

  // Render at a size that fits the container, preserving aspect ratio
  const availW = previewCanvas.parentElement.clientWidth || 800;
  const gap = Math.max(1, Math.round(groutWidthMM * 0.5));
  const tileSize = Math.max(2, Math.floor((availW - (tilesX + 1) * gap) / tilesX));
  const totalW = tilesX * (tileSize + gap) + gap;
  const totalH = tilesY * (tileSize + gap) + gap;

  previewCanvas.width = totalW;
  previewCanvas.height = totalH;
  previewCanvas.style.width = availW + "px";
  previewCanvas.style.height = Math.round(totalH * (availW / totalW)) + "px";

  // grout background
  previewCtx.fillStyle = groutColor;
  previewCtx.fillRect(0, 0, totalW, totalH);

  // draw tiles, wrapping the pattern
  for (let ty = 0; ty < tilesY; ty++) {
    for (let tx = 0; tx < tilesX; tx++) {
      const pr = ty % rows;
      const pc = tx % cols;
      const ci = grid[pr * cols + pc];
      previewCtx.fillStyle = COLORS[ci !== null ? ci : state.baseColor].hex;
      previewCtx.fillRect(
        gap + tx * (tileSize + gap),
        gap + ty * (tileSize + gap),
        tileSize,
        tileSize
      );
    }
  }
}

// ── Order Summary ─────────────────────────────────────────────────────────────

function updateOrder() {
  saveToURL();
  const counts = {};
  state.grid.forEach((ci) => {
    if (ci === null) return;
    counts[ci] = (counts[ci] || 0) + 1;
  });

  const tbody = $("#order-body");
  const tfoot = $("#order-foot");
  const meta = $("#order-meta");
  const groutRec = $("#grout-recommendation");

  tbody.innerHTML = "";
  let totalTiles = 0;
  let totalBoxes = 0;
  const groutSets = new Set();
  const entries = Object.entries(counts).sort((a, b) => +a[0] - +b[0]);

  entries.forEach(([ci, count]) => {
    const color = COLORS[+ci];
    const tilesWithWaste = Math.ceil(count * WASTE_FACTOR);
    const boxes = Math.ceil(tilesWithWaste / TILES_PER_BOX);
    totalTiles += count;
    totalBoxes += boxes;
    groutSets.add(color.grout);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="swatch-cell" style="background:${color.hex}${isLight(color.hex) ? ';box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15)' : ''}"></span></td>
      <td>${color.number} ${color.name}</td>
      <td>${color.code}</td>
      <td>${count}</td>
      <td>${boxes}</td>
      <td>${color.grout}</td>
    `;
    tbody.appendChild(tr);
  });

  const totalSqm = (totalBoxes * SQM_PER_BOX).toFixed(2);
  const totalWeight = (totalBoxes * KG_PER_BOX).toFixed(1);

  tfoot.innerHTML = `
    <tr>
      <td colspan="3">Total</td>
      <td>${totalTiles}</td>
      <td>${totalBoxes} boxes</td>
      <td></td>
    </tr>
  `;

  const chosenGrout = GROUT_COLORS.find((g) => g.hex === state.groutColor);
  const chosenGroutName = chosenGrout ? chosenGrout.name : state.groutColor;

  meta.innerHTML = totalTiles > 0
    ? `Coverage: <strong>${totalSqm} m²</strong> &middot; Weight: <strong>${totalWeight} kg</strong> &middot; Joint: <strong>${state.groutWidthMM} mm</strong><br>Grout chosen: <strong>${chosenGroutName}</strong> <span class="swatch-cell" style="width:12px;height:12px;vertical-align:middle;background:${state.groutColor}${isLight(state.groutColor) ? ';box-shadow:inset 0 0 0 1px rgba(0,0,0,0.2)' : ''}"></span> &middot; Includes 8% waste factor for box calculation`
    : "Paint some tiles to see your order summary.";

  groutRec.innerHTML = groutSets.size > 0
    ? "<strong>Recommended grouts for colors used:</strong> " + [...groutSets].join(" &middot; ")
    : "";
}

// ── Export ─────────────────────────────────────────────────────────────────────

function exportPNG() {
  const { cols, rows, grid, groutColor, groutWidthMM } = state;
  const tileSize = 40;
  const gap = Math.max(1, Math.round(groutWidthMM));
  const w = cols * tileSize + (cols + 1) * gap;
  const h = rows * tileSize + (rows + 1) * gap;

  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = groutColor;
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < grid.length; i++) {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const ci = grid[i];
    ctx.fillStyle = COLORS[ci !== null ? ci : state.baseColor].hex;
    ctx.fillRect(
      gap + c * (tileSize + gap),
      gap + r * (tileSize + gap),
      tileSize,
      tileSize
    );
  }

  const link = document.createElement("a");
  link.download = "pixel41-pattern.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function exportCSV() {
  const counts = {};
  state.grid.forEach((ci) => {
    if (ci === null) return;
    counts[ci] = (counts[ci] || 0) + 1;
  });

  let csv = "Number,Name,Product Code,Hex,Tiles,Tiles+Waste,Boxes,Grout\n";
  Object.entries(counts)
    .sort((a, b) => +a[0] - +b[0])
    .forEach(([ci, count]) => {
      const color = COLORS[+ci];
      const tilesWaste = Math.ceil(count * WASTE_FACTOR);
      const boxes = Math.ceil(tilesWaste / TILES_PER_BOX);
      csv += `${color.number},${color.name},${color.code},${color.hex},${count},${tilesWaste},${boxes},"${color.grout}"\n`;
    });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.download = "pixel41-order.csv";
  link.href = URL.createObjectURL(blob);
  link.click();
  URL.revokeObjectURL(link.href);
}

// ── Event Binding ─────────────────────────────────────────────────────────────

function bindEvents() {
  // Set base color
  $("#set-base").addEventListener("click", () => {
    state.baseColor = state.selectedColor;
    updateBaseUI();
  });

  // Sidebar toggle
  $("#sidebar-toggle").addEventListener("click", () => {
    $(".sidebar").classList.toggle("collapsed");
  });

  // Grid painting
  gridEl.addEventListener("mousedown", (e) => {
    const cell = e.target.closest(".cell");
    if (!cell) return;
    e.preventDefault();
    state.painting = true;
    if (e.button === 2) {
      // right-click sets to base
      state.grid[+cell.dataset.idx] = state.baseColor;
      refreshCells();
      renderPreview();
      updateOrder();
    } else {
      paintCell(+cell.dataset.idx);
    }
  });

  gridEl.addEventListener("mousemove", (e) => {
    if (!state.painting) return;
    const cell = e.target.closest(".cell");
    if (!cell) return;
    const idx = +cell.dataset.idx;
    if (state.tool === "paint") {
      state.grid[idx] = state.selectedColor;
    } else if (state.tool === "erase") {
      state.grid[idx] = state.baseColor;
    }
    setCellColor(cell, idx);
    renderPreview();
    updateOrder();
  });

  document.addEventListener("mouseup", () => {
    state.painting = false;
  });

  gridEl.addEventListener("contextmenu", (e) => e.preventDefault());

  // Mode toggle
  $$(".mode-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.mode = btn.dataset.mode;
      $$(".mode-btn").forEach((b) => b.classList.toggle("active", b.dataset.mode === state.mode));
      applyMode();
    });
  });

  // Freeform meters apply
  $("#apply-meters").addEventListener("click", () => {
    const w = Math.min(5, Math.max(0.2, +$("#free-width").value || 1));
    const h = Math.min(5, Math.max(0.2, +$("#free-height").value || 1));
    $("#free-width").value = w;
    $("#free-height").value = h;
    const cols = Math.ceil(w * 100 / pitchCM());
    const rows = Math.ceil(h * 100 / pitchCM());
    state.cols = cols;
    state.rows = rows;
    initGrid();
  });

  // Tools
  $$(".tool-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tool = btn.dataset.tool;
      updateToolButtons();
    });
  });

  // Grid size
  $("#apply-size").addEventListener("click", () => {
    const cols = Math.min(32, Math.max(2, +$("#cols").value || 6));
    const rows = Math.min(32, Math.max(2, +$("#rows").value || 6));
    $("#cols").value = cols;
    $("#rows").value = rows;
    state.cols = cols;
    state.rows = rows;
    initGrid();
  });

  // Grout width
  $("#grout-width").addEventListener("input", (e) => {
    state.groutWidthMM = +e.target.value;
    $("#grout-width-label").textContent = e.target.value + " mm";
    applyGrout();
    renderPreview();
  });

  // Preview dimensions
  $("#preview-width").addEventListener("input", (e) => {
    state.previewW = Math.min(10, Math.max(0.5, +e.target.value || 2));
    renderPreview();
  });
  $("#preview-height").addEventListener("input", (e) => {
    state.previewH = Math.min(10, Math.max(0.5, +e.target.value || 2));
    renderPreview();
  });

  // Actions
  $("#clear-all").addEventListener("click", () => {
    state.grid.fill(state.baseColor);
    refreshCells();
    renderPreview();
    updateOrder();
  });

  $("#fill-all").addEventListener("click", () => {
    state.grid.fill(state.selectedColor);
    refreshCells();
    renderPreview();
    updateOrder();
  });

  $("#random-fill").addEventListener("click", () => {
    // pick 3-5 random colors for a nice random pattern
    const palette = [];
    const count = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < count; i++) {
      palette.push(Math.floor(Math.random() * COLORS.length));
    }
    state.grid = state.grid.map(() => palette[Math.floor(Math.random() * palette.length)]);
    refreshCells();
    renderPreview();
    updateOrder();
  });

  // Export
  $("#export-png").addEventListener("click", exportPNG);
  $("#export-csv").addEventListener("click", exportCSV);

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    switch (e.key.toLowerCase()) {
      case "p": state.tool = "paint"; updateToolButtons(); break;
      case "f": state.tool = "fill"; updateToolButtons(); break;
      case "e": state.tool = "erase"; updateToolButtons(); break;
      case "i": state.tool = "eyedrop"; updateToolButtons(); break;
    }
  });
}

// ── URL State (share via link) ────────────────────────────────────────────────

function saveToURL() {
  const { cols, rows, grid, groutColor, groutWidthMM } = state;
  // Encode grid as base64: each cell is a byte (0-40 = color index, 255 = empty)
  const bytes = new Uint8Array(grid.length);
  grid.forEach((ci, i) => { bytes[i] = ci !== null ? ci : 255; });
  const b64 = btoa(String.fromCharCode(...bytes));
  const params = new URLSearchParams();
  params.set("c", cols);
  params.set("r", rows);
  params.set("g", b64);
  params.set("gc", groutColor);
  params.set("gw", groutWidthMM);
  history.replaceState(null, "", "?" + params.toString());
}

function loadFromURL() {
  const params = new URLSearchParams(location.search);
  if (!params.has("g")) return false;
  const cols = Math.min(32, Math.max(2, +params.get("c") || 6));
  const rows = Math.min(32, Math.max(2, +params.get("r") || 6));
  const b64 = params.get("g");
  try {
    const str = atob(b64);
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);
    state.cols = cols;
    state.rows = rows;
    state.grid = Array.from(bytes).map((b) => b === 255 ? null : b);
    // pad or trim if size doesn't match
    const expected = cols * rows;
    if (state.grid.length < expected) {
      state.grid.push(...new Array(expected - state.grid.length).fill(null));
    } else if (state.grid.length > expected) {
      state.grid.length = expected;
    }
  } catch { return false; }
  if (params.has("gc")) state.groutColor = params.get("gc");
  if (params.has("gw")) state.groutWidthMM = +params.get("gw") || 3.5;
  $("#cols").value = state.cols;
  $("#rows").value = state.rows;
  $("#grout-width").value = state.groutWidthMM;
  $("#grout-width-label").textContent = state.groutWidthMM + " mm";
  return true;
}

// ── Start ─────────────────────────────────────────────────────────────────────

if (loadFromURL()) {
  buildPalette();
  buildGroutPalette();
  buildPresets();
  renderGrid();
  bindEvents();
} else {
  init();
}
