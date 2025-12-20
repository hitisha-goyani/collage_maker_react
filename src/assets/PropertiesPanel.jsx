import React from "react";

export default function PropertiesPanel({
  /* GLOBAL CONTROLS */
  cellSpacing,
  setCellSpacing,
  cornerRadius,
  setCornerRadius,

  /* SLOT CONTROLS */
  slots,
  setSlots,
  activeSlotId,
  setActiveSlotId
}) {
  const slot = slots.find((s) => s.id === activeSlotId);

  /* ================= GLOBAL CANVAS CONTROLS ================= */

  const isCircle = cornerRadius >= 50;

  /* ================= SLOT UPDATE HELPERS ================= */

  function update(key, value) {
    setSlots((prev) =>
      prev.map((s) =>
        s.id === slot.id ? { ...s, [key]: value } : s
      )
    );
  }

  function resetSlot() {
    setSlots((prev) =>
      prev.map((s) =>
        s.id === slot.id
          ? {
              ...s,
              zoom: 1,
              offsetX: 0,
              offsetY: 0,
              rotation: 0,
              border: 0,
              color: "#ffffff",
            }
          : s
      )
    );
  }

  function replaceImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (slot?.image) URL.revokeObjectURL(slot.image);
      const url = URL.createObjectURL(file);
      update("image", url);
    };

    input.click();
  }

  function removeImage() {
    if (slot?.image) URL.revokeObjectURL(slot.image);
    update("image", null);
    setActiveSlotId(null);
  }

  /* ================= RENDER ================= */

  return (
    <div className="panel properties">
      <h3>Canvas</h3>

      {/* SPACING */}
      <label>Spacing</label>
      <input
        type="range"
        min="0"
        max="60"
        value={cellSpacing}
        onChange={(e) => setCellSpacing(+e.target.value)}
      />

      {/* CORNER RADIUS */}
      <label>
        Corner Radius {isCircle && "(Circle)"}
      </label>
      <input
        type="range"
        min="0"
        max="50"
        value={cornerRadius}
        onChange={(e) => setCornerRadius(+e.target.value)}
      />

      <hr style={{ margin: "16px 0" }} />

      <h3>Image</h3>

      {/* NO SLOT SELECTED */}
      {!slot && (
        <p style={{ fontSize: 12, color: "#888" }}>
          Select a slot to edit image
        </p>
      )}

      {/* SLOT CONTROLS */}
      {slot && (
        <>
          <label>Zoom</label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.05"
            value={slot.zoom}
            onChange={(e) =>
              update("zoom", parseFloat(e.target.value))
            }
          />

          <label>Move Left / Right</label>
          <input
            type="range"
            min="-150"
            max="150"
            value={slot.offsetX}
            onChange={(e) =>
              update("offsetX", Number(e.target.value))
            }
          />

          <label>Move Up / Down</label>
          <input
            type="range"
            min="-150"
            max="150"
            value={slot.offsetY}
            onChange={(e) =>
              update("offsetY", Number(e.target.value))
            }
          />

          <label>Rotation</label>
          <input
            type="range"
            min="-180"
            max="180"
            value={slot.rotation}
            onChange={(e) =>
              update("rotation", Number(e.target.value))
            }
          />

          <label>Fit Mode</label>
          <select
            value={slot.fit}
            onChange={(e) => update("fit", e.target.value)}
            style={{ width: "100%", padding: 8, borderRadius: 8 }}
          >
            <option value="cover">Cover</option>
            <option value="contain">Contain</option>
          </select>

          <label>Border Width</label>
          <input
            type="range"
            min="0"
            max="20"
            value={slot.border}
            onChange={(e) =>
              update("border", Number(e.target.value))
            }
          />

          <label>Border Color</label>
          <input
            type="color"
            className="color"
            value={slot.color}
            onChange={(e) =>
              update("color", e.target.value)
            }
          />

          <div className="row-btns">
            <button className="btn primary" onClick={replaceImage}>
              Replace
            </button>
            <button className="btn ghost" onClick={removeImage}>
              Remove
            </button>
          </div>
            <div  className="row-btns" >
                  <button className="btn warn" onClick={resetSlot}>
            Reset Image
          </button>
            </div>
      
        </>
      )}
    </div>
  );
}
