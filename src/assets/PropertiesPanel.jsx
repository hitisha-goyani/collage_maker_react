import React from "react";

export default function PropertiesPanel({
  slots,
  setSlots,
  activeSlotId,
  setActiveSlotId,
}) {
  const slot = slots.find((s) => s.id === activeSlotId);

  // No slot selected
  if (!slot) {
    return (
      <div className="panel properties">
        <h3>Properties</h3>
        <p>Select a slot to edit its image</p>
      </div>
    );
  }

  // Single update helper
  function update(key, value) {
    setSlots((prev) =>
      prev.map((s) =>
        s.id === slot.id ? { ...s, [key]: value } : s
      )
    );
  }

  // Reset all image settings (batched update)
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

  // Replace image safely (no memory leak)
  function replaceImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (slot.image) URL.revokeObjectURL(slot.image);
      const url = URL.createObjectURL(file);
      update("image", url);
    };

    input.click();
  }

  // Remove image
  function removeImage() {
    if (slot.image) URL.revokeObjectURL(slot.image);
    update("image", null);
    setActiveSlotId(null);
  }

  return (
    <div className="panel properties">
      <h3>Image Settings</h3>

      {/* ZOOM */}
      <label>Zoom</label>
      <input
        type="range"
        min="0.5"
        max="3"
        step="0.05"
        value={slot.zoom}
        onChange={(e) => update("zoom", parseFloat(e.target.value))}
      />

      {/* MOVE X */}
      <label>Move Left / Right</label>
      <input
        type="range"
        min="-150"
        max="150"
        value={slot.offsetX}
        onChange={(e) => update("offsetX", Number(e.target.value))}
      />

      {/* MOVE Y */}
      <label>Move Up / Down</label>
      <input
        type="range"
        min="-150"
        max="150"
        value={slot.offsetY}
        onChange={(e) => update("offsetY", Number(e.target.value))}
      />

      {/* ROTATION */}
      <label>Rotation</label>
      <input
        type="range"
        min="-180"
        max="180"
        value={slot.rotation}
        onChange={(e) => update("rotation", Number(e.target.value))}
      />

      {/* FIT MODE */}
      <label>Fit Mode</label>
      <select
        value={slot.fit}
        onChange={(e) => update("fit", e.target.value)}
        style={{ width: "100%", padding: "8px", borderRadius: 8 }}
      >
        <option value="cover">Cover (fill slot)</option>
        <option value="contain">Contain (fit whole)</option>
      </select>

      {/* BORDER */}
      <label>Border Width</label>
      <input
        type="range"
        min="0"
        max="20"
        value={slot.border}
        onChange={(e) => update("border", Number(e.target.value))}
      />

      <label>Border Color</label>
      <input
        type="color"
        className="color"
        value={slot.color}
        onChange={(e) => update("color", e.target.value)}
      />

      {/* ACTION BUTTONS */}
      <div className="row-btns">
        <button className="btn primary" onClick={replaceImage}>
          Replace Image
        </button>

        <button
          className="btn ghost"
          onClick={() => alert("Text feature can be added")}
        >
          Add Text
        </button>
      </div>

      <div className="row-btns">
        <button className="btn ghost" onClick={removeImage}>
          Remove
        </button>

        <button className="btn warn" onClick={resetSlot}>
          Reset
        </button>
      </div>
    </div>
  );
}
