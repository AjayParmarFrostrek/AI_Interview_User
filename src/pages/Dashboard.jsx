import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import FilterBar from "../components/FilterBar.jsx";
import JobCard from "../components/JobCard.jsx";
import { jobs } from "../data/jobs.js";

export default function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchText.toLowerCase()) ||
      job.company.toLowerCase().includes(searchText.toLowerCase());

    const matchesFilters =
      activeFilters.length === 0 ||
      activeFilters.every((filter) => {
        if (filter === "Entry Level") return job.level.includes("Entry");
        if (filter === "Mid-level") return job.level.includes("Mid");
        if (filter === "Senior") return job.level.includes("Senior");

        if (["Full-time", "Part-time", "Contract"].includes(filter)) {
          return job.type === filter;
        }

        if (filter === "Remote") {
          return job.location === "Remote";
        }

        return true;
      });

    return matchesSearch && matchesFilters;
  });

  return (
    <div style={{ padding: "24px", maxWidth: "1400px", margin: "0 auto" }}>
      <h2 style={{ fontWeight: 700 }}>Available Jobs</h2>

      <SearchBar
        onSearch={setSearchText}
        onToggleFilters={() => setShowFilters((prev) => !prev)}
      />

      {/* 👇 FilterBar only appears when button is clicked */}
      {showFilters && <FilterBar onFilterChange={setActiveFilters} />}

      <p style={{ color: "#64748b", fontSize: 13 }}>
        Showing <strong>{filteredJobs.length}</strong> jobs
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {filteredJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
