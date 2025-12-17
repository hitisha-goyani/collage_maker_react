import React, { useState } from "react";
import { TEMPLATE_CATEGORIES } from "../data/templates";

/* ================= CATEGORY ICONS ================= */
import {
  FiGift,
  FiUsers,
  FiBook,
  FiHeart,
  FiHome,
  FiSmile,
  FiMapPin,
  FiStar,
  FiLayout
} from "react-icons/fi";
import { FaPaw, FaRegSmileBeam } from "react-icons/fa";

/* ================= TEMPLATE ICONS ================= */
import {
  FiGrid,
  FiLayers,
  FiImage
} from "react-icons/fi";

/* -------- CATEGORY ICON MAP -------- */
const CATEGORY_ICON_MAP = {
  gift: FiGift,
  users: FiUsers,
  book: FiBook,
  heart: FiHeart,
  home: FiHome,
  smile: FiSmile,
  paw: FaPaw,
  map: FiMapPin,
  star: FiStar
};

/* -------- TEMPLATE ICON MAP -------- */
const TEMPLATE_ICON_MAP = {
  grid: FiGrid,
  layers: FiLayers,
  sparkle: FiStar,
  heart: FiHeart,
  image: FiImage,
  party: FaRegSmileBeam
};

/* --------------------------------------------------
   MINI TEMPLATE PREVIEW
-------------------------------------------------- */
function TemplatePreview({ columns, count }) {
  const rows = Math.ceil(count / columns);

  return (
    <div
      className="template-preview"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="preview-cell" />
      ))}
    </div>
  );
}

/* --------------------------------------------------
   TEMPLATE PANEL
-------------------------------------------------- */
export default function TemplatePanel({ onSelect }) {
  const [openTemplates, setOpenTemplates] = useState(true);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleTemplates = () => {
    setOpenTemplates(prev => !prev);
    setOpenCategory(null);
  };

  const toggleCategory = (category) => {
    setOpenCategory(prev => (prev === category ? null : category));
  };

  return (
    <div className="template-panel">

      {/* MAIN HEADER */}
      <div className="template-main-header" onClick={toggleTemplates}>
        <FiLayout size={16} /> Templates
      </div>

      {/* CATEGORY LIST */}
      {openTemplates && (
        <div className="template-categories">

          {TEMPLATE_CATEGORIES.map((cat, index) => {
            const CatIcon = CATEGORY_ICON_MAP[cat.icon];

            return (
              <div key={index} className="template-category">

                {/* CATEGORY HEADER */}
                <div
                  className="template-header"
                  onClick={() => toggleCategory(cat.category)}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    {CatIcon && <CatIcon size={14} />}
                    {cat.category}
                  </span>

                  <span className="arrow">
                    {openCategory === cat.category ? "▾" : "▸"}
                  </span>
                </div>

                {/* TEMPLATE LIST */}
                {openCategory === cat.category && (
                  <div className="template-list">
                    {cat.templates.map(template => {
                      const TempIcon = TEMPLATE_ICON_MAP[template.icon];

                      return (
                        <div
                          key={template.id}
                          className="template-row"
                          onClick={() => onSelect(template)}
                        >
                          {/* MINI PREVIEW */}
                          <TemplatePreview
                            columns={template.columns}
                            count={template.slots.length}
                          />

                          {/* TEMPLATE NAME + ICON */}
                          <span className="template-name">
                            {TempIcon && (
                              <TempIcon
                                size={13}
                                style={{ marginRight: 6 }}
                              />
                            )}
                            {template.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            );
          })}

        </div>
      )}

    </div>
  );
}
