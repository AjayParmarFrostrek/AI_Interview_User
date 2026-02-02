import { useState } from "react";

const filters = [
  "Entry Level",
  "Mid-level",
  "Senior",
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
];

export default function FilterBar({ onFilterChange }) {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filter) => {
    let updatedFilters;

    if (activeFilters.includes(filter)) {
      updatedFilters = activeFilters.filter((f) => f !== filter);
    } else {
      updatedFilters = [...activeFilters, filter];
    }

    setActiveFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "16px",
      }}
    >
      {filters.map((f) => {
        const isActive = activeFilters.includes(f);

        return (
          <span
            key={f}
            onClick={() => toggleFilter(f)}
            style={{
              padding: "6px 12px",
              border: `1px solid ${isActive ? "#4A47FF" : "#e5e7eb"}`,
              borderRadius: "999px",
              background: isActive ? "#EEF0FF" : "#f9fafb",
              fontSize: "13px",
              cursor: "pointer",
              color: isActive ? "#4A47FF" : "#111827",
              transition: "0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#4A47FF";
              e.target.style.color = "#4A47FF";
              e.target.style.background = "#EEF0FF";
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.target.style.borderColor = "#e5e7eb";
                e.target.style.color = "#111827";
                e.target.style.background = "#f9fafb";
              }
            }}
          >
            {f}
          </span>
        );
      })}
    </div>
  );
}
