// import React from "react";

// export default function ImageCell({ slot, isActive, onDrop, onClick }) {
//   const styleImg = {
//     transform: `translate(${slot.offsetX}px, ${slot.offsetY}px) scale(${slot.zoom}) rotate(${slot.rotation}deg)`,
//     transformOrigin: "center center",
//     objectFit: slot.fit === "cover" ? "cover" : "contain",
//   };

//   return (
//     <div
//       className={`slot image ${isActive ? "selected" : ""}`}
//       onClick={onClick}
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={onDrop}
//       style={{ border: `${slot.border}px solid ${slot.color}` }}
//     >
//       <img src={slot.image} alt="" style={styleImg} draggable={false} />
//     </div>
//   );
// }
// import React, { useRef, useState } from "react";

// export default function ImageCell({
//   slot,
//   radius,
//   onDrop,
//   onClick
// }) {
//   const imgRef = useRef(null);
//   const [dragging, setDragging] = useState(false);
//   const lastPos = useRef({ x: 0, y: 0 });

//   /* ================= DRAG IMAGE ================= */

//   function onMouseDown(e) {
//     e.preventDefault();
//     setDragging(true);
//     lastPos.current = { x: e.clientX, y: e.clientY };
//   }

//   function onMouseMove(e) {
//     if (!dragging) return;

//     const dx = e.clientX - lastPos.current.x;
//     const dy = e.clientY - lastPos.current.y;

//     slot.offsetX += dx;
//     slot.offsetY += dy;

//     lastPos.current = { x: e.clientX, y: e.clientY };
//   }

//   function onMouseUp() {
//     setDragging(false);
//   }

//   /* ================= ZOOM WITH WHEEL ================= */

//   function onWheel(e) {
//     e.preventDefault();
//     const delta = e.deltaY > 0 ? -0.05 : 0.05;
//     slot.zoom = Math.min(3, Math.max(0.5, slot.zoom + delta));
//   }

//   /* ================= ROTATE (SHIFT + DRAG) ================= */

//   function onRotate(e) {
//     if (!e.shiftKey || !dragging) return;
//     slot.rotation += (e.movementX * 0.5);
//   }

//   return (
// <div
//   className={`slot ${slot.selected ? "selected" : ""}`}
//   style={{
//     borderRadius: radius,
//     border: `${slot.border}px solid ${slot.color}`, // ✅ FIX
//   }}
//   onClick={onClick}
//   onDrop={onDrop}
//   onDragOver={(e) => e.preventDefault()}
// >
//       <img
//         ref={imgRef}
//         src={slot.image}
//         alt=""
//         draggable={false}
//         onMouseDown={onMouseDown}
//         onMouseMove={(e) => {
//           onMouseMove(e);
//           onRotate(e);
//         }}
//         onMouseUp={onMouseUp}
//         onMouseLeave={onMouseUp}
//         onWheel={onWheel}
//         style={{
//           transform: `
//             translate(${slot.offsetX}px, ${slot.offsetY}px)
//             scale(${slot.zoom})
//             rotate(${slot.rotation}deg)
//           `,
//           objectFit: slot.fit || "cover"
//         }}
//       />
//     </div>
//   );
// }
// import React, { useRef, useState } from "react";

// export default function ImageCell({
//   slot,
//   radius,
//   onDrop,
//   onClick
// }) {
//   const imgRef = useRef(null);
//   const [dragging, setDragging] = useState(false);
//   const lastPos = useRef({ x: 0, y: 0 });

//   /* ================= DRAG IMAGE ================= */

//   function onMouseDown(e) {
//     e.preventDefault();
//     setDragging(true);
//     lastPos.current = { x: e.clientX, y: e.clientY };
//   }

//   function onMouseMove(e) {
//     if (!dragging) return;

//     const dx = e.clientX - lastPos.current.x;
//     const dy = e.clientY - lastPos.current.y;

//     slot.offsetX += dx;
//     slot.offsetY += dy;

//     lastPos.current = { x: e.clientX, y: e.clientY };
//   }

//   function onMouseUp() {
//     setDragging(false);
//   }

//   /* ================= ZOOM WITH WHEEL ================= */

//   function onWheel(e) {
//     e.preventDefault();
//     const delta = e.deltaY > 0 ? -0.05 : 0.05;
//     slot.zoom = Math.min(3, Math.max(0.5, slot.zoom + delta));
//   }

//   /* ================= ROTATE (SHIFT + DRAG) ================= */

//   function onRotate(e) {
//     if (!e.shiftKey || !dragging) return;
//     slot.rotation += e.movementX * 0.5;
//   }

//   return (
//     <div
//       className={`slot ${slot.selected ? "selected" : ""}`}
//       onClick={onClick}
//       onDrop={onDrop}
//       onDragOver={(e) => e.preventDefault()}
//       style={{
//         width: "100%",
//         height: "100%",
//         overflow: "hidden",                 // 🔥 REQUIRED for radius + export
//         borderRadius: radius,
//         border: `${slot.border}px solid ${slot.color}`,
//         background: "#fff"                  // 🔥 JPEG safe
//       }}
//     >
//       <img
//         ref={imgRef}
//         src={slot.image}
//         alt=""
//         draggable={false}
//         onMouseDown={onMouseDown}
//         onMouseMove={(e) => {
//           onMouseMove(e);
//           onRotate(e);
//         }}
//         onMouseUp={onMouseUp}
//         onMouseLeave={onMouseUp}
//         onWheel={onWheel}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: slot.fit || "cover",
//           transform: `
//             translate(${slot.offsetX}px, ${slot.offsetY}px)
//             scale(${slot.zoom})
//             rotate(${slot.rotation}deg)
//           `,
//           transformOrigin: "center",
//           imageRendering: "auto"             // 🔥 HD export fix
//         }}
//       />
//     </div>
//   );
// }
// import React, { useRef, useState } from "react";

// export default function ImageCell({
//   slot,
//   onDrop,
//   onClick
// }) {
//   const imgRef = useRef(null);
//   const [dragging, setDragging] = useState(false);
//   const lastPos = useRef({ x: 0, y: 0 });

//   /* ================= DRAG IMAGE ================= */

//   function onMouseDown(e) {
//     e.preventDefault();
//     setDragging(true);
//     lastPos.current = { x: e.clientX, y: e.clientY };
//   }

//   function onMouseMove(e) {
//     if (!dragging) return;

//     const dx = e.clientX - lastPos.current.x;
//     const dy = e.clientY - lastPos.current.y;

//     slot.offsetX += dx;
//     slot.offsetY += dy;

//     lastPos.current = { x: e.clientX, y: e.clientY };
//   }

//   function onMouseUp() {
//     setDragging(false);
//   }

//   /* ================= ZOOM WITH WHEEL ================= */

//   function onWheel(e) {
//     e.preventDefault();
//     const delta = e.deltaY > 0 ? -0.05 : 0.05;
//     slot.zoom = Math.min(3, Math.max(0.5, slot.zoom + delta));
//   }

//   /* ================= ROTATE (SHIFT + DRAG) ================= */

  
//   function onRotate(e) {
//     if (!e.shiftKey || !dragging) return;
//     slot.rotation += e.movementX * 0.5;
//   }

//   return (
//     <div
//       className={`slot ${slot.selected ? "selected" : ""}`}
//       onClick={onClick}
//       onDrop={onDrop}
//       onDragOver={(e) => e.preventDefault()}
//       style={{
//         width: "100%",
//         height: "100%",
//         overflow: "hidden",        // ✅ REQUIRED for radius
//         borderRadius: slot.radius,      // ✅ IMAGE border radius
//         border: `${slot.border}px solid ${slot.color}`,
//         background: "#ffffff"      // ✅ JPEG safe
//       }}
//     >
//       <img
//         ref={imgRef}
//         src={slot.image}
//         alt=""
//         draggable={false}
//         onMouseDown={onMouseDown}
//         onMouseMove={(e) => {
//           onMouseMove(e);
//           onRotate(e);
//         }}
//         onMouseUp={onMouseUp}
//         onMouseLeave={onMouseUp}
//         onWheel={onWheel}
//         style={{
//           width: "100%",
//           height: "100%",
//           objectFit: slot.fit || "cover",
//           transform: `
//             translate(${slot.offsetX}px, ${slot.offsetY}px)
//             scale(${slot.zoom})
//             rotate(${slot.rotation}deg)
//           `,
//           transformOrigin: "center",
//           imageRendering: "auto"
//         }}
//       />
//     </div>
//   );
// }
import React, { useRef } from "react";

export default function ImageCell({
  slot,
  isActive,
  onSelect,
  onUpdate,
  onReplace
}) {
  const lastPoint = useRef(null);
  const lastDistance = useRef(null);

  /* ================= POINTER DOWN (SELECT + START MOVE) ================= */
  function onPointerDown(e) {
    onSelect();
    e.target.setPointerCapture(e.pointerId);

    lastPoint.current = {
      x: e.clientX,
      y: e.clientY
    };
  }

  /* ================= POINTER MOVE (SMOOTH MOVE) ================= */
  function onPointerMove(e) {
    if (!isActive || !lastPoint.current) return;

    const dx = e.clientX - lastPoint.current.x;
    const dy = e.clientY - lastPoint.current.y;

    onUpdate({
      offsetX: slot.offsetX + dx,
      offsetY: slot.offsetY + dy
    });

    lastPoint.current = {
      x: e.clientX,
      y: e.clientY
    };
  }

  /* ================= POINTER UP ================= */
  function onPointerUp() {
    lastPoint.current = null;
  }

  /* ================= MOUSE WHEEL ZOOM ================= */
  function onWheel(e) {
    if (!isActive) return;
    e.preventDefault();

    const zoomStep = e.deltaY > 0 ? -0.1 : 0.1;

    onUpdate({
      zoom: Math.min(3, Math.max(0.5, slot.zoom + zoomStep))
    });
  }

  /* ================= TOUCH PINCH ZOOM ================= */
  function onTouchMove(e) {
    if (!isActive) return;

    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (lastDistance.current) {
        const diff = distance - lastDistance.current;
        onUpdate({
          zoom: Math.min(
            3,
            Math.max(0.5, slot.zoom + diff * 0.002)
          )
        });
      }

      lastDistance.current = distance;
    }
  }

  function onTouchEnd() {
    lastDistance.current = null;
  }

  /* ================= DRAG & DROP REPLACE ================= */
  function onDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    onReplace(URL.createObjectURL(file));
  }

  return (
    <div
      className={`slot ${isActive ? "active" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onWheel={onWheel}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: slot.radius,
        border: `${slot.border}px solid ${slot.color}`,
        background: "#fff",
        boxSizing: "border-box",
        touchAction: "none",
        cursor: isActive ? "grab" : "pointer"
      }}
    >
      <img
        src={slot.image}
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: "100%",
          objectFit: slot.fit || "cover",
          transform: `
            translate(${slot.offsetX}px, ${slot.offsetY}px)
            scale(${slot.zoom})
          `,
          transformOrigin: "center",
          willChange: "transform"
        }}
      />
    </div>
  );
}
