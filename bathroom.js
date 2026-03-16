// bathroom.js — Pixel41 Bathroom Configurator

// ── Color Data (same as app.js) ───────────────────────────────────────────────

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

const NO_TILE = -1;

const TILES_PER_BOX = 28;
const SQM_PER_BOX = 0.37;
const KG_PER_BOX = 9.20;
const WASTE_FACTOR = 1.10; // 10% extra
const TILE_CM = 11.55;

// ── Room Geometry ─────────────────────────────────────────────────────────────

// Room: 2.70m (north-south, z) × 2.30m (east-west, x) × 3.00m (height, y)
// Coordinate system: x=east, y=up, z=north
// Origin at southwest floor corner: (0, 0, 0) = SW floor
// (2.30, 3.00, 2.70) = NE ceiling

const ROOM_X = 230; // east-west cm
const ROOM_Z = 270; // north-south cm
const ROOM_Y = 245; // height cm

function pitchCM() {
  return TILE_CM + state.groutWidthMM / 10;
}

// Surface definitions — each viewed from inside the room
// For walls: col 0 = left side as viewed from inside, row 0 = top (ceiling end)
// Obstructions in cm: x from left edge, y from FLOOR

const SURFACES = [
  {
    id: "floor", name: "Floor",
    widthCM: ROOM_X, heightCM: ROOM_Z,
    obstructions: [],
    // 3D mapping: surface lies on y=0 plane
    // col -> x direction, row -> z direction (row 0 = north end)
    to3D: (cx, cy) => [cx, 0, ROOM_Z - cy], // flip z so row 0 = north in editor
  },
  {
    id: "north", name: "North Wall",
    desc: "Window (100×100cm at 115cm height)",
    widthCM: ROOM_X, heightCM: ROOM_Y,
    obstructions: [
      // Window: centered horizontally, 100×100cm, bottom at 115cm from floor
      { type: "window", label: "Window", xCM: 65, yCM: 115, wCM: 100, hCM: 100 },
    ],
    // Viewed from inside (facing north): left=west(x=0), right=east(x=ROOM_X)
    // 3D: wall at z=ROOM_Z, x goes left to right, y goes up
    to3D: (cx, cy) => [cx, ROOM_Y - cy, ROOM_Z],
  },
  {
    id: "south", name: "South Wall",
    desc: "Door on left (east) side",
    widthCM: ROOM_X, heightCM: ROOM_Y,
    obstructions: [
      // Door on left side from inside perspective (facing south, left=east)
      // Viewing south wall from inside: left=east(x=ROOM_X), right=west(x=0)
      // So door at xCM=0 in editor coords means east end
      { type: "door", label: "Door", xCM: 0, yCM: 0, wCM: 80, hCM: 210 },
    ],
    // Viewed from inside (facing south): left=east(x=ROOM_X), right=west(x=0) — MIRRORED
    // 3D: wall at z=0, but x is mirrored
    to3D: (cx, cy) => [ROOM_X - cx, ROOM_Y - cy, 0],
  },
  {
    id: "east", name: "East Wall",
    desc: "Plain wall",
    widthCM: ROOM_Z, heightCM: ROOM_Y,
    obstructions: [],
    // Viewed from inside (facing east): left=north(z=ROOM_Z), right=south(z=0) — mirrored
    // 3D: wall at x=ROOM_X
    to3D: (cx, cy) => [ROOM_X, ROOM_Y - cy, ROOM_Z - cx],
  },
  {
    id: "west", name: "West Wall",
    desc: "Mirror (200×185cm from 115cm, south end)",
    widthCM: ROOM_Z, heightCM: ROOM_Y,
    obstructions: [
      // Mirror: 200cm wide, from 115cm to ceiling (185cm tall), flush with south wall
      // Viewed from inside (facing west): left=south(z=0), right=north(z=ROOM_Z)
      // So mirror starts at left (xCM=0), yCM=115 from floor
      { type: "mirror", label: "Mirror", xCM: 0, yCM: 115, wCM: 200, hCM: 185 },
    ],
    // Viewed from inside (facing west): left=south(z=0), right=north(z=ROOM_Z)
    // 3D: wall at x=0
    to3D: (cx, cy) => [0, ROOM_Y - cy, cx],
  },
];

// ── State ─────────────────────────────────────────────────────────────────────

let state = {
  selectedColor: 0,
  baseColor: 20, // White
  tool: "paint",
  groutColor: "#c8c8c8",
  groutWidthMM: 3.5,
  activeSurface: 0, // index into SURFACES
  painting: false,
  patternPainting: false,
  cameraYaw: -0.5,    // radians
  cameraPitch: -0.35, // looking slightly down
  surfaces: [],  // will be populated in init
  patCols: 2,
  patRows: 2,
  patGrid: [],   // pattern grid (color indices)
};

// ── DOM ───────────────────────────────────────────────────────────────────────

const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const gridEl = $("#surface-grid");
const paletteEl = $("#palette");
const colorInfoEl = $("#color-info");
const groutPaletteEl = $("#grout-palette");
const room3D = $("#room-3d");
const room3DCtx = room3D.getContext("2d");

// ── Init ──────────────────────────────────────────────────────────────────────

function init() {
  // Build surface grids
  SURFACES.forEach((surf) => {
    const pitch = pitchCM();
    const cols = Math.ceil(surf.widthCM / pitch);
    const rows = Math.ceil(surf.heightCM / pitch);
    const grid = new Array(cols * rows).fill(state.baseColor);

    // Build blocked mask
    const blocked = new Array(cols * rows).fill(false);
    surf.obstructions.forEach((obs) => {
      const c0 = Math.floor(obs.xCM / pitch);
      const c1 = Math.ceil((obs.xCM + obs.wCM) / pitch);
      // yCM is from floor; row 0 = top (ceiling), so convert
      const totalH = surf.heightCM;
      const rTop = Math.floor((totalH - obs.yCM - obs.hCM) / pitch);
      const rBot = Math.ceil((totalH - obs.yCM) / pitch);
      for (let r = Math.max(0, rTop); r < Math.min(rows, rBot); r++) {
        for (let c = Math.max(0, c0); c < Math.min(cols, c1); c++) {
          blocked[r * cols + c] = true;
          grid[r * cols + c] = null; // null = not tileable
        }
      }
    });

    state.surfaces.push({ cols, rows, grid, blocked });
  });

  buildPalette();
  buildGroutPalette();
  buildSurfaceTabs();
  buildRoomPresets();
  buildPatternPresets();
  updateBaseUI();
  initPattern();
  renderSurface();
  render3D();
  bindEvents();
}

// ── Palette ───────────────────────────────────────────────────────────────────

function buildPalette() {
  paletteEl.innerHTML = "";

  // "No Tile" swatch
  const noTile = document.createElement("div");
  noTile.className = "swatch no-tile-swatch" + (state.selectedColor === NO_TILE ? " selected" : "");
  noTile.title = "No Tile";
  noTile.addEventListener("click", () => selectColor(NO_TILE));
  noTile.addEventListener("mouseenter", () => { colorInfoEl.textContent = "No Tile — bare surface"; });
  noTile.addEventListener("mouseleave", () => updateColorInfo());
  paletteEl.appendChild(noTile);

  COLORS.forEach((c, i) => {
    const el = document.createElement("div");
    el.className = "swatch" + (i === state.selectedColor ? " selected" : "");
    el.style.backgroundColor = c.hex;
    if (isLight(c.hex)) el.style.boxShadow = "inset 0 0 0 1px rgba(0,0,0,0.15)";
    el.title = `${c.number} ${c.name}`;
    el.addEventListener("click", () => selectColor(i));
    el.addEventListener("mouseenter", () => {
      colorInfoEl.textContent = `${c.number} ${c.name} — ${c.code}`;
    });
    el.addEventListener("mouseleave", () => updateColorInfo());
    paletteEl.appendChild(el);
  });
  updateColorInfo();
}

function selectColor(i) {
  state.selectedColor = i;
  if (state.tool === "erase") state.tool = "paint";
  const swatches = paletteEl.querySelectorAll(".swatch");
  swatches.forEach((el, idx) => {
    const swatchIdx = idx === 0 ? NO_TILE : idx - 1;
    el.classList.toggle("selected", swatchIdx === i);
  });
  updateToolButtons();
  updateColorInfo();
}

function updateColorInfo() {
  if (state.selectedColor === NO_TILE) {
    colorInfoEl.textContent = "No Tile — bare surface";
  } else {
    const c = COLORS[state.selectedColor];
    colorInfoEl.textContent = `${c.number} ${c.name} — ${c.code}`;
  }
}

function updateBaseUI() {
  if (state.baseColor === NO_TILE) {
    $("#base-swatch").style.backgroundColor = "transparent";
    $("#base-swatch").className = "base-swatch no-tile-swatch";
    $("#base-info").textContent = "No Tile";
  } else {
    const bc = COLORS[state.baseColor];
    $("#base-swatch").className = "base-swatch";
    $("#base-swatch").style.backgroundColor = bc.hex;
    $("#base-swatch").style.boxShadow = isLight(bc.hex) ? "inset 0 0 0 1px rgba(0,0,0,0.15)" : "none";
    $("#base-info").textContent = `${bc.number} ${bc.name}`;
  }
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
      renderSurface();
      render3D();
    });
    groutPaletteEl.appendChild(el);
  });
}

// ── Surface Tabs ──────────────────────────────────────────────────────────────

function buildSurfaceTabs() {
  const tabs = $("#surface-tabs");
  const selector = $("#surface-selector");
  tabs.innerHTML = "";
  selector.innerHTML = "";
  SURFACES.forEach((surf, i) => {
    // Tabs above editor
    const tab = document.createElement("button");
    tab.textContent = surf.name;
    tab.className = i === state.activeSurface ? "active" : "";
    tab.addEventListener("click", () => switchSurface(i));
    tabs.appendChild(tab);

    // Sidebar selector
    const btn = document.createElement("button");
    btn.textContent = surf.name + (surf.desc ? ` — ${surf.desc}` : "");
    btn.className = i === state.activeSurface ? "active" : "";
    btn.addEventListener("click", () => switchSurface(i));
    selector.appendChild(btn);
  });
}

function switchSurface(i) {
  state.activeSurface = i;
  // Update tab active states
  $$("#surface-tabs button").forEach((b, idx) => b.classList.toggle("active", idx === i));
  $$("#surface-selector button").forEach((b, idx) => b.classList.toggle("active", idx === i));
  renderSurface();
}

// ── Surface Grid Editor ───────────────────────────────────────────────────────

function renderSurface() {
  const si = state.activeSurface;
  const surf = SURFACES[si];
  const sdata = state.surfaces[si];
  const { cols, rows, grid, blocked } = sdata;

  // Label
  const label = $("#surface-label");
  label.textContent = surf.name + (surf.desc ? ` — ${surf.desc}` : "");

  // Dims
  const pitch = pitchCM();
  const wM = (cols * pitch / 100).toFixed(2);
  const hM = (rows * pitch / 100).toFixed(2);
  const isFloor = surf.id === "floor";
  $("#surface-dims").textContent = `${cols} × ${rows} tiles — ${wM} × ${hM} m` +
    (isFloor ? "" : ` (h: ${hM} m)`);

  // Grid sizing: fit within viewport
  const availW = (gridEl.parentElement.clientWidth || 600);
  const availH = window.innerHeight - 200;
  const gp = Math.max(1, Math.round(state.groutWidthMM));
  const maxCellW = Math.floor((availW - gp * (cols + 1)) / cols);
  const maxCellH = Math.floor((availH - gp * (rows + 1)) / rows);
  const cellSize = Math.max(6, Math.min(28, Math.min(maxCellW, maxCellH)));

  gridEl.innerHTML = "";
  gridEl.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
  gridEl.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;
  gridEl.style.gap = gp + "px";
  gridEl.style.backgroundColor = state.groutColor;
  gridEl.style.padding = gp + "px";

  for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.className = "cell" + (blocked[i] ? " blocked" : "");
    cell.dataset.idx = i;
    if (grid[i] === NO_TILE) {
      cell.classList.add("no-tile-cell");
    } else if (grid[i] !== null) {
      cell.style.backgroundColor = COLORS[grid[i]].hex;
    } else {
      // Blocked: show obstruction color
      const obs = getObstructionAt(si, i);
      cell.style.backgroundColor = obs === "door" ? "#5a3e2a" :
                                    obs === "window" ? "#8ec8e8" :
                                    obs === "mirror" ? "#b8d4e8" : "#444";
    }
    gridEl.appendChild(cell);
  }

  updateOrder();
}

function getObstructionAt(si, idx) {
  const surf = SURFACES[si];
  const sdata = state.surfaces[si];
  const col = idx % sdata.cols;
  const row = Math.floor(idx / sdata.cols);
  const pitch = pitchCM();
  // Convert grid position back to cm
  const xCM = col * pitch;
  const yCMfromTop = row * pitch;
  const yCMfromFloor = surf.heightCM - yCMfromTop;

  for (const obs of surf.obstructions) {
    if (xCM >= obs.xCM && xCM < obs.xCM + obs.wCM &&
        yCMfromFloor >= obs.yCM && yCMfromFloor < obs.yCM + obs.hCM) {
      return obs.type;
    }
  }
  return null;
}

function refreshSurfaceCells() {
  const sdata = state.surfaces[state.activeSurface];
  gridEl.querySelectorAll(".cell").forEach((cell) => {
    const idx = +cell.dataset.idx;
    if (sdata.blocked[idx]) return;
    const ci = sdata.grid[idx];
    if (ci === NO_TILE) {
      cell.style.backgroundColor = "";
      cell.classList.add("no-tile-cell");
    } else {
      cell.classList.remove("no-tile-cell");
      cell.style.backgroundColor = COLORS[ci].hex;
    }
  });
}

// ── Paint Logic ───────────────────────────────────────────────────────────────

function paintCell(idx) {
  const sdata = state.surfaces[state.activeSurface];
  if (sdata.blocked[idx]) return;

  const tool = state.tool;
  if (tool === "paint") {
    sdata.grid[idx] = (sdata.grid[idx] === state.selectedColor)
      ? state.baseColor : state.selectedColor;
  } else if (tool === "erase") {
    sdata.grid[idx] = state.baseColor;
  } else if (tool === "fill") {
    floodFill(sdata, idx, sdata.grid[idx], state.selectedColor);
  } else if (tool === "eyedrop") {
    if (sdata.grid[idx] !== null) {
      selectColor(sdata.grid[idx]);
      state.tool = "paint";
      updateToolButtons();
    }
    return;
  }
  refreshSurfaceCells();
  render3D();
  updateOrder();
}

function floodFill(sdata, idx, target, replacement) {
  if (target === replacement) return;
  const { cols, rows, grid, blocked } = sdata;
  const stack = [idx];
  const visited = new Set();
  while (stack.length) {
    const i = stack.pop();
    if (visited.has(i) || blocked[i]) continue;
    if (grid[i] !== target) continue;
    visited.add(i);
    grid[i] = replacement;
    const r = Math.floor(i / cols);
    const c = i % cols;
    if (c > 0) stack.push(i - 1);
    if (c < cols - 1) stack.push(i + 1);
    if (r > 0) stack.push(i - cols);
    if (r < rows - 1) stack.push(i + cols);
  }
}

function updateToolButtons() {
  $$(".tool-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tool === state.tool);
  });
}

// ── 3D Room View ──────────────────────────────────────────────────────────────

function render3D() {
  const W = room3D.width;
  const H = room3D.height;
  const ctx = room3DCtx;

  ctx.fillStyle = "#1a1a2e";
  ctx.fillRect(0, 0, W, H);

  // Camera outside the room, looking in (cutaway view)
  const dist = 550;
  const yaw = state.cameraYaw;
  const pitch = state.cameraPitch;
  const centerX = ROOM_X / 2;
  const centerY = ROOM_Y / 3;
  const centerZ = ROOM_Z / 2;
  const camX = centerX - Math.sin(yaw) * dist;
  const camY = centerY - Math.sin(pitch) * dist;
  const camZ = centerZ - Math.cos(yaw) * dist;
  const fov = Math.min(W, H) * 1.2;

  const cosY = Math.cos(yaw), sinY = Math.sin(yaw);
  const cosP = Math.cos(pitch), sinP = Math.sin(pitch);

  function project(x, y, z) {
    const dx = x - camX;
    const dy = y - camY;
    const dz = z - camZ;
    const rx = dx * cosY - dz * sinY;
    const rz0 = dx * sinY + dz * cosY;
    const ry = dy * cosP - rz0 * sinP;
    const rz = dy * sinP + rz0 * cosP;
    if (rz < 0.5) return null;
    return { x: W / 2 + (rx / rz) * fov, y: H / 2 - (ry / rz) * fov, z: rz };
  }

  function drawQuad(pts, color) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  // Surface visibility: inward normals
  const surfaceVis = {
    floor: camY > 0,
    north: camZ < ROOM_Z,
    south: camZ > 0,
    east:  camX < ROOM_X,
    west:  camX > 0,
  };

  // Determine surface render order: sort by distance from camera to surface center (far first)
  const surfaceCenters = {
    floor:  [centerX, 0, centerZ],
    north:  [centerX, ROOM_Y / 2, ROOM_Z],
    south:  [centerX, ROOM_Y / 2, 0],
    east:   [ROOM_X, ROOM_Y / 2, centerZ],
    west:   [0, ROOM_Y / 2, centerZ],
  };

  const groutHex = state.groutColor;
  const pCM = pitchCM();
  const tileCM = TILE_CM;
  const halfG = state.groutWidthMM / 20;

  // Shell quads per surface (grout background)
  const shells = {
    floor: [[0, 0, 0], [ROOM_X, 0, 0], [ROOM_X, 0, ROOM_Z], [0, 0, ROOM_Z]],
    north: [[0, 0, ROOM_Z], [ROOM_X, 0, ROOM_Z], [ROOM_X, ROOM_Y, ROOM_Z], [0, ROOM_Y, ROOM_Z]],
    south: [[ROOM_X, 0, 0], [0, 0, 0], [0, ROOM_Y, 0], [ROOM_X, ROOM_Y, 0]],
    east:  [[ROOM_X, 0, ROOM_Z], [ROOM_X, 0, 0], [ROOM_X, ROOM_Y, 0], [ROOM_X, ROOM_Y, ROOM_Z]],
    west:  [[0, 0, 0], [0, 0, ROOM_Z], [0, ROOM_Y, ROOM_Z], [0, ROOM_Y, 0]],
  };

  // Build ordered list of visible surfaces, sorted back to front
  const visibleSurfaces = SURFACES
    .map((surf, si) => {
      if (!surfaceVis[surf.id]) return null;
      const sc = surfaceCenters[surf.id];
      const d = Math.hypot(sc[0] - camX, sc[1] - camY, sc[2] - camZ);
      return { surf, si, dist: d };
    })
    .filter(Boolean)
    .sort((a, b) => b.dist - a.dist);

  // Draw ceiling if camera is below it
  if (camY < ROOM_Y) {
    const ceilPts = [[0, ROOM_Y, 0], [ROOM_X, ROOM_Y, 0], [ROOM_X, ROOM_Y, ROOM_Z], [0, ROOM_Y, ROOM_Z]]
      .map((p) => project(...p));
    if (ceilPts.every(Boolean)) drawQuad(ceilPts, "#2a2a3a");
  }

  // Render each surface: shell first, then tiles
  visibleSurfaces.forEach(({ surf, si }) => {
    // Draw grout shell
    const shellPts = shells[surf.id];
    if (shellPts) {
      const projected = shellPts.map((p) => project(...p));
      if (projected.every(Boolean)) drawQuad(projected, groutHex);
    }

    // Draw tiles
    const sdata = state.surfaces[si];
    const { cols, rows, grid, blocked } = sdata;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const idx = r * cols + c;
        const ci = grid[idx];

        let color;
        if (ci === NO_TILE) continue;
        else if (ci !== null) color = COLORS[ci].hex;
        else {
          const obs = getObstructionAt(si, idx);
          color = obs === "door" ? "#5a3e2a" :
                  obs === "window" ? "#8ec8e8" :
                  obs === "mirror" ? "#d0e8f0" : "#444";
        }

        const x0 = c * pCM + halfG;
        const x1 = Math.min(c * pCM + tileCM + halfG, surf.widthCM);
        const y0 = r * pCM + halfG;
        const y1 = Math.min(r * pCM + tileCM + halfG, surf.heightCM);
        if (x1 <= x0 || y1 <= y0) continue; // tile fully outside

        const p0 = project(...surf.to3D(x0, y0));
        const p1 = project(...surf.to3D(x1, y0));
        const p2 = project(...surf.to3D(x1, y1));
        const p3 = project(...surf.to3D(x0, y1));

        if (!p0 || !p1 || !p2 || !p3) continue;
        drawQuad([p0, p1, p2, p3], color);
      }
    }
  });

  // Room edges
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  [
    [[0,0,0],[ROOM_X,0,0]], [[ROOM_X,0,0],[ROOM_X,0,ROOM_Z]],
    [[ROOM_X,0,ROOM_Z],[0,0,ROOM_Z]], [[0,0,ROOM_Z],[0,0,0]],
    [[0,ROOM_Y,0],[ROOM_X,ROOM_Y,0]], [[ROOM_X,ROOM_Y,0],[ROOM_X,ROOM_Y,ROOM_Z]],
    [[ROOM_X,ROOM_Y,ROOM_Z],[0,ROOM_Y,ROOM_Z]], [[0,ROOM_Y,ROOM_Z],[0,ROOM_Y,0]],
    [[0,0,0],[0,ROOM_Y,0]], [[ROOM_X,0,0],[ROOM_X,ROOM_Y,0]],
    [[ROOM_X,0,ROOM_Z],[ROOM_X,ROOM_Y,ROOM_Z]], [[0,0,ROOM_Z],[0,ROOM_Y,ROOM_Z]],
  ].forEach(([a, b]) => {
    const pa = project(...a);
    const pb = project(...b);
    if (!pa || !pb) return;
    ctx.beginPath();
    ctx.moveTo(pa.x, pa.y);
    ctx.lineTo(pb.x, pb.y);
    ctx.stroke();
  });
}

// ── Order Summary ─────────────────────────────────────────────────────────────

function updateOrder() {
  saveToURL();
  const counts = {};
  let totalTileable = 0;

  state.surfaces.forEach((sdata) => {
    sdata.grid.forEach((ci) => {
      if (ci === null || ci === NO_TILE) return;
      counts[ci] = (counts[ci] || 0) + 1;
      totalTileable++;
    });
  });

  const tbody = $("#order-body");
  const tfoot = $("#order-foot");
  const meta = $("#order-meta");

  tbody.innerHTML = "";
  let totalBoxes = 0;
  const groutSets = new Set();
  const entries = Object.entries(counts).sort((a, b) => +a[0] - +b[0]);

  entries.forEach(([ci, count]) => {
    const color = COLORS[+ci];
    const tilesNeeded = Math.ceil(count * WASTE_FACTOR);
    const boxes = Math.ceil(tilesNeeded / TILES_PER_BOX);
    const tilesInBoxes = boxes * TILES_PER_BOX;
    const surplusPct = ((tilesInBoxes / count - 1) * 100).toFixed(0);
    totalBoxes += boxes;
    groutSets.add(color.grout);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="swatch-cell" style="background:${color.hex}${isLight(color.hex) ? ';box-shadow:inset 0 0 0 1px rgba(0,0,0,0.15)' : ''}"></span></td>
      <td>${color.number} ${color.name}</td>
      <td>${count}</td>
      <td>${boxes} <span style="color:var(--text-muted);font-size:0.72rem">(${tilesInBoxes} pcs, +${surplusPct}%)</span></td>
      <td style="font-size:0.72rem">${color.grout}</td>
    `;
    tbody.appendChild(tr);
  });

  const totalSqm = (totalBoxes * SQM_PER_BOX).toFixed(2);
  const totalWeight = (totalBoxes * KG_PER_BOX).toFixed(1);
  const chosenGrout = GROUT_COLORS.find((g) => g.hex === state.groutColor);

  tfoot.innerHTML = totalTileable > 0 ? `<tr>
    <td colspan="2">Total</td>
    <td>${totalTileable}</td>
    <td>${totalBoxes}</td>
    <td></td>
  </tr>` : "";

  meta.innerHTML = totalTileable > 0
    ? `<strong>${totalSqm} m²</strong> &middot; <strong>${totalWeight} kg</strong> &middot; Joint: ${state.groutWidthMM} mm<br>Grout: <strong>${chosenGrout ? chosenGrout.name : "Custom"}</strong> &middot; Min 10% extra`
    : "Paint tiles to see order summary.";
}

// ── Export ─────────────────────────────────────────────────────────────────────

function exportPNG() {
  const link = document.createElement("a");
  link.download = "pixel41-bathroom.png";
  link.href = room3D.toDataURL("image/png");
  link.click();
}

// ── Pattern Editor ─────────────────────────────────────────────────────────────

const patGridEl = document.getElementById("pattern-grid");

function initPattern() {
  state.patGrid = new Array(state.patCols * state.patRows).fill(state.baseColor);
  renderPattern();
}

// Color indices
const W = 20, R = 0, C = 13, T = 28, M = 39, BK = 24, OC = 27, LM = 15;
const LOB = 1, COR = 2, TER = 11, TOB = 12, SND = 17, ALM = 19;
const GRY = 22, NOT = 26, POL = 29, CLD = 31, PCK = 38;
const VAN = 16, NUD = 9, PWD = 10, CER = 30, PRL = 21;

const PATTERN_PRESETS = [
  {
    name: "Tetris",
    cols: 10, rows: 10,
    // Scattered tetrominoes on white
    grid: [
      W,W,W,W,W,W,W,W,W,W,
      W,R,W,W,W,W,W,T,T,W,
      W,R,R,W,W,W,W,T,W,W,
      W,R,W,W,W,W,W,T,W,W,
      W,W,W,W,C,W,W,W,W,W,
      W,W,W,C,C,W,W,W,W,W,
      W,W,W,C,W,W,W,W,W,W,
      W,W,W,W,W,W,M,M,W,W,
      W,W,W,W,W,W,M,W,W,W,
      W,W,W,W,W,W,M,W,W,W,
    ],
  },
  {
    name: "Glider",
    cols: 8, rows: 8,
    // Conway's glider pattern, repeating — one in each accent color
    grid: [
      W,W,R,W,W,W,W,W,
      R,W,R,W,W,W,W,W,
      W,R,R,W,W,W,W,W,
      W,W,W,W,W,W,W,W,
      W,W,W,W,W,T,W,W,
      W,W,W,W,W,W,T,W,
      W,W,W,W,T,T,T,W,
      W,W,W,W,W,W,W,W,
    ],
  },
  {
    name: "Pulsar",
    cols: 8, rows: 8,
    // GOL-inspired symmetric cluster
    grid: [
      W,W,W,W,W,W,W,W,
      W,W,C,C,C,W,W,W,
      W,W,W,W,W,W,W,W,
      W,M,W,W,W,M,W,W,
      W,M,W,W,W,M,W,W,
      W,W,W,W,W,W,W,W,
      W,W,T,T,T,W,W,W,
      W,W,W,W,W,W,W,W,
    ],
  },
  {
    name: "Crosses",
    cols: 6, rows: 6,
    grid: [
      W,W,R,W,W,W,
      W,R,R,R,W,W,
      W,W,R,W,W,W,
      W,W,W,W,W,M,
      W,W,W,W,M,M,
      W,W,W,W,W,M,
    ],
  },
  {
    name: "Paths",
    cols: 8, rows: 8,
    // Meandering L-shaped paths
    grid: [
      T,T,W,W,W,W,W,W,
      W,T,W,W,W,W,W,W,
      W,T,T,W,W,W,W,W,
      W,W,W,W,W,W,W,W,
      W,W,W,W,W,R,R,W,
      W,W,W,W,W,W,R,W,
      W,W,W,W,W,W,R,R,
      W,W,W,W,W,W,W,W,
    ],
  },
  {
    name: "Scatter",
    cols: 7, rows: 7,
    // Sparse diagonal scatter
    grid: [
      R,W,W,W,W,W,W,
      W,W,W,W,W,W,W,
      W,W,T,W,W,W,W,
      W,W,W,W,W,W,W,
      W,W,W,W,C,W,W,
      W,W,W,W,W,W,W,
      W,W,W,W,W,W,M,
    ],
  },
  {
    name: "Dash",
    cols: 6, rows: 6,
    // Horizontal dashes, staggered
    grid: [
      W,R,R,W,W,W,
      W,W,W,W,W,W,
      W,W,W,W,T,T,
      W,W,W,W,W,W,
      W,W,C,C,W,W,
      W,W,W,W,W,W,
    ],
  },
  {
    name: "Domino",
    cols: 5, rows: 5,
    // Scattered dominoes (2-tile pieces)
    grid: [
      W,W,W,W,W,
      W,M,M,W,W,
      W,W,W,W,W,
      W,W,W,R,W,
      W,W,W,R,W,
    ],
  },
  {
    name: "Pixel Rain",
    cols: 6, rows: 8,
    // Falling single tiles, staggered columns
    grid: [
      W,W,W,W,W,W,
      R,W,W,W,W,W,
      W,W,W,T,W,W,
      W,W,W,W,W,W,
      W,W,W,W,W,M,
      W,C,W,W,W,W,
      W,W,W,W,W,W,
      W,W,W,W,R,W,
    ],
  },
  {
    name: "Zigzag",
    cols: 6, rows: 4,
    grid: [
      T,W,W,W,W,W,
      W,T,W,W,W,W,
      W,W,W,W,R,W,
      W,W,W,W,W,R,
    ],
  },
  {
    name: "Cyprus",
    cols: 6, rows: 6,
    // Warm terracotta/sand village stone
    grid: [
      SND,TER,SND,COR,SND,TER,
      TER,TOB,TER,SND,TER,SND,
      SND,SND,TER,TER,COR,TER,
      COR,TER,SND,TOB,SND,SND,
      TER,SND,COR,SND,TER,TOB,
      SND,TER,TER,SND,SND,TER,
    ],
  },
];

function loadPreset(preset) {
  state.patCols = preset.cols;
  state.patRows = preset.rows;
  state.patGrid = [...preset.grid];
  $("#pat-cols").value = preset.cols;
  $("#pat-rows").value = preset.rows;
  renderPattern();
}

// ── Room Presets (whole bathroom) ──────────────────────────────────────────────

// Helper: fill a surface grid with a function(col, row, cols, rows) => colorIndex
function fillSurface(si, fn) {
  const sdata = state.surfaces[si];
  const { cols, rows, grid, blocked } = sdata;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      if (blocked[idx]) continue;
      grid[idx] = fn(c, r, cols, rows);
    }
  }
}

// Helper: tile a small pattern across a surface
function tileSurface(si, pat, patCols, patRows) {
  fillSurface(si, (c, r) => pat[(r % patRows) * patCols + (c % patCols)]);
}

// Helper: height from floor in rows (row 0 = ceiling for walls)
function rowFromFloor(r, rows) { return rows - 1 - r; }

const ROOM_PRESETS = [
  {
    name: "Classic",
    desc: "White walls, checkerboard floor",
    apply() {
      // Walls: all white
      for (let si = 1; si < 5; si++) fillSurface(si, () => W);
      // Floor: checkerboard white + curry
      fillSurface(0, (c, r) => (c + r) % 2 === 0 ? W : C);
    },
  },
  {
    name: "Wainscot",
    desc: "Marine lower third, white above",
    apply() {
      // Walls: bottom ~100cm in Marine, rest white
      const pitch = pitchCM();
      const cutRow = Math.floor(100 / pitch); // rows from floor
      for (let si = 1; si < 5; si++) {
        const rows = state.surfaces[si].rows;
        fillSurface(si, (c, r, cols, rows) => {
          return rowFromFloor(r, rows) < cutRow ? M : W;
        });
      }
      // Floor: white
      fillSurface(0, () => W);
    },
  },
  {
    name: "Band",
    desc: "Accent stripe at eye height",
    apply() {
      const pitch = pitchCM();
      const bandLow = Math.floor(120 / pitch);  // ~120cm from floor
      const bandHigh = Math.floor(140 / pitch);  // ~140cm
      for (let si = 1; si < 5; si++) {
        const rows = state.surfaces[si].rows;
        fillSurface(si, (c, r, cols, rows) => {
          const rf = rowFromFloor(r, rows);
          return (rf >= bandLow && rf < bandHigh) ? T : W;
        });
      }
      fillSurface(0, () => W);
    },
  },
  {
    name: "Confetti",
    desc: "Sparse random accents everywhere",
    apply() {
      const accents = [R, C, T, M];
      function confetti(c, r, cols, rows) {
        // Deterministic pseudo-random based on position
        const hash = ((c * 7919 + r * 104729) % 100);
        if (hash < 5) return accents[hash % 4];
        return W;
      }
      for (let si = 0; si < 5; si++) fillSurface(si, confetti);
    },
  },
  {
    name: "Tetris Bath",
    desc: "Scattered tetrominoes on white",
    apply() {
      // Tetromino shapes relative to anchor (dr, dc)
      const pieces = [
        { color: R, cells: [[0,0],[0,1],[0,2],[1,0]] },         // L
        { color: C, cells: [[0,0],[1,0],[1,1],[1,2]] },         // J
        { color: T, cells: [[0,0],[0,1],[1,1],[1,2]] },         // S
        { color: M, cells: [[0,0],[0,1],[0,2],[0,3]] },         // I
        { color: R, cells: [[0,0],[0,1],[1,0],[1,1]] },         // O
        { color: T, cells: [[0,1],[1,0],[1,1],[1,2]] },         // T
        { color: C, cells: [[0,0],[0,1],[1,1],[1,2]] },         // Z (alt)
      ];
      for (let si = 0; si < 5; si++) {
        fillSurface(si, () => W);
        const sdata = state.surfaces[si];
        const { cols, rows, grid, blocked } = sdata;
        // Place pieces pseudo-randomly
        let seed = si * 9973;
        for (let attempt = 0; attempt < 40; attempt++) {
          seed = (seed * 1103515245 + 12345) & 0x7fffffff;
          const piece = pieces[seed % pieces.length];
          seed = (seed * 1103515245 + 12345) & 0x7fffffff;
          const ar = seed % rows;
          seed = (seed * 1103515245 + 12345) & 0x7fffffff;
          const ac = seed % cols;
          // Check if piece fits
          const canPlace = piece.cells.every(([dr, dc]) => {
            const pr = ar + dr, pc = ac + dc;
            if (pr >= rows || pc >= cols) return false;
            const idx = pr * cols + pc;
            return !blocked[idx] && grid[idx] === W;
          });
          if (canPlace) {
            piece.cells.forEach(([dr, dc]) => {
              grid[(ar + dr) * cols + (ac + dc)] = piece.color;
            });
          }
        }
      }
    },
  },
  {
    name: "Life",
    desc: "Conway's Game of Life clusters",
    apply() {
      // GOL-style organic clusters, different accent per surface
      const surfColors = [C, R, T, M, R];
      for (let si = 0; si < 5; si++) {
        fillSurface(si, () => W);
        const sdata = state.surfaces[si];
        const { cols, rows, grid, blocked } = sdata;
        const color = surfColors[si];
        // Seed some cells, then run one GOL step for organic shapes
        const alive = new Set();
        let seed = si * 31337;
        for (let i = 0; i < cols * rows * 0.08; i++) {
          seed = (seed * 1103515245 + 12345) & 0x7fffffff;
          alive.add(seed % (cols * rows));
        }
        // One GOL step
        const next = new Set();
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            const idx = r * cols + c;
            let neighbors = 0;
            for (let dr = -1; dr <= 1; dr++) {
              for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                  if (alive.has(nr * cols + nc)) neighbors++;
                }
              }
            }
            if (alive.has(idx) ? (neighbors === 2 || neighbors === 3) : neighbors === 3) {
              next.add(idx);
            }
          }
        }
        next.forEach((idx) => {
          if (!blocked[idx]) grid[idx] = color;
        });
      }
    },
  },
  {
    name: "Grid Lines",
    desc: "Thin accent grid every 5 tiles",
    apply() {
      const spacing = 5;
      for (let si = 0; si < 5; si++) {
        const accent = si % 2 === 0 ? T : M;
        fillSurface(si, (c, r) => (c % spacing === 0 || r % spacing === 0) ? accent : W);
      }
    },
  },
  {
    name: "Feature Wall",
    desc: "Bold north wall, rest minimal",
    apply() {
      // North wall (index 1): bold pattern
      tileSurface(1, [
        T,W,W,W,M,W,W,W,
        W,W,W,W,W,W,W,W,
        W,W,R,W,W,W,C,W,
        W,W,W,W,W,W,W,W,
        M,W,W,W,T,W,W,W,
        W,W,W,W,W,W,W,W,
        W,W,C,W,W,W,R,W,
        W,W,W,W,W,W,W,W,
      ], 8, 8);
      // Other walls: white
      fillSurface(2, () => W);
      fillSurface(3, () => W);
      fillSurface(4, () => W);
      // Floor: subtle
      fillSurface(0, (c, r) => ((c + r) % 7 === 0) ? T : W);
    },
  },
  {
    name: "Gradient",
    desc: "Colors shift across walls and floor",
    apply() {
      // Rich gradient: Ocean → Tuareg → Marine → White → Lemon → Curry → Red
      const palette = [OC, OC, T, T, M, M, W, W, W, LM, LM, C, C, R, R];
      for (let si = 1; si < 5; si++) {
        fillSurface(si, (c, r, cols) => {
          const idx = Math.floor((c / cols) * palette.length);
          return palette[Math.min(idx, palette.length - 1)];
        });
      }
      // Floor: diagonal gradient
      fillSurface(0, (c, r, cols, rows) => {
        const t = (c / cols + r / rows) / 2;
        const idx = Math.floor(t * palette.length);
        return palette[Math.min(idx, palette.length - 1)];
      });
    },
  },
  {
    name: "Mondrian",
    desc: "Color-block composition with black outlines",
    apply() {
      for (let si = 0; si < 5; si++) {
        const sdata = state.surfaces[si];
        const { cols, rows } = sdata;
        // Grid lines positions (asymmetric, like real Mondrian)
        const h1 = Math.floor(rows * 0.38);
        const h2 = Math.floor(rows * 0.72);
        const w1 = Math.floor(cols * 0.32);
        const w2 = Math.floor(cols * 0.58);
        const w3 = Math.floor(cols * 0.82);
        fillSurface(si, (c, r) => {
          // Black grid lines (2 tiles thick for visibility)
          const onHLine = (r >= h1 && r < h1 + 2) || (r >= h2 && r < h2 + 2);
          const onVLine = (c >= w1 && c < w1 + 2) || (c >= w2 && c < w2 + 2) || (c >= w3 && c < w3 + 2);
          if (onHLine || onVLine) return BK;
          // Color blocks
          if (r < h1 && c < w1) return R;               // top-left: red
          if (r < h1 && c >= w2 + 2 && c < w3) return T; // top-mid-right: tuareg
          if (r >= h2 + 2 && c < w1) return OC;          // bottom-left: ocean
          if (r >= h1 + 2 && r < h2 && c >= w3 + 2) return C; // mid-right: curry
          if (r >= h2 + 2 && c >= w2 + 2 && c < w3) return M; // bottom-mid: marine
          if (r >= h2 + 2 && c >= w3 + 2) return LM;     // bottom-right: lemon
          return W;
        });
      }
    },
  },
  {
    name: "Golden Gate",
    desc: "International Orange, steel cables, Bay fog",
    apply() {
      // Walls: red/lobster body, black vertical cable lines, fog gradient at top
      for (let si = 1; si < 5; si++) {
        const sdata = state.surfaces[si];
        const { cols, rows } = sdata;
        // Cable spacing
        const cableSpacing = Math.max(4, Math.floor(cols / 5));
        fillSurface(si, (c, r, cols, rows) => {
          const rf = rowFromFloor(r, rows);
          const heightPct = rf / rows;
          // Fog at the top — gradient from bridge into grey/white
          if (heightPct > 0.85) return W;
          if (heightPct > 0.78) return CLD;
          if (heightPct > 0.72) return GRY;
          // Vertical cable lines
          if (c % cableSpacing === 0) return BK;
          // Bridge body — mix of red and lobster for depth
          if ((c + r) % 7 === 0) return LOB;
          return R;
        });
      }
      // Floor: dark steel deck
      fillSurface(0, (c, r) => {
        if (c % 6 === 0) return BK; // deck rivets/lines
        if ((c + r) % 3 === 0) return NOT;
        return GRY;
      });
    },
  },
  {
    name: "Cyprus",
    desc: "Terracotta floor fading into walls, Tuareg north",
    apply() {
      cyprusFloor();
      // North wall: cyprus base fading to Tuareg
      cyprusWallBase(1, T);
      // Other walls: cyprus base fading to white
      cyprusWallBase(2, W);
      cyprusWallBase(3, W);
      cyprusWallBase(4, W);
    },
  },
];

// ── Beach Themes ──────────────────────────────────────────────────────────────

// Shared: Cyprus floor (rotated 90°)
function cyprusTile(c, r) {
  const v = (r * 13 + c * 17) % 12;
  if (v < 1) return TOB;
  if (v < 4) return TER;
  if (v < 6) return COR;
  return SND;
}

function cyprusFloor() {
  fillSurface(0, (c, r) => cyprusTile(c, r));
}

// Cyprus pattern fading into wall color over 3 rows from the floor
function cyprusWallBase(si, fadeToColor) {
  fillSurface(si, (c, r, cols, rows) => {
    const rf = rowFromFloor(r, rows);
    if (rf < 2) return cyprusTile(c, r);
    if (rf === 2) {
      // ~40% still cyprus
      return ((c * 7 + r * 3) % 10) < 4 ? cyprusTile(c, r) : fadeToColor;
    }
    if (rf === 3) {
      // ~15% cyprus
      return ((c * 11 + r * 5) % 10) < 2 ? cyprusTile(c, r) : fadeToColor;
    }
    return fadeToColor;
  });
}

// Draw a sun (circle + optional rays) on a surface
// cx, cy = center in grid coords, radius in tiles
function drawSun(si, cx, cy, radius, coreColor, midColor, outerColor, rayColor) {
  const sdata = state.surfaces[si];
  const { cols, rows, grid, blocked } = sdata;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      if (blocked[idx]) continue;
      const dx = c - cx;
      const dy = r - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius * 0.4) {
        grid[idx] = coreColor;
      } else if (dist < radius * 0.7) {
        grid[idx] = midColor;
      } else if (dist < radius) {
        grid[idx] = outerColor;
      } else if (rayColor !== null && dist < radius * 1.6) {
        // Rays: 8 directions
        const angle = Math.atan2(dy, dx);
        const sector = ((angle / Math.PI * 4) + 8) % 8;
        if (Math.abs(sector - Math.round(sector)) < 0.25) {
          grid[idx] = rayColor;
        }
      }
    }
  }
}

// Sea fade on north wall: deep at bottom, light at top
function seaFade(si, colors) {
  // colors = array from deep (bottom) to light (top/sky)
  fillSurface(si, (c, r, cols, rows) => {
    const rf = rowFromFloor(r, rows);
    const t = rf / rows; // 0 = floor, 1 = ceiling
    const idx = Math.floor(t * colors.length);
    // Add some wave noise
    const wave = Math.sin(c * 0.8 + rf * 0.3) * 0.5;
    const adjIdx = Math.max(0, Math.min(colors.length - 1, Math.round(idx + wave)));
    return colors[adjIdx];
  });
}

const BEACH_THEMES = [
  {
    // Beach Day — bright vivid blue, bold sun
    name: "Beach Day",
    apply() {
      cyprusFloor();
      // North wall: vivid sea fade
      seaFade(1, [OC, OC, OC, T, T, POL, POL, CLD, CLD, W, W, W]);
      // South wall: warm sandy
      fillSurface(2, (c, r, cols, rows) => {
        const rf = rowFromFloor(r, rows);
        return rf < 3 ? SND : (rf < 5 ? ALM : W);
      });
      // East wall: sun
      fillSurface(3, () => W);
      const es = state.surfaces[3];
      const sunCX = Math.floor(es.cols * 0.4);
      const sunCY = Math.floor(es.rows * 0.35);
      drawSun(3, sunCX, sunCY, 4, LM, VAN, C, SND);
      // West wall: clean white with subtle sand at base
      fillSurface(4, (c, r, cols, rows) => {
        return rowFromFloor(r, rows) < 2 ? SND : W;
      });
    },
  },
  {
    // Sunset — warm horizon, amber glow
    name: "Sunset",
    apply() {
      cyprusFloor();
      // North wall: sunset sea — warm oranges fading through blue
      seaFade(1, [OC, OC, NOT, NOT, T, CER, COR, LOB, LOB, NUD, VAN, W]);
      // South wall: warm gradient
      fillSurface(2, (c, r, cols, rows) => {
        const rf = rowFromFloor(r, rows);
        if (rf < 2) return TER;
        if (rf < 4) return SND;
        if (rf < 6) return NUD;
        return (rf < rows - 2) ? W : VAN;
      });
      // East wall: amber sun
      fillSurface(3, (c, r, cols, rows) => {
        return rowFromFloor(r, rows) < 2 ? SND : W;
      });
      const es2 = state.surfaces[3];
      drawSun(3, Math.floor(es2.cols * 0.4), Math.floor(es2.rows * 0.35), 5, LOB, C, NUD, VAN);
      // West wall: ambient warm
      fillSurface(4, (c, r, cols, rows) => {
        return rowFromFloor(r, rows) < 3 ? SND : ((c + r) % 11 === 0 ? VAN : W);
      });
    },
  },
  {
    // Aegean — deep blues, golden disc
    name: "Aegean",
    apply() {
      cyprusFloor();
      // North wall: deep ocean
      seaFade(1, [OC, OC, OC, OC, NOT, T, T, POL, CER, CLD, W, W]);
      // South & West: white with ocean base
      for (const si of [2, 4]) {
        fillSurface(si, (c, r, cols, rows) => {
          const rf = rowFromFloor(r, rows);
          if (rf < 2) return OC;
          if (rf < 4) return T;
          return W;
        });
      }
      // East wall: golden sun disc, no rays — cleaner
      fillSurface(3, (c, r, cols, rows) => {
        return rowFromFloor(r, rows) < 3 ? T : W;
      });
      const es3 = state.surfaces[3];
      drawSun(3, Math.floor(es3.cols * 0.4), Math.floor(es3.rows * 0.35), 4, C, VAN, SND, null);
    },
  },
  {
    // Dusk — moody dark blues, coral sky
    name: "Dusk",
    apply() {
      cyprusFloor();
      // North wall: dark moody sea with coral/pink horizon
      seaFade(1, [BK, OC, OC, NOT, NOT, OC, COR, COR, LOB, NUD, PWD, PRL]);
      // South & West: subtle dusk
      for (const si of [2, 4]) {
        fillSurface(si, (c, r, cols, rows) => {
          const rf = rowFromFloor(r, rows);
          if (rf < 2) return NOT;
          if (rf < 4) return CER;
          return ((c + r * 3) % 17 === 0) ? PWD : W;
        });
      }
      // East wall: low warm glow
      fillSurface(3, (c, r, cols, rows) => {
        return rowFromFloor(r, rows) < 2 ? NOT : W;
      });
      const es4 = state.surfaces[3];
      drawSun(3, Math.floor(es4.cols * 0.4), Math.floor(es4.rows * 0.35), 3, LOB, COR, NUD, null);
    },
  },
  {
    // Minimal — clean, just a hint
    name: "Minimal",
    apply() {
      cyprusFloor();
      // North wall: very subtle — just a few blue rows at the bottom
      fillSurface(1, (c, r, cols, rows) => {
        const rf = rowFromFloor(r, rows);
        if (rf < 1) return T;
        if (rf < 3) return POL;
        if (rf < 4) return CLD;
        return W;
      });
      // Other walls: all white, sand base course
      for (const si of [2, 4]) {
        fillSurface(si, (c, r, cols, rows) => {
          return rowFromFloor(r, rows) < 1 ? SND : W;
        });
      }
      // East wall: tiny sun accent — just 3 Lemon tiles in a cluster
      fillSurface(3, (c, r, cols, rows) => {
        return rowFromFloor(r, rows) < 1 ? SND : W;
      });
      const es5 = state.surfaces[3];
      const { cols, rows, grid, blocked } = es5;
      const cx = Math.floor(cols * 0.4);
      const cy = Math.floor(rows * 0.35);
      [[0,0],[0,1],[1,0]].forEach(([dr, dc]) => {
        const idx = (cy + dr) * cols + (cx + dc);
        if (idx >= 0 && idx < grid.length && !blocked[idx]) grid[idx] = LM;
      });
    },
  },
];

// ── Lines Themes ──────────────────────────────────────────────────────────────

// Helper: draw a line on a surface grid (Bresenham)
function drawLine(si, c0, r0, c1, r1, color) {
  const sdata = state.surfaces[si];
  const { cols, rows, grid, blocked } = sdata;
  let dc = Math.abs(c1 - c0), dr = Math.abs(r1 - r0);
  let sc = c0 < c1 ? 1 : -1, sr = r0 < r1 ? 1 : -1;
  let err = dc - dr;
  let c = c0, r = r0;
  while (true) {
    const idx = r * cols + c;
    if (r >= 0 && r < rows && c >= 0 && c < cols && !blocked[idx]) {
      grid[idx] = color;
    }
    if (c === c1 && r === r1) break;
    const e2 = 2 * err;
    if (e2 > -dr) { err -= dr; c += sc; }
    if (e2 < dc) { err += dc; r += sr; }
  }
}

// Helper: draw a thick line (line + neighbors)
function drawThickLine(si, c0, r0, c1, r1, color, thickness) {
  for (let d = -Math.floor(thickness / 2); d <= Math.floor(thickness / 2); d++) {
    const isHoriz = Math.abs(c1 - c0) > Math.abs(r1 - r0);
    if (isHoriz) drawLine(si, c0, r0 + d, c1, r1 + d, color);
    else drawLine(si, c0 + d, r0, c1 + d, r1, color);
  }
}

const LINES_THEMES = [
  {
    name: "Pathways",
    apply() {
      // White base everywhere
      for (let si = 0; si < 5; si++) fillSurface(si, () => W);
      cyprusFloor();

      const floorData = state.surfaces[0];
      const fc = floorData.cols, fr = floorData.rows;

      // Door is on south wall (east side). Entry point on floor: SE corner
      const doorC = fc - 3, doorR = fr - 1;

      // Red path: door → straight north across floor → up north wall
      for (let r = 0; r < fr; r++) {
        const idx = r * fc + doorC;
        if (!floorData.blocked[idx]) floorData.grid[idx] = R;
      }
      // Continue up north wall (index 1) — col position maps to same x
      const nw = state.surfaces[1];
      for (let r = 0; r < nw.rows; r++) {
        const idx = r * nw.cols + doorC;
        if (!nw.blocked[idx]) nw.grid[idx] = R;
      }

      // Tuareg path: door → west across floor → up west wall
      const turnR = fr - 4;
      drawLine(0, doorC, doorR, doorC, turnR, T);
      drawLine(0, doorC, turnR, 0, turnR, T);
      // Up west wall — turnR maps to a z-position on the west wall
      // West wall (idx 4): col 0 = south end; turnR on floor = z position
      const westWallCol = fr - 1 - turnR; // flip because west wall col 0=south
      const ww = state.surfaces[4];
      for (let r = 0; r < ww.rows; r++) {
        const idx = r * ww.cols + westWallCol;
        if (!ww.blocked[idx]) ww.grid[idx] = T;
      }

      // Curry path: door → diagonal to center → east to east wall → up
      const midC = Math.floor(fc / 2), midR = Math.floor(fr / 2);
      drawLine(0, doorC, doorR - 2, midC, midR, C);
      drawLine(0, midC, midR, fc - 1, midR, C);
      // Up east wall (idx 3): col maps to z (mirrored, col 0 = north)
      const eastWallCol = fr - 1 - midR;
      const ew = state.surfaces[3];
      for (let r = 0; r < ew.rows; r++) {
        const idx = r * ew.cols + eastWallCol;
        if (!ew.blocked[idx]) ew.grid[idx] = C;
      }

      // Marine path: small branch from center to NW corner
      drawLine(0, midC, midR, 2, 2, M);
    },
  },
  {
    name: "Circuit",
    apply() {
      // White base
      for (let si = 0; si < 5; si++) fillSurface(si, () => W);
      cyprusFloor();

      // Draw PCB-style right-angle traces on each wall
      const colors = [R, T, C, M];
      for (let si = 1; si < 5; si++) {
        const sdata = state.surfaces[si];
        const { cols, rows, grid, blocked } = sdata;
        let seed = si * 4721;
        const color = colors[si - 1];

        // Draw 3-4 traces per wall
        for (let t = 0; t < 4; t++) {
          seed = (seed * 1103515245 + 12345) & 0x7fffffff;
          let c = seed % cols;
          seed = (seed * 1103515245 + 12345) & 0x7fffffff;
          let r = seed % rows;
          // Random walk with right angles
          let dir = 0; // 0=right, 1=down, 2=left, 3=up
          for (let step = 0; step < 30; step++) {
            const idx = r * cols + c;
            if (r >= 0 && r < rows && c >= 0 && c < cols && !blocked[idx]) {
              grid[idx] = color;
            }
            // Advance
            seed = (seed * 1103515245 + 12345) & 0x7fffffff;
            if (seed % 4 === 0) dir = (dir + 1) % 4; // turn
            if (dir === 0) c++;
            else if (dir === 1) r++;
            else if (dir === 2) c--;
            else r--;
            c = Math.max(0, Math.min(cols - 1, c));
            r = Math.max(0, Math.min(rows - 1, r));
          }

          // Draw a "pad" (2x2 node) at start and end
          for (let dr = 0; dr < 2; dr++) {
            for (let dc = 0; dc < 2; dc++) {
              const pr = r + dr, pc = c + dc;
              if (pr < rows && pc < cols) {
                const pidx = pr * cols + pc;
                if (!blocked[pidx]) grid[pidx] = color;
              }
            }
          }
        }
      }

      // Floor: circuit traces too
      const fd = state.surfaces[0];
      const fColors = [R, T, C, M];
      // Horizontal and vertical traces
      for (let i = 0; i < 4; i++) {
        const pos = Math.floor((i + 1) * fd.rows / 5);
        for (let c = 0; c < fd.cols; c++) {
          const idx = pos * fd.cols + c;
          if (!fd.blocked[idx]) fd.grid[idx] = fColors[i];
        }
      }
      for (let i = 0; i < 3; i++) {
        const pos = Math.floor((i + 1) * fd.cols / 4);
        for (let r = 0; r < fd.rows; r++) {
          const idx = r * fd.cols + pos;
          if (!fd.blocked[idx]) fd.grid[idx] = fColors[i];
        }
      }
    },
  },
  {
    name: "Contour",
    apply() {
      // White base, cyprus floor
      for (let si = 0; si < 5; si++) fillSurface(si, () => W);
      cyprusFloor();

      // Horizontal contour lines at different heights, with wave offsets
      const contours = [
        { heightCM: 30, color: M },
        { heightCM: 70, color: T },
        { heightCM: 120, color: C },
        { heightCM: 170, color: R },
        { heightCM: 210, color: T },
      ];

      const pitch = pitchCM();
      for (let si = 1; si < 5; si++) {
        const sdata = state.surfaces[si];
        const { cols, rows, grid, blocked } = sdata;

        contours.forEach((contour) => {
          const baseRow = rows - 1 - Math.floor(contour.heightCM / pitch);
          for (let c = 0; c < cols; c++) {
            // Sine wave offset for organic feel
            const wave = Math.round(Math.sin(c * 0.6 + si * 2) * 1.5);
            const r = baseRow + wave;
            if (r >= 0 && r < rows) {
              const idx = r * cols + c;
              if (!blocked[idx]) grid[idx] = contour.color;
            }
          }
        });
      }

      // Floor: concentric contour rectangles
      const fd = state.surfaces[0];
      const floorColors = [M, T, C, R];
      for (let ring = 0; ring < 4; ring++) {
        const color = floorColors[ring];
        const inset = ring * 3 + 1;
        for (let c = inset; c < fd.cols - inset; c++) {
          [inset, fd.rows - 1 - inset].forEach((r) => {
            const idx = r * fd.cols + c;
            if (!fd.blocked[idx]) fd.grid[idx] = color;
          });
        }
        for (let r = inset; r < fd.rows - inset; r++) {
          [inset, fd.cols - 1 - inset].forEach((c) => {
            const idx = r * fd.cols + c;
            if (!fd.blocked[idx]) fd.grid[idx] = color;
          });
        }
      }
    },
  },
  {
    name: "Snake",
    apply() {
      // White base, cyprus floor
      for (let si = 0; si < 5; si++) fillSurface(si, () => W);
      cyprusFloor();

      // A continuous snake line that goes: south wall bottom → up → across ceiling-ish
      // → down north wall → across floor, zigzagging
      const colors = [R, C, T, M];
      let colorIdx = 0;

      // South wall (idx 2): zigzag from bottom-right to top-left
      const sw = state.surfaces[2];
      let sc = sw.cols - 3, sr = sw.rows - 1;
      let sdir = -1; // going up
      while (sr >= 0) {
        const idx = sr * sw.cols + sc;
        if (sc >= 0 && sc < sw.cols && !sw.blocked[idx]) {
          sw.grid[idx] = colors[colorIdx % 4];
        }
        sr--;
        if (sr % 4 === 0) { sc += sdir * 3; sdir *= -1; colorIdx++; }
      }

      // East wall (idx 3): horizontal zigzag
      const ewData = state.surfaces[3];
      let ec = 0, er = 2;
      let edir = 1;
      while (er < ewData.rows - 1) {
        const idx = er * ewData.cols + ec;
        if (ec >= 0 && ec < ewData.cols && !ewData.blocked[idx]) {
          ewData.grid[idx] = colors[colorIdx % 4];
        }
        ec += edir;
        if (ec >= ewData.cols - 1 || ec <= 0) {
          edir *= -1;
          er += 3;
          colorIdx++;
        }
      }

      // North wall (idx 1): zigzag top to bottom
      const nwData = state.surfaces[1];
      let nc = 2, nr = 0;
      let ndir = 1;
      while (nr < nwData.rows) {
        const idx = nr * nwData.cols + nc;
        if (nc >= 0 && nc < nwData.cols && !nwData.blocked[idx]) {
          nwData.grid[idx] = colors[colorIdx % 4];
        }
        nr++;
        if (nr % 5 === 0) { nc += ndir * 4; ndir *= -1; colorIdx++; }
      }

      // West wall (idx 4): vertical zigzag
      const wwData = state.surfaces[4];
      let wc = wwData.cols - 2, wr = wwData.rows - 1;
      let wdir = -1;
      while (wr >= 0) {
        const idx = wr * wwData.cols + wc;
        if (wc >= 0 && wc < wwData.cols && !wwData.blocked[idx]) {
          wwData.grid[idx] = colors[colorIdx % 4];
        }
        wr--;
        if (wr % 4 === 0) { wc += wdir * 3; wdir *= -1; colorIdx++; }
      }
    },
  },
  {
    name: "Ribbon",
    apply() {
      // White base, cyprus floor
      for (let si = 0; si < 5; si++) fillSurface(si, () => W);
      cyprusFloor();

      // Diagonal ribbon wrapping around the room
      // Each wall gets a diagonal stripe that connects to the next wall
      const ribbonW = 2; // width in tiles
      const colors = [R, T, M, C];

      for (let si = 1; si < 5; si++) {
        const sdata = state.surfaces[si];
        const { cols, rows, grid, blocked } = sdata;
        const color = colors[si - 1];

        // Primary diagonal stripe
        for (let c = 0; c < cols; c++) {
          for (let w = 0; w < ribbonW; w++) {
            // Diagonal going from bottom-left to top-right
            const r = rows - 1 - Math.floor((c / cols) * rows * 0.7) - w;
            if (r >= 0 && r < rows) {
              const idx = r * cols + c;
              if (!blocked[idx]) grid[idx] = color;
            }
            // Second ribbon, offset
            const r2 = rows - 1 - Math.floor(((c + cols / 2) % cols) / cols * rows * 0.7) - w - 4;
            if (r2 >= 0 && r2 < rows) {
              const idx2 = r2 * cols + c;
              if (!blocked[idx2]) grid[idx2] = colors[(si) % 4];
            }
          }
        }
      }

      // Floor: X pattern with all 4 colors
      const fd = state.surfaces[0];
      drawThickLine(0, 0, 0, fd.cols - 1, fd.rows - 1, R, 2);
      drawThickLine(0, fd.cols - 1, 0, 0, fd.rows - 1, T, 2);
      // Horizontal and vertical center lines
      const midC = Math.floor(fd.cols / 2), midR = Math.floor(fd.rows / 2);
      drawLine(0, 0, midR, fd.cols - 1, midR, M);
      drawLine(0, midC, 0, midC, fd.rows - 1, C);
    },
  },
];

function applyLinesTheme(index) {
  LINES_THEMES[index].apply();
  renderSurface();
  render3D();
  updateOrder();
}

function applyBeachTheme(index) {
  BEACH_THEMES[index].apply();
  renderSurface();
  render3D();
  updateOrder();
}

function applyRoomPreset(preset) {
  preset.apply();
  renderSurface();
  render3D();
  updateOrder();
}

function buildRoomPresets() {
  const container = $("#room-presets");
  container.innerHTML = "";
  ROOM_PRESETS.forEach((preset) => {
    const btn = document.createElement("button");
    btn.textContent = preset.name;
    btn.title = preset.desc;
    btn.addEventListener("click", () => applyRoomPreset(preset));
    container.appendChild(btn);
  });
}

function buildPatternPresets() {
  const container = $("#pat-presets");
  container.innerHTML = "";
  PATTERN_PRESETS.forEach((preset) => {
    const btn = document.createElement("button");
    btn.textContent = preset.name;
    btn.addEventListener("click", () => loadPreset(preset));
    container.appendChild(btn);
  });
}

function renderPattern() {
  const { patCols, patRows, patGrid } = state;
  patGridEl.innerHTML = "";
  const gp = Math.max(1, Math.round(state.groutWidthMM));
  patGridEl.style.gridTemplateColumns = `repeat(${patCols}, 28px)`;
  patGridEl.style.gridTemplateRows = `repeat(${patRows}, 28px)`;
  patGridEl.style.gap = gp + "px";
  patGridEl.style.backgroundColor = state.groutColor;
  patGridEl.style.padding = gp + "px";

  for (let i = 0; i < patCols * patRows; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.dataset.idx = i;
    const ci = patGrid[i];
    if (ci === NO_TILE) {
      cell.classList.add("no-tile-cell");
    } else {
      cell.style.backgroundColor = COLORS[ci].hex;
    }
    patGridEl.appendChild(cell);
  }
}

function applyPatternToSurface(si) {
  const sdata = state.surfaces[si];
  const { cols, rows, grid, blocked } = sdata;
  const { patCols, patRows, patGrid } = state;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const idx = r * cols + c;
      if (blocked[idx]) continue;
      grid[idx] = patGrid[(r % patRows) * patCols + (c % patCols)];
    }
  }
}

// ── Events ────────────────────────────────────────────────────────────────────

function bindEvents() {
  // Sidebar toggle
  $("#sidebar-toggle").addEventListener("click", () => {
    $(".sidebar").classList.toggle("collapsed");
  });

  // Base color
  $("#set-base").addEventListener("click", () => {
    state.baseColor = state.selectedColor;
    updateBaseUI();
  });

  // Grid painting
  gridEl.addEventListener("mousedown", (e) => {
    const cell = e.target.closest(".cell");
    if (!cell || cell.classList.contains("blocked")) return;
    e.preventDefault();
    state.painting = true;
    const sdata = state.surfaces[state.activeSurface];
    if (e.button === 2) {
      sdata.grid[+cell.dataset.idx] = state.baseColor;
      refreshSurfaceCells();
      render3D();
      updateOrder();
    } else {
      paintCell(+cell.dataset.idx);
    }
  });

  gridEl.addEventListener("mousemove", (e) => {
    if (!state.painting) return;
    const cell = e.target.closest(".cell");
    if (!cell || cell.classList.contains("blocked")) return;
    const idx = +cell.dataset.idx;
    const sdata = state.surfaces[state.activeSurface];
    if (state.tool === "paint") {
      sdata.grid[idx] = state.selectedColor;
    } else if (state.tool === "erase") {
      sdata.grid[idx] = state.baseColor;
    }
    const ci = sdata.grid[idx];
    if (ci === NO_TILE) {
      cell.style.backgroundColor = "";
      cell.classList.add("no-tile-cell");
    } else {
      cell.classList.remove("no-tile-cell");
      cell.style.backgroundColor = COLORS[ci].hex;
    }
    render3D();
    updateOrder();
  });

  document.addEventListener("mouseup", () => { state.painting = false; state.patternPainting = false; });
  gridEl.addEventListener("contextmenu", (e) => e.preventDefault());

  // Pattern grid painting
  patGridEl.addEventListener("mousedown", (e) => {
    const cell = e.target.closest(".cell");
    if (!cell) return;
    e.preventDefault();
    state.patternPainting = true;
    const idx = +cell.dataset.idx;
    if (e.button === 2) {
      state.patGrid[idx] = state.baseColor;
    } else {
      state.patGrid[idx] = (state.patGrid[idx] === state.selectedColor)
        ? state.baseColor : state.selectedColor;
    }
    renderPattern();
  });

  patGridEl.addEventListener("mousemove", (e) => {
    if (!state.patternPainting) return;
    const cell = e.target.closest(".cell");
    if (!cell) return;
    state.patGrid[+cell.dataset.idx] = state.selectedColor;
    renderPattern();
  });

  patGridEl.addEventListener("contextmenu", (e) => e.preventDefault());

  // Pattern resize
  $("#pat-resize").addEventListener("click", () => {
    state.patCols = Math.min(16, Math.max(1, +$("#pat-cols").value || 2));
    state.patRows = Math.min(16, Math.max(1, +$("#pat-rows").value || 2));
    $("#pat-cols").value = state.patCols;
    $("#pat-rows").value = state.patRows;
    initPattern();
  });

  // Apply pattern
  $("#pat-apply").addEventListener("click", () => {
    applyPatternToSurface(state.activeSurface);
    renderSurface();
    render3D();
  });

  $("#pat-apply-all").addEventListener("click", () => {
    SURFACES.forEach((_, si) => applyPatternToSurface(si));
    renderSurface();
    render3D();
  });

  // Touch support for grid
  gridEl.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    const cell = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!cell || !cell.classList.contains("cell") || cell.classList.contains("blocked")) return;
    e.preventDefault();
    state.painting = true;
    paintCell(+cell.dataset.idx);
  }, { passive: false });

  gridEl.addEventListener("touchmove", (e) => {
    if (!state.painting) return;
    const touch = e.touches[0];
    const cell = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!cell || !cell.classList.contains("cell") || cell.classList.contains("blocked")) return;
    e.preventDefault();
    const idx = +cell.dataset.idx;
    const sdata = state.surfaces[state.activeSurface];
    if (state.tool === "paint") {
      sdata.grid[idx] = state.selectedColor;
    } else if (state.tool === "erase") {
      sdata.grid[idx] = state.baseColor;
    }
    cell.style.backgroundColor = COLORS[sdata.grid[idx]].hex;
    render3D();
    updateOrder();
  }, { passive: false });

  document.addEventListener("touchend", () => { state.painting = false; });

  // Tools
  $$(".tool-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.tool = btn.dataset.tool;
      updateToolButtons();
    });
  });

  // Grout width
  $("#grout-width").addEventListener("input", (e) => {
    state.groutWidthMM = +e.target.value;
    $("#grout-width-label").textContent = e.target.value + " mm";
    renderSurface();
    render3D();
  });

  // Actions
  $("#clear-all").addEventListener("click", () => {
    const sdata = state.surfaces[state.activeSurface];
    sdata.grid = sdata.grid.map((ci, i) => sdata.blocked[i] ? null : state.baseColor);
    renderSurface();
    render3D();
  });

  $("#fill-all").addEventListener("click", () => {
    const sdata = state.surfaces[state.activeSurface];
    sdata.grid = sdata.grid.map((ci, i) => sdata.blocked[i] ? null : state.selectedColor);
    renderSurface();
    render3D();
  });

  // Export
  $("#export-png").addEventListener("click", exportPNG);


  // 3D rotation drag
  let dragStart = null;
  let yawStart = 0;
  let pitchStart = 0;

  room3D.addEventListener("mousedown", (e) => {
    dragStart = { x: e.clientX, y: e.clientY };
    yawStart = state.cameraYaw;
    pitchStart = state.cameraPitch;
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragStart) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    state.cameraYaw = yawStart + dx * 0.005;
    state.cameraPitch = Math.max(-0.8, Math.min(0.4, pitchStart + dy * 0.005));
    render3D();
  });

  document.addEventListener("mouseup", () => { dragStart = null; });

  // Touch 3D rotation
  room3D.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      dragStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      yawStart = state.cameraYaw;
      pitchStart = state.cameraPitch;
      e.preventDefault();
    }
  }, { passive: false });

  room3D.addEventListener("touchmove", (e) => {
    if (!dragStart || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStart.x;
    const dy = e.touches[0].clientY - dragStart.y;
    state.cameraYaw = yawStart + dx * 0.005;
    state.cameraPitch = Math.max(-0.8, Math.min(0.4, pitchStart + dy * 0.005));
    render3D();
    e.preventDefault();
  }, { passive: false });

  room3D.addEventListener("touchend", () => { dragStart = null; });

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === "INPUT") return;
    switch (e.key.toLowerCase()) {
      case "p": state.tool = "paint"; updateToolButtons(); break;
      case "f": state.tool = "fill"; updateToolButtons(); break;
      case "e": state.tool = "erase"; updateToolButtons(); break;
      case "i": state.tool = "eyedrop"; updateToolButtons(); break;
      case "1": case "2": case "3": case "4": case "5":
        switchSurface(+e.key - 1); break;
    }
  });

  // Resize handler
  window.addEventListener("resize", () => {
    room3D.width = room3D.parentElement.clientWidth;
    room3D.height = Math.round(room3D.width * 0.6);
    render3D();
  });

  // Initial canvas sizing
  room3D.width = room3D.parentElement.clientWidth || 900;
  room3D.height = Math.round(room3D.width * 0.6);
  render3D();
}

// ── URL State ─────────────────────────────────────────────────────────────────

function saveToURL() {
  // Encode all 5 surface grids into one byte array
  // Format: [grid0 bytes...][grid1 bytes...]...[grid4 bytes...]
  // Each cell: 0-40 = color, 254 = NO_TILE, 255 = blocked (null)
  let totalLen = 0;
  state.surfaces.forEach((s) => { totalLen += s.grid.length; });
  const bytes = new Uint8Array(totalLen);
  let offset = 0;
  state.surfaces.forEach((s) => {
    s.grid.forEach((ci, i) => {
      bytes[offset + i] = ci === NO_TILE ? 254 : (ci !== null ? ci : 255);
    });
    offset += s.grid.length;
  });
  const b64 = btoa(String.fromCharCode(...bytes));
  const params = new URLSearchParams();
  params.set("d", b64);
  params.set("gc", state.groutColor);
  params.set("gw", state.groutWidthMM);
  history.replaceState(null, "", "?" + params.toString());
}

function loadFromURL() {
  const params = new URLSearchParams(location.search);
  if (!params.has("d")) return false;
  try {
    if (params.has("gc")) state.groutColor = params.get("gc");
    if (params.has("gw")) state.groutWidthMM = +params.get("gw") || 3.5;

    // Decode grids — need to init surfaces first to know sizes
    SURFACES.forEach((surf) => {
      const pitch = pitchCM();
      const cols = Math.ceil(surf.widthCM / pitch);
      const rows = Math.ceil(surf.heightCM / pitch);
      const grid = new Array(cols * rows).fill(state.baseColor);
      const blocked = new Array(cols * rows).fill(false);
      surf.obstructions.forEach((obs) => {
        const c0 = Math.floor(obs.xCM / pitch);
        const c1 = Math.ceil((obs.xCM + obs.wCM) / pitch);
        const totalH = surf.heightCM;
        const rTop = Math.floor((totalH - obs.yCM - obs.hCM) / pitch);
        const rBot = Math.ceil((totalH - obs.yCM) / pitch);
        for (let r = Math.max(0, rTop); r < Math.min(rows, rBot); r++) {
          for (let c = Math.max(0, c0); c < Math.min(cols, c1); c++) {
            blocked[r * cols + c] = true;
            grid[r * cols + c] = null;
          }
        }
      });
      state.surfaces.push({ cols, rows, grid, blocked });
    });

    const str = atob(params.get("d"));
    const bytes = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);

    let offset = 0;
    state.surfaces.forEach((s) => {
      for (let i = 0; i < s.grid.length; i++) {
        if (s.blocked[i]) { offset++; continue; }
        const b = bytes[offset++];
        s.grid[i] = b === 255 ? null : b === 254 ? NO_TILE : b;
      }
    });

    $("#grout-width").value = state.groutWidthMM;
    $("#grout-width-label").textContent = state.groutWidthMM + " mm";
    return true;
  } catch { return false; }
}

// ── Start ─────────────────────────────────────────────────────────────────────

if (loadFromURL()) {
  buildPalette();
  buildGroutPalette();
  buildSurfaceTabs();
  buildRoomPresets();
  buildPatternPresets();
  updateBaseUI();
  initPattern();
  renderSurface();
  render3D();
  bindEvents();
} else {
  init();
}
