// // import React, { useState } from "react";
// // import "./App.css";

// // import TemplateList from "./assets/TemplateList";
// // import CollageGrid from "./assets/CollageGrid";
// // import PropertiesPanel from "./assets/PropertiesPanel";
// // import SizePanel from "./assets/SizePanel";
// // import templates from "./data/templates";

// // export default function App() {
// //   const [slots, setSlots] = useState(
// //     templates[0].slots.map(s => ({ ...s }))
// //   );
// //   const [activeSlotId, setActiveSlotId] = useState(null);

// //   const [cellSpacing, setCellSpacing] = useState(18);
// //   const [radius, setRadius] = useState(0);
// //   const [columns, setColumns] = useState(3);
// //   const [activeTemplateId, setActiveTemplateId] = useState(templates[0].id);

// //   const MAX_CANVAS_WIDTH = 720;

// //   function scaleCanvas(w, h) {
// //     const scale = Math.min(MAX_CANVAS_WIDTH / w, 1);
// //     return {
// //       viewWidth: Math.round(w * scale),
// //       viewHeight: Math.round(h * scale)
// //     };
// //   }

// //   const [canvasSize, setCanvasSize] = useState(() => {
// //     const w = 1080;
// //     const h = 1080;
// //     const view = scaleCanvas(w, h);
// //     return {
// //       width: w,
// //       height: h,
// //       viewWidth: view.viewWidth,
// //       viewHeight: view.viewHeight,
// //       ratio: "1:1"
// //     };
// //   });

// //   function updateCanvasSize(w, h, ratio) {
// //     const view = scaleCanvas(w, h);
// //     setCanvasSize({
// //       width: w,
// //       height: h,
// //       viewWidth: view.viewWidth,
// //       viewHeight: view.viewHeight,
// //       ratio
// //     });
// //   }

// //   function loadTemplate(id) {
// //     const t = templates.find(x => x.id === id);
// //     setSlots(t.slots.map(s => ({ ...s })));
// //     setActiveSlotId(null);
// //     setActiveTemplateId(id);
// //   }

// //   return (
// //     <div className="main-layout">
// //       {/* LEFT PANEL */}
// //       <div className="panel">
// //         <h3>Layouts</h3>

// //         <label>Cell Spacing</label>
// //         <input
// //           type="range"
// //           min="0"
// //           max="60"
// //           value={cellSpacing}
// //           onChange={e => setCellSpacing(+e.target.value)}
// //         />

// //         <label>Radius</label>
// //         <input
// //           type="range"
// //           min="0"
// //           max="60"
// //           value={radius}
// //           onChange={e => setRadius(+e.target.value)}
// //         />

// //         <h3 style={{ marginTop: 25 }}>Preset Sizes</h3>
// //         <SizePanel setCanvasSize={updateCanvasSize} />

// //         <h3 style={{ marginTop: 25 }}>Templates</h3>
// //         <TemplateList
// //           templates={templates}
// //           onLoad={loadTemplate}
// //           activeTemplateId={activeTemplateId}
// //         />
// //       </div>

// //       {/* CANVAS */}
// //       <CollageGrid
// //         slots={slots}
// //         setSlots={setSlots}
// //         activeSlotId={activeSlotId}
// //         setActiveSlotId={setActiveSlotId}
// //         cellSpacing={cellSpacing}
// //         radius={radius}
// //         canvasSize={canvasSize}
// //         columns={columns}
// //       />

// //       {/* RIGHT PANEL */}
// //       <PropertiesPanel
// //         slots={slots}
// //         setSlots={setSlots}
// //         activeSlotId={activeSlotId}
// //         setActiveSlotId={setActiveSlotId}
// //       />
// //     </div>
// //   );
// // }

// // import React, { useState } from "react";
// // import "./App.css";

// // import CollageGrid from "./assets/CollageGrid";
// // import SizePanel from "./assets/SizePanel";
// // import TemplatePanel from "./assets/TemplatePanel";
// // import PropertiesPanel from "./assets/PropertiesPanel";

// // import { TEMPLATE_CATEGORIES } from "./data/templates";

// // /* =========================================================
// //    MAIN APP
// // ========================================================= */

// // export default function App() {
// //   /* ================= TEMPLATE / SLOTS ================= */

// //   const firstTemplate = TEMPLATE_CATEGORIES[0].templates[0];

// //   const [slots, setSlots] = useState(
// //     firstTemplate.slots.map((s) => ({
// //       ...s,
// //       zoom: 1,
// //       offsetX: 0,
// //       offsetY: 0,
// //       rotation: 0,
// //       border: 0,
// //       color: "#ffffff",
// //       fit: "cover",
// //     }))
// //   );

// //   const [columns, setColumns] = useState(firstTemplate.columns);
// //   const [activeSlotId, setActiveSlotId] = useState(null);

// //   /* ================= CANVAS CONTROLS ================= */

// //   const [cellSpacing, setCellSpacing] = useState(18);
// //   const [cornerRadius, setCornerRadius] = useState(12);

// //   /* ================= CANVAS SIZE ================= */

// //   const MAX_CANVAS_WIDTH = 720;

// //   function scaleCanvas(w, h) {
// //     const scale = Math.min(MAX_CANVAS_WIDTH / w, 1);
// //     return {
// //       viewWidth: Math.round(w * scale),
// //       viewHeight: Math.round(h * scale),
// //     };
// //   }

// //   const [canvasSize, setCanvasSize] = useState(() => {
// //     const w = 1080;
// //     const h = 1080;
// //     const view = scaleCanvas(w, h);
// //     return {
// //       width: w,
// //       height: h,
// //       viewWidth: view.viewWidth,
// //       viewHeight: view.viewHeight,
// //       ratio: "1:1",
// //     };
// //   });

// //   function updateCanvasSize(w, h, ratio) {
// //     const view = scaleCanvas(w, h);
// //     setCanvasSize({
// //       width: w,
// //       height: h,
// //       viewWidth: view.viewWidth,
// //       viewHeight: view.viewHeight,
// //       ratio,
// //     });
// //   }

// //   /* ================= TEMPLATE LOADER ================= */

// //   function loadTemplate(template) {
// //     setSlots(
// //       template.slots.map((s) => ({
// //         ...s,
// //         zoom: 1,
// //         offsetX: 0,
// //         offsetY: 0,
// //         rotation: 0,
// //         border: 0,
// //         color: "#ffffff",
// //         fit: "cover",
// //       }))
// //     );
// //     setColumns(template.columns);
// //     setActiveSlotId(null);
// //   }

// //   /* =========================================================
// //      RENDER
// //   ========================================================= */

// //   return (
// //     <div className="main-layout">
// //       {/* ================= LEFT PANEL ================= */}
// //       <div className="panel">
// //         <h3>Canvas Size</h3>
// //         <SizePanel setCanvasSize={updateCanvasSize} />

// //         <h3 style={{ marginTop: 25 }}>Templates</h3>
// //         <TemplatePanel onSelect={loadTemplate} />
// //       </div>

// //       {/* ================= CENTER CANVAS ================= */}
// //       <CollageGrid
// //         slots={slots}
// //         setSlots={setSlots}
// //         activeSlotId={activeSlotId}
// //         setActiveSlotId={setActiveSlotId}
// //         cellSpacing={cellSpacing}
// //         canvasSize={canvasSize}
// //         columns={columns}
// //         radius={cornerRadius}
// //       />

// //       {/* ================= RIGHT PROPERTIES PANEL ================= */}

// //       <PropertiesPanel
// //         cellSpacing={cellSpacing}
// //         setCellSpacing={setCellSpacing}
// //         cornerRadius={cornerRadius}
// //         setCornerRadius={setCornerRadius}
// //         slots={slots}
// //         setSlots={setSlots}
// //         activeSlotId={activeSlotId}
// //         setActiveSlotId={setActiveSlotId}
// //       />
// //     </div>
// //   );
// // }
// // src/App.jsx
// // import React, { useState } from "react";
// // import "./App.css";

// // import CollageGrid from "./assets/CollageGrid";
// // import SizePanel from "./assets/SizePanel";
// // import TemplatePanel from "./assets/TemplatePanel";
// // import PropertiesPanel from "./assets/PropertiesPanel";
// // import { TEMPLATE_CATEGORIES } from "./data/templates";
// // import html2canvas from "html2canvas";
// // import React, { useRef } from "react";

// // export default function App() {
// //   const firstTemplate = TEMPLATE_CATEGORIES[0].templates[0];
// //    const collageRef = useRef(null);

// //   const [slots, setSlots] = useState(
// //     firstTemplate.slots.map(s => ({
// //       ...s,
// //       image: null,
// //       zoom: 1,
// //       offsetX: 0,
// //       offsetY: 0,
// //       rotation: 0,
// //       border: 0,
// //       color: "#000000",
// //       fit: "cover"
// //     }))
// //   );

// //   const [columns, setColumns] = useState(firstTemplate.columns);
// //   const [activeSlotId, setActiveSlotId] = useState(null);

// //   const [cellSpacing, setCellSpacing] = useState(18);
// //   const [cornerRadius, setCornerRadius] = useState(12);

// //   const [canvasSize, setCanvasSize] = useState({
// //     viewWidth: 500,
// //     viewHeight: 500
// //   });

// //   function loadTemplate(template) {
// //     setSlots(
// //       template.slots.map(s => ({
// //         ...s,
// //         image: null,
// //         zoom: 1,
// //         offsetX: 0,
// //         offsetY: 0,
// //         rotation: 0,
// //         border: 0,
// //         color: "#000000",
// //         fit: "cover"
// //       }))
// //     );
// //     setColumns(template.columns);
// //     setActiveSlotId(null);
// //   }

// //   return (
// //     <div className="main-layout">

// //       {/* LEFT */}
// //       <div className="panel">
// //         <h3>Canvas Size</h3>
// //         <SizePanel setCanvasSize={(w, h) =>
// //           setCanvasSize({ viewWidth: w, viewHeight: h })
// //         } />

// //         <h3 style={{ marginTop: 20 }}>Templates</h3>
// //         <TemplatePanel onSelect={loadTemplate} />
// //       </div>

// //       {/* CENTER */}
// //       <CollageGrid
// //         slots={slots}
// //         setSlots={setSlots}
// //         activeSlotId={activeSlotId}
// //         setActiveSlotId={setActiveSlotId}
// //         cellSpacing={cellSpacing}
// //         radius={cornerRadius}
// //         canvasSize={canvasSize}
// //         columns={columns}
// //       />
      

// //       {/* RIGHT */}
// //       <PropertiesPanel
// //         cellSpacing={cellSpacing}
// //         setCellSpacing={setCellSpacing}
// //         cornerRadius={cornerRadius}
// //         setCornerRadius={setCornerRadius}
// //         slots={slots}
// //         setSlots={setSlots}
// //         activeSlotId={activeSlotId}
// //         setActiveSlotId={setActiveSlotId}
// //       />
// //     </div>
// //   );
// // }
// import React, { useState, useRef } from "react";
// import "./App.css";

// import CollageGrid from "./assets/CollageGrid";
// import SizePanel from "./assets/SizePanel";
// import TemplatePanel from "./assets/TemplatePanel";
// import PropertiesPanel from "./assets/PropertiesPanel";

// import { TEMPLATE_CATEGORIES } from "./data/templates";
// import html2canvas from "html2canvas";

// export default function App() {
//   /* ================= GET FIRST TEMPLATE SAFELY ================= */

//   const firstTemplate =
//     TEMPLATE_CATEGORIES?.[0]?.templates?.[0];

//   if (!firstTemplate) {
//     console.error("No templates found");
//     return null;
//   }

//   /* ================= REFS ================= */

//   const collageRef = useRef(null);

//   /* ================= STATE ================= */

//   const [slots, setSlots] = useState(() =>
//     firstTemplate.slots.map((s) => ({
//       ...s,
//       image: null,
//       zoom: 1,
//       offsetX: 0,
//       offsetY: 0,
//       rotation: 0,
//       border: 0,
//       color: "#000000",
//       fit: "cover",
//     }))
//   );

//   const [columns, setColumns] = useState(firstTemplate.columns);
//   const [activeSlotId, setActiveSlotId] = useState(null);

//   const [cellSpacing, setCellSpacing] = useState(18);
//   const [cornerRadius, setCornerRadius] = useState(12);

//   const [canvasSize, setCanvasSize] = useState({
//     viewWidth: 500,
//     viewHeight: 500,
//   });

//   /* ================= TEMPLATE LOADER ================= */

//   function loadTemplate(template) {
//     if (!template) return;

//     setSlots(
//       template.slots.map((s) => ({
//         ...s,
//         image: null,
//         zoom: 1,
//         offsetX: 0,
//         offsetY: 0,
//         rotation: 0,
//         border: 0,
//         color: "#000000",
//         fit: "cover",
//       }))
//     );

//     setColumns(template.columns);
//     setActiveSlotId(null);
//   }

//   /* ================= DOWNLOAD IMAGE ================= */

//   async function downloadImage(type) {
//     if (!collageRef.current) return;

//     const canvas = await html2canvas(collageRef.current, {
//       scale: 4, // 🔥 HD OUTPUT
//       backgroundColor: "#ffffff",
//       useCORS: true,
//     });

//     const mime =
//       type === "png" ? "image/png" : "image/jpeg";

//     const quality = type === "jpeg" ? 1.0 : undefined;

//     const imageURL = canvas.toDataURL(mime, quality);

//     const link = document.createElement("a");
//     link.href = imageURL;
//     link.download = `collage.${type}`;
//     link.click();
//   }

//   /* ================= RENDER ================= */

//   return (
//     <div className="main-layout">
//       {/* LEFT PANEL */}
//       <div className="panel">
//         <h3>Canvas Size</h3>
//         <SizePanel
//           setCanvasSize={(w, h) =>
//             setCanvasSize({ viewWidth: w, viewHeight: h })
//           }
//         />

//         <h3 style={{ marginTop: 20 }}>Templates</h3>
//         <TemplatePanel onSelect={loadTemplate} />

//       <div className="download-buttons">
//   <button
//     className="download-btn"
//     onClick={() => downloadImage("png")}
//   >
//     Download PNG
//   </button>

//   <button
//     className="download-btn jpeg"
//     onClick={() => downloadImage("jpeg")}
//   >
//     Download JPEG
//   </button>
// </div>
//       </div>

//       {/* CENTER CANVAS */}
//       <CollageGrid
//         ref={collageRef}
//         slots={slots}
//         setSlots={setSlots}
//         activeSlotId={activeSlotId}
//         setActiveSlotId={setActiveSlotId}
//         cellSpacing={cellSpacing}
//         radius={cornerRadius}
//         canvasSize={canvasSize}
//         columns={columns}
//       />

//       {/* RIGHT PANEL */}
//       <PropertiesPanel
//         cellSpacing={cellSpacing}
//         setCellSpacing={setCellSpacing}
//         cornerRadius={cornerRadius}
//         setCornerRadius={setCornerRadius}
//         slots={slots}
//         setSlots={setSlots}
//         activeSlotId={activeSlotId}
//         setActiveSlotId={setActiveSlotId}
//       />
//     </div>
//   );
// }
import React, { useState, useRef } from "react";
import "./App.css";

import CollageGrid from "./assets/CollageGrid";
import SizePanel from "./assets/SizePanel";
import TemplatePanel from "./assets/TemplatePanel";
import PropertiesPanel from "./assets/PropertiesPanel";

import { TEMPLATE_CATEGORIES } from "./data/templates";
import html2canvas from "html2canvas";

/* ================= PREVIEW LIMIT ================= */

const MAX_PREVIEW_WIDTH = 720;
const MAX_PREVIEW_HEIGHT = window.innerHeight - 180;

function scaleCanvas(width, height) {
  const scale = Math.min(
    MAX_PREVIEW_WIDTH / width,
    MAX_PREVIEW_HEIGHT / height,
    1
  );

  return {
    scale,
    viewWidth: Math.round(width * scale),
    viewHeight: Math.round(height * scale),
  };
}

export default function App() {
  const firstTemplate =
    TEMPLATE_CATEGORIES?.[0]?.templates?.[0];

  if (!firstTemplate) return null;

  const collageRef = useRef(null);

  const [slots, setSlots] = useState(() =>
    firstTemplate.slots.map((s) => ({
      ...s,
      image: null,
      zoom: 1,
      offsetX: 0,
      offsetY: 0,
      rotation: 0,
      border: 0,
      color: "#000000",
      fit: "cover",
    }))
  );

  const [columns, setColumns] = useState(firstTemplate.columns);
  const [activeSlotId, setActiveSlotId] = useState(null);

  const [cellSpacing, setCellSpacing] = useState(18);
  const [cornerRadius, setCornerRadius] = useState(12);

  const [canvasSize, setCanvasSize] = useState(() => {
    const width = 1080;
    const height = 1080;
    const view = scaleCanvas(width, height);

    return {
      width,
      height,
      viewWidth: view.viewWidth,
      viewHeight: view.viewHeight,
      scale: view.scale,
      ratio: "1:1",
    };
  });

  function updateCanvasSize(w, h, ratio) {
    const view = scaleCanvas(w, h);

    setCanvasSize({
      width: w,
      height: h,
      viewWidth: view.viewWidth,
      viewHeight: view.viewHeight,
      scale: view.scale,
      ratio,
    });
  }

  function loadTemplate(template) {
    setSlots(
      template.slots.map((s) => ({
        ...s,
        image: null,
        zoom: 1,
        offsetX: 0,
        offsetY: 0,
        rotation: 0,
        border: 0,
        color: "#000000",
        fit: "cover",
      }))
    );
    setColumns(template.columns);
    setActiveSlotId(null);
  }

  async function downloadImage(type) {
    const canvas = await html2canvas(collageRef.current, {
      scale: 4,
      backgroundColor: "#fff",
      useCORS: true,
    });

    const mime =
      type === "png" ? "image/png" : "image/jpeg";

    const data = canvas.toDataURL(mime, type === "jpeg" ? 1 : undefined);

    const link = document.createElement("a");
    link.href = data;
    link.download = `collage.${type}`;
    link.click();
  }

  return (
    <div className="main-layout">
      <div className="panel">
        <h3>Canvas Size</h3>
        <SizePanel setCanvasSize={updateCanvasSize} />

        <h3 style={{ marginTop: 20 }}>Templates</h3>
        <TemplatePanel onSelect={loadTemplate} />

        <div className="download-buttons">
          <button className="download-btn" onClick={() => downloadImage("png")}>
            Download PNG
          </button>
          <button className="download-btn jpeg" onClick={() => downloadImage("jpeg")}>
            Download JPEG
          </button>
        </div>
      </div>

      <CollageGrid
        ref={collageRef}
        slots={slots}
        setSlots={setSlots}
        activeSlotId={activeSlotId}
        setActiveSlotId={setActiveSlotId}
        cellSpacing={cellSpacing}
        radius={cornerRadius}
        canvasSize={canvasSize}
        columns={columns}
      />

      <PropertiesPanel
        cellSpacing={cellSpacing}
        setCellSpacing={setCellSpacing}
        cornerRadius={cornerRadius}
        setCornerRadius={setCornerRadius}
        slots={slots}
        setSlots={setSlots}
        activeSlotId={activeSlotId}
        setActiveSlotId={setActiveSlotId}
      />
    </div>
  );
}
