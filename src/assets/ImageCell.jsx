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
import React, { useRef, useState } from "react";

export default function ImageCell({
  slot,
  radius,
  onDrop,
  onClick
}) {
  const imgRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef({ x: 0, y: 0 });

  /* ================= DRAG IMAGE ================= */

  function onMouseDown(e) {
    e.preventDefault();
    setDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseMove(e) {
    if (!dragging) return;

    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;

    slot.offsetX += dx;
    slot.offsetY += dy;

    lastPos.current = { x: e.clientX, y: e.clientY };
  }

  function onMouseUp() {
    setDragging(false);
  }

  /* ================= ZOOM WITH WHEEL ================= */

  function onWheel(e) {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    slot.zoom = Math.min(3, Math.max(0.5, slot.zoom + delta));
  }

  /* ================= ROTATE (SHIFT + DRAG) ================= */

  function onRotate(e) {
    if (!e.shiftKey || !dragging) return;
    slot.rotation += e.movementX * 0.5;
  }

  return (
    <div
      className={`slot ${slot.selected ? "selected" : ""}`}
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",                 // 🔥 REQUIRED for radius + export
        borderRadius: radius,
        border: `${slot.border}px solid ${slot.color}`,
        background: "#fff"                  // 🔥 JPEG safe
      }}
    >
      <img
        ref={imgRef}
        src={slot.image}
        alt=""
        draggable={false}
        onMouseDown={onMouseDown}
        onMouseMove={(e) => {
          onMouseMove(e);
          onRotate(e);
        }}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onWheel={onWheel}
        style={{
          width: "100%",
          height: "100%",
          objectFit: slot.fit || "cover",
          transform: `
            translate(${slot.offsetX}px, ${slot.offsetY}px)
            scale(${slot.zoom})
            rotate(${slot.rotation}deg)
          `,
          transformOrigin: "center",
          imageRendering: "auto"             // 🔥 HD export fix
        }}
      />
    </div>
  );
}
