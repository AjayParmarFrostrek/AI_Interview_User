import { useNavigate } from "react-router-dom";
import locationIcon from "../assets/location.svg";
import timeIcon from "../assets/time.svg"; // make sure you have this file in src/assets

export default function JobCard({ job }) {
  const navigate = useNavigate();

  const tags = job.tags || job.technologies || [];
  const visibleTags = tags.slice(0, 4);
  const extraCount = tags.length - 4;

  return (
    <div
      className="job-card"
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        background: "#fff",
        margin: "8px",
        padding: "16px",
      }}
    >
      {/* Header */}
      <div
        className="job-card-header"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* Logo */}
        <div
          className="job-icon"
          style={{
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            background: "#eef2ff",
            fontSize: "18px",
            flexShrink: 0,
          }}
        >
          🏢
        </div>

        {/* Title + Company */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h3
            className="job-title"
            style={{
              marginBottom: "1px",
              lineHeight: "1.2",
              fontWeight: "700",
              fontSize: "16px",
              color: "#111827",
            }}
          >
            {job.title}
          </h3>

          <p
            className="job-company"
            style={{
              marginTop: "0px",
              lineHeight: "1.1",
            }}
          >
            {job.company}
          </p>
        </div>
      </div>

      {/* Location + Time */}
      <div
        className="job-meta"
        style={{
          display: "flex",
          gap: "18px",
          marginTop: "6px",
          alignItems: "center",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img
            src={locationIcon}
            alt="Location"
            style={{ width: "14px", height: "14px" }}
          />
          {job.location}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <img
            src={timeIcon}
            alt="Time"
            style={{ width: "14px", height: "14px" }}
          />
          {job.time}
        </span>
      </div>

      {/* Level + Type */}
      <div
        className="job-badges"
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <span
          className="badge"
          style={{
            padding: "6px 12px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            background: "#f9fafb",
            fontSize: "12px",
            fontWeight: "700",
          }}
        >
          {job.level}
        </span>

        <span
          className="badge"
          style={{
            padding: "6px 12px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            background: "#f9fafb",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          {job.type}
        </span>
      </div>

      {/* Tech stack */}
      <div
        className="job-tags"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          marginTop: "10px",
        }}
      >
        {visibleTags.map((tag, i) => (
          <span
            key={i}
            className="tag"
            style={{
              padding: "6px 10px",
              border: "1px solid #e5e7eb",
              borderRadius: "999px",
              fontSize: "12px",
              background: "#f9fafb",
              color: "#4A47FF",
              fontWeight: "500",
            }}
          >
            {tag}
          </span>
        ))}

        {extraCount > 0 && (
          <span
            className="tag muted"
            style={{
              padding: "6px 10px",
              border: "1px dashed #c7d2fe",
              borderRadius: "999px",
              fontSize: "12px",
              background: "#eef2ff",
              color: "#4A47FF",
              fontWeight: "600",
            }}
          >
            +{extraCount}
          </span>
        )}
      </div>

      {/* Button */}
      <button
        onClick={() => navigate(`/job/${job.id}`)}
        style={{
          width: "100%",
          padding: "12px 0",
          marginTop: "16px",
          borderRadius: "14px",
          border: "1.5px solid #4A47FF",
          background: "#ffffff",
          color: "#4A47FF",
          fontSize: "15px",
          fontWeight: "600",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          transition: "all 0.25s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#4A47FF";
          e.currentTarget.style.color = "#ffffff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#ffffff";
          e.currentTarget.style.color = "#4A47FF";
        }}
      >
        <span>View Details</span>
        <span style={{ fontSize: "16px", transition: "transform 0.25s ease" }}>
          →
        </span>
      </button>
    </div>
  );
}
