import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GridIcon from "../assets/grid.svg";   // ✅ Make sure this exists
import FilterIcon from "../assets/filter.svg"; // ✅ Make sure this exists

export default function SearchBar({ view, setView, onSearch, onToggleFilters }) {
  const [activeView, setActiveView] = useState(view || "grid");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleViewChange = (type) => {
    setActiveView(type);
    if (setView) setView(type);

    // Navigate to the appropriate route if needed
    if (type === "grid") navigate("/JobCard");
    if (type === "list") navigate("/JobList");
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        margin: "16px 0",
        alignItems: "center",
      }}
    >
      {/* Search Input */}
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (onSearch) onSearch(e.target.value);
        }}
        placeholder="Search jobs, companies..."
        style={{
          flex: 1,
          padding: "12px 14px",
          borderRadius: 10,
          border: "1px solid #e5e7eb",
        }}
      />

      {/* Filters Button */}
      <button
        onClick={onToggleFilters}
        style={{
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
          background: "#fff",
          cursor: "pointer",
          transition: "0.2s ease",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#4A47FF";
          e.currentTarget.style.color = "#4A47FF";
          e.currentTarget.style.background = "#EEF0FF";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#e5e7eb";
          e.currentTarget.style.color = "#111827";
          e.currentTarget.style.background = "#fff";
        }}
      >
        <img
          src={FilterIcon}
          alt="Filter"
          style={{ width: "14px", height: "14px" }}
        />
      </button>

      {/* View Toggle */}
      <div
        style={{
          display: "flex",
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {/* Grid View */}
        <button
          onClick={() => handleViewChange("grid")}
          style={{
            padding: "10px 14px",
            border: "none",
            cursor: "pointer",
            background: activeView === "grid" ? "#4A47FF" : "#fff",
            color: activeView === "grid" ? "#fff" : "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={GridIcon}
            alt="Grid"
            style={{ width: "14px", height: "14px" }}
          />
        </button>

        {/* List View */}
        <button
          onClick={() => handleViewChange("list")}
          style={{
            padding: "10px 14px",
            border: "none",
            cursor: "pointer",
            background: activeView === "list" ? "#4A47FF" : "#fff",
            color: activeView === "list" ? "#fff" : "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ☰
        </button>
      </div>
    </div>
  );
}
