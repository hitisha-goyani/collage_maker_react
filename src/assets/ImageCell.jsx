import React from "react";

export default function ImageCell({ slot, isActive, onDrop, onClick }) {
  const styleImg = {
    transform: `translate(${slot.offsetX}px, ${slot.offsetY}px) scale(${slot.zoom}) rotate(${slot.rotation}deg)`,
    transformOrigin: "center center",
    objectFit: slot.fit === "cover" ? "cover" : "contain",
  };

  return (
    <div
      className={`slot image ${isActive ? "selected" : ""}`}
      onClick={onClick}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      style={{ border: `${slot.border}px solid ${slot.color}` }}
    >
      <img src={slot.image} alt="" style={styleImg} draggable={false} />
    </div>
  );
}
