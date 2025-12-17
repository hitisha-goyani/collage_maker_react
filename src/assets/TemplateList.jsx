import React, { useState } from "react";

export default function TemplateList({
  templates,
  onLoad,
  activeTemplateId
}) {
  const categories = [...new Set(templates.map(t => t.category))];
  const [activeCat, setActiveCat] = useState(categories[0]);

  const filteredTemplates = templates.filter(
    t => t.category === activeCat
  );

  return (
    <div className="panel templates-header">
      <h3>Templates</h3>

      <div className="category-row">
        {categories.map(c => (
          <button
            key={c}
            className={`category-btn ${
              c === activeCat ? "active" : ""
            }`}
            onClick={() => setActiveCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="template-list">
        {filteredTemplates.map(t => (
          <div
            key={t.id}
            className={`template-card ${
              t.id === activeTemplateId ? "active" : ""
            }`}
            role="button"
            tabIndex={0}
            onClick={() => onLoad(t.id)}
          >
            <div className="template-thumb" />
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700 }}>{t.name}</div>
              <div style={{ color: "#888", fontSize: 13 }}>
                {t.slots.length} slots
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
