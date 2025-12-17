// // import React, { useState } from "react";
// // import sizes from "../data/sizes";

// // export default function SizePanel({ setCanvasSize }) {
// //   const [active, setActive] = useState(sizes[0].name);

// //   const selectSize = (size) => {
// //     setActive(size.name);

// //     if (size.name === "Custom") {
// //       // ✅ call with params, not object
// //       setCanvasSize(1200, 1200, "Custom");
// //       return;
// //     }

// //     // ✅ correct function call
// //     setCanvasSize(size.w, size.h, size.ratio);
// //   };

// //   return (
// //     <div className="size-panel-wrapper">
// //       <div className="size-grid">
// //         {sizes.map((size, idx) => (
// //           <div
// //             key={idx}
// //             className={`size-card ${
// //               active === size.name ? "size-active" : ""
// //             }`}
// //             onClick={() => selectSize(size)}
// //           >
// //             <div className="size-preview">
// //               <div
// //                 className="size-box"
// //                 style={{
// //                   aspectRatio: `${size.w}/${size.h}`,
// //                   maxWidth: 56,
// //                   maxHeight: 56,
// //                 }}
// //               />
// //             </div>

// //             <div className="size-label-name">{size.name}</div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// import React, { useState } from "react";
// import sizes from "../data/sizes";

// export default function SizePanel({ setCanvasSize }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div style={{ position: "relative" }}>
//       {/* ICON */}
//       <button onClick={() => setOpen(!open)}>
//         📐 Sizes
//       </button>

//       {/* DROPDOWN */}
//       {open && (
//         <div className="size-dropdown">
//           {sizes.map((s, i) => (
//             <div
//               key={i}
//               className="size-item"
//               onClick={() => {
//                 setCanvasSize(s.w, s.h, s.ratio);
//                 setOpen(false);
//               }}
//             >
//               {s.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }


// import React, { useState } from "react";
// import sizes from "../data/sizes";

// export default function SizePanel({ setCanvasSize }) {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState(sizes[0].name);

//   const handleSelect = (s) => {
//     setActive(s.name);
//     setCanvasSize(s.w, s.h, s.ratio);
//     setOpen(false);
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       {/* BUTTON */}
//       <button
//         onClick={() => setOpen(!open)}
//         style={{
//           padding: "8px 12px",
//           borderRadius: "10px",
//           border: "1px solid #ddd",
//           cursor: "pointer",
//           background: "#fff"
//         }}
//       >
//         📐 {active}
//       </button>

//       {/* DROPDOWN */}
//       {open && (
//         <div className="size-dropdown">
//           {sizes.map((s, i) => (
//             <div
//               key={i}
//               className={`size-item ${
//                 active === s.name ? "size-active" : ""
//               }`}
//               onClick={() => handleSelect(s)}
//             >
//               {s.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import sizes from "../data/sizes";

/* ICONS */
import {
  FiMaximize,
  FiSquare,
  FiSmartphone,
  FiMonitor,
  FiFileText
} from "react-icons/fi";

export default function SizePanel({ setCanvasSize }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(sizes[0].name);

  const handleSizeClick = (size) => {
    setActive(size.name);
    setCanvasSize(size.w, size.h, size.ratio);
  };

  /* MAP SIZE TYPES TO ICONS */
  const getSizeIcon = (ratio) => {
    if (ratio === "1:1") return <FiSquare size={14} />;
    if (ratio === "9:16") return <FiSmartphone size={14} />;
    if (ratio === "16:9") return <FiMonitor size={14} />;
    if (ratio.includes("A4")) return <FiFileText size={14} />;
    return <FiMaximize size={14} />;
  };

  return (
    <div className="size-panel-wrapper">

      {/* HEADER */}
      <div
        className="size-header"
        onClick={() => setOpen(!open)}
      >
        <FiMaximize size={16} />
        <span className="size-title">Sizes</span>
      </div>

      {/* SIZE LIST */}
      {open && (
        <div className="size-list">
          {sizes.map((size, i) => (
            <div
              key={i}
              className={`size-row ${
                active === size.name ? "active" : ""
              }`}
              onClick={() => handleSizeClick(size)}
            >
              {/* ICON */}
              <span className="size-row-icon">
                {getSizeIcon(size.ratio)}
              </span>

              {/* TEXT */}
              <span>{size.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
