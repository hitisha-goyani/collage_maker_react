// import React, { useState } from "react";
// import "./App.css";

// import TemplateList from "./assets/TemplateList";
// import CollageGrid from "./assets/CollageGrid";
// import PropertiesPanel from "./assets/PropertiesPanel";
// import SizePanel from "./assets/SizePanel";
// import templates from "./data/templates";

// export default function App() {
//   const [slots, setSlots] = useState(
//     templates[0].slots.map(s => ({ ...s }))
//   );
//   const [activeSlotId, setActiveSlotId] = useState(null);

//   const [cellSpacing, setCellSpacing] = useState(18);
//   const [radius, setRadius] = useState(0);
//   const [columns, setColumns] = useState(3);
//   const [activeTemplateId, setActiveTemplateId] = useState(templates[0].id);

//   const MAX_CANVAS_WIDTH = 720;

//   function scaleCanvas(w, h) {
//     const scale = Math.min(MAX_CANVAS_WIDTH / w, 1);
//     return {
//       viewWidth: Math.round(w * scale),
//       viewHeight: Math.round(h * scale)
//     };
//   }

//   const [canvasSize, setCanvasSize] = useState(() => {
//     const w = 1080;
//     const h = 1080;
//     const view = scaleCanvas(w, h);
//     return {
//       width: w,
//       height: h,
//       viewWidth: view.viewWidth,
//       viewHeight: view.viewHeight,
//       ratio: "1:1"
//     };
//   });

//   function updateCanvasSize(w, h, ratio) {
//     const view = scaleCanvas(w, h);
//     setCanvasSize({
//       width: w,
//       height: h,
//       viewWidth: view.viewWidth,
//       viewHeight: view.viewHeight,
//       ratio
//     });
//   }

//   function loadTemplate(id) {
//     const t = templates.find(x => x.id === id);
//     setSlots(t.slots.map(s => ({ ...s })));
//     setActiveSlotId(null);
//     setActiveTemplateId(id);
//   }

//   return (
//     <div className="main-layout">
//       {/* LEFT PANEL */}
//       <div className="panel">
//         <h3>Layouts</h3>

//         <label>Cell Spacing</label>
//         <input
//           type="range"
//           min="0"
//           max="60"
//           value={cellSpacing}
//           onChange={e => setCellSpacing(+e.target.value)}
//         />

//         <label>Radius</label>
//         <input
//           type="range"
//           min="0"
//           max="60"
//           value={radius}
//           onChange={e => setRadius(+e.target.value)}
//         />

//         <h3 style={{ marginTop: 25 }}>Preset Sizes</h3>
//         <SizePanel setCanvasSize={updateCanvasSize} />

//         <h3 style={{ marginTop: 25 }}>Templates</h3>
//         <TemplateList
//           templates={templates}
//           onLoad={loadTemplate}
//           activeTemplateId={activeTemplateId}
//         />
//       </div>

//       {/* CANVAS */}
//       <CollageGrid
//         slots={slots}
//         setSlots={setSlots}
//         activeSlotId={activeSlotId}
//         setActiveSlotId={setActiveSlotId}
//         cellSpacing={cellSpacing}
//         radius={radius}
//         canvasSize={canvasSize}
//         columns={columns}
//       />

//       {/* RIGHT PANEL */}
//       <PropertiesPanel
//         slots={slots}
//         setSlots={setSlots}
//         activeSlotId={activeSlotId}
//         setActiveSlotId={setActiveSlotId}
//       />
//     </div>
//   );
// }



import React, { useState } from "react";
import "./App.css";

import CollageGrid from "./assets/CollageGrid";
import PropertiesPanel from "./assets/PropertiesPanel";
import SizePanel from "./assets/SizePanel";
import TemplatePanel from "./assets/TemplatePanel";

import { TEMPLATE_CATEGORIES } from "./data/templates";

/* =========================================================
   MAIN APP
========================================================= */

export default function App() {

  /* ---------------- Slots / Template ---------------- */

const [slots, setSlots] = useState(
  TEMPLATE_CATEGORIES[0].templates[0].slots.map(s => ({ ...s }))
);

const [columns, setColumns] = useState(
  TEMPLATE_CATEGORIES[0].templates[0].columns
);

  const [activeSlotId, setActiveSlotId] = useState(null);

  /* ---------------- Canvas Controls ---------------- */

  const [cellSpacing, setCellSpacing] = useState(18);
  const [radius, setRadius] = useState(12);

  /* ---------------- Canvas Size ---------------- */

  const MAX_CANVAS_WIDTH = 720;

  function scaleCanvas(w, h) {
    const scale = Math.min(MAX_CANVAS_WIDTH / w, 1);
    return {
      viewWidth: Math.round(w * scale),
      viewHeight: Math.round(h * scale)
    };
  }

  const [canvasSize, setCanvasSize] = useState(() => {
    const w = 1080;
    const h = 1080;
    const view = scaleCanvas(w, h);
    return {
      width: w,
      height: h,
      viewWidth: view.viewWidth,
      viewHeight: view.viewHeight,
      ratio: "1:1"
    };
  });

  function updateCanvasSize(w, h, ratio) {
    const view = scaleCanvas(w, h);
    setCanvasSize({
      width: w,
      height: h,
      viewWidth: view.viewWidth,
      viewHeight: view.viewHeight,
      ratio
    });
  }

  /* ---------------- Template Loader ---------------- */

  function loadTemplate(template) {
    setSlots(template.slots.map(s => ({ ...s })));
    setColumns(template.columns);
    setActiveSlotId(null);
  }

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <div className="main-layout">

      {/* =================================================
          LEFT PANEL
      ================================================= */}
      <div className="panel">

        <h3>Canvas Size</h3>
        <SizePanel setCanvasSize={updateCanvasSize} />

        <h3 style={{ marginTop: 25 }}>Templates</h3>
        <TemplatePanel onSelect={loadTemplate} />

      </div>

      {/* =================================================
          CANVAS CENTER
      ================================================= */}
      <CollageGrid
        slots={slots}
        setSlots={setSlots}
        activeSlotId={activeSlotId}
        setActiveSlotId={setActiveSlotId}
        cellSpacing={cellSpacing}
        radius={radius}
        canvasSize={canvasSize}
        columns={columns}
      />

      {/* =================================================
          RIGHT PANEL
      ================================================= */}
      <div className="panel properties">

        <h3>Properties</h3>

        <label>Spacing</label>
        <input
          type="range"
          min="0"
          max="60"
          value={cellSpacing}
          onChange={e => setCellSpacing(+e.target.value)}
        />

        <label>Corner Radius</label>
        <input
          type="range"
          min="0"
          max="40"
          value={radius}
          onChange={e => setRadius(+e.target.value)}
        />

      </div>

    </div>
  );
}
