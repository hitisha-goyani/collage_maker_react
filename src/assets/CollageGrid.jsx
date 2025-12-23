// // import React, { useRef } from "react";
// // import SlotPlaceholder from "./SlotPlaceholder";
// // import ImageCell from "./ImageCell";

// // export default function CollageGrid({
// //   slots,
// //   setSlots,
// //   activeSlotId,
// //   setActiveSlotId,
// //   cellSpacing,
// //   radius,
// //   canvasSize,
// //   columns
// // }) {
// //   const stageRef = useRef();
// //   const rows = Math.ceil(slots.length / columns);

// //   const MAX_PREVIEW_WIDTH = 720;
// //   const MAX_PREVIEW_HEIGHT = window.innerHeight - 160;

// //   const scale = Math.min(
// //     MAX_PREVIEW_WIDTH / canvasSize.viewWidth,
// //     MAX_PREVIEW_HEIGHT / canvasSize.viewHeight,
// //     1
// //   );

// //   function handleUpload(e, id) {
// //     const file = e.target.files?.[0];
// //     if (!file) return;

// //     const url = URL.createObjectURL(file);
// //     setSlots(prev =>
// //       prev.map(s => (s.id === id ? { ...s, image: url } : s))
// //     );
// //     setActiveSlotId(id);
// //   }

// //   function onDropFile(e, id) {
// //     e.preventDefault();
// //     const file = e.dataTransfer.files?.[0];
// //     if (!file) return;
// //     handleUpload({ target: { files: [file] } }, id);
// //   }

// //   return (
// //     <div
// //       className="panel canvas-panel"
// //       style={{
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "flex-start",
// //         overflow: "auto"
// //       }}
// //     >
// //       {/* SCALE WRAPPER */}
// //       <div
// //         style={{
// //           transform: `scale(${scale})`,
// //           transformOrigin: "top center"
// //         }}
// //       >
// //      <div
// //   className="canvas-stage"
// //   style={{
// //     width: canvasSize.viewWidth,
// //     height: canvasSize.viewHeight,
// //     transform: `scale(${scale})`,
// //     transformOrigin: "top center",
// //     padding: cellSpacing,
// //     borderRadius: radius
// //   }}
// // >
// //           <div
// //             className="grid-wrap"
// //             style={{
// //               width: "100%",
// //               height: "100%",
// //               display: "grid",
// //               gap: cellSpacing,
// //               gridTemplateColumns: `repeat(${columns}, 1fr)`,
// //               gridTemplateRows: `repeat(${rows}, 1fr)`
// //             }}
// //           >
// //             {slots.map(slot =>
// //               slot.image ? (
// //                 <ImageCell
// //                   key={slot.id}
// //                   slot={slot}
// //                   radius={radius}
// //                   onDrop={e => onDropFile(e, slot.id)}
// //                   onClick={() => setActiveSlotId(slot.id)}
// //                 />
// //               ) : (
// //                 <SlotPlaceholder
// //                   key={slot.id}
// //                   id={slot.id}
// //                   radius={radius}
// //                   onUpload={e => handleUpload(e, slot.id)}
// //                   onDrop={e => onDropFile(e, slot.id)}
// //                 />
// //               )
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import SlotPlaceholder from "./SlotPlaceholder";
// import ImageCell from "./ImageCell";
// import { forwardRef } from "react";


// export default function CollageGrid({
//   slots,
//   setSlots,
//   activeSlotId,
//   setActiveSlotId,
//   cellSpacing,
//   radius,
//   canvasSize,
//   columns
// }) {
//   const rows = Math.ceil(slots.length / columns);

//   function handleUpload(e, id) {
//     const file = e.target.files[0];
//     if (!file) return;

//     const url = URL.createObjectURL(file);

//     setSlots(prev =>
//       prev.map(s =>
//         s.id === id ? { ...s, image: url } : s
//       )
//     );

//     setActiveSlotId(id);
//   }

//   return (
//     <div className="panel canvas-panel">
//       <div
//         className="canvas-stage"
//         style={{
//           width: canvasSize.viewWidth,
//           height: canvasSize.viewHeight,
//           padding: cellSpacing,
//           borderRadius: radius
//         }}
//       >
//         <div
//           className="grid-wrap"
//           style={{
//             gap: cellSpacing,
//             gridTemplateColumns: `repeat(${columns}, 1fr)`,
//             gridTemplateRows: `repeat(${rows}, 1fr)`
//           }}
//         >
//           {slots.map(slot =>
//             slot.image ? (
//               <ImageCell
//                 key={slot.id}
//                 slot={slot}
//                 radius={radius}
//                 isActive={activeSlotId === slot.id}
//                 onClick={() => setActiveSlotId(slot.id)}
//               />
//             ) : (
//               <SlotPlaceholder
//                 key={slot.id}
//                 onUpload={e => handleUpload(e, slot.id)}
//               />
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { forwardRef } from "react";
import SlotPlaceholder from "./SlotPlaceholder";
import ImageCell from "./ImageCell";

const CollageGrid = forwardRef(({
  slots,
  setSlots,
  activeSlotId,
  setActiveSlotId,
  cellSpacing,
  radius,
  canvasSize,
  columns
}, ref) => {

  const rows = Math.ceil(slots.length / columns);

  function handleUpload(e, id) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    setSlots(prev =>
      prev.map(s =>
        s.id === id ? { ...s, image: url } : s
      )
    );

    setActiveSlotId(id);
  }

  return (
    <div
      className="panel canvas-panel"
      style={{
        display: "flex",
        justifyContent: "center",
        overflow: "auto"
      }}
    >
      {/* 👉 THIS IS THE EXPORTABLE AREA */}
   <div
  ref={ref}
  className="canvas-stage"
  style={{
    width: canvasSize.viewWidth,
    height: canvasSize.viewHeight,
    padding: cellSpacing,
    background: "#ffffff"
  }}
>
  <div
    className="grid-wrap"
    style={{
      width: "100%",
      height: "100%",
      display: "grid",
      gap: cellSpacing,
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`
    }}
  >
    {slots.map(slot =>
      slot.image ? (
        <ImageCell
          key={slot.id}
          slot={slot}
          isActive={activeSlotId === slot.id}
          onClick={() => setActiveSlotId(slot.id)}
        />
      ) : (
        <SlotPlaceholder
          key={slot.id}
          onUpload={e => handleUpload(e, slot.id)}
        />
      )
    )}
  </div>
</div>
    </div>
  );
});

export default CollageGrid;
