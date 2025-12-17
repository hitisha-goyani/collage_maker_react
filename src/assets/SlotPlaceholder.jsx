import React from "react";

export default function SlotPlaceholder({ id, onUpload, onDrop, radius }) {
  const inputId = `upload-${id}`;

  return (
    <label
      htmlFor={inputId}
      className="slot placeholder"
      role="button"
      tabIndex={0}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onDrop(e);
      }}
      style={{ borderRadius: `${radius}px` }}
    >
      <div className="add-txt">+ Add image</div>

      <input
        id={inputId}
        type="file"
        accept="image/*"
        onChange={onUpload}
        hidden
      />
    </label>
  );
}
