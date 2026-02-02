import { useNavigate } from "react-router-dom";

export default function JobDetails() {
  const navigate = useNavigate();

  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "24px",
      fontFamily: "Inter, system-ui, sans-serif",
    },

    backBtn: {
      background: "none",
      border: "none",
      color: "#64748b",
      cursor: "pointer",
      marginBottom: "16px",
      fontSize: "14px",
    },

    card: {
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: "14px",
      padding: "20px",
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      marginBottom: "24px",
      flexWrap: "wrap",
    },

    headerLeft: {
      display: "flex",
      gap: "16px",
    },

    icon: {
      width: "52px",
      height: "52px",
      borderRadius: "12px",
      background: "#4f46e5",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "22px",
    },

    title: {
      fontSize: "18px",
      fontWeight: "600",
    },

    company: {
      fontSize: "14px",
      color: "#64748b",
    },

    meta: {
      display: "flex",
      gap: "14px",
      fontSize: "13px",
      color: "#64748b",
      marginTop: "6px",
      flexWrap: "wrap",
    },

    badgeWrap: {
      display: "flex",
      gap: "8px",
      alignItems: "flex-start",
    },

    badge: {
      fontSize: "11px",
      padding: "4px 10px",
      borderRadius: "999px",
      background: "#f1f5f9",
      color: "#334155",
      fontWeight: "500",
    },

    layout: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "24px",
    },

    section: {
      marginBottom: "24px",
    },

    sectionTitle: {
      fontSize: "16px",
      marginBottom: "8px",
      fontWeight: "600",
    },

    text: {
      fontSize: "14px",
      color: "#64748b",
      lineHeight: "1.6",
    },

    list: {
      paddingLeft: "18px",
      fontSize: "14px",
      color: "#64748b",
    },

    listItem: {
      marginBottom: "8px",
    },

    tagsBox: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      padding: "10px",
      border: "1px solid #e5e7eb",
      borderRadius: "10px",
      background: "#fafafa",
      marginTop: "8px",
      width: "100%",
      boxSizing: "border-box",
    },

    tag: {
      fontSize: "11px",
      padding: "4px 10px",
      borderRadius: "999px",
      background: "#eef2ff",
      color: "#4f46e5",
      border: "1px solid #c7d2fe",
    },

    applyCard: {
      background: "#ffffff",
      border: "1px solid #e5e7eb",
      borderRadius: "14px",
      padding: "20px",
      height: "fit-content",
    },

    applyTitle: {
      fontSize: "16px",
      marginBottom: "6px",
      fontWeight: "600",
    },

    steps: {
      paddingLeft: "18px",
      marginBottom: "16px",
      fontSize: "14px",
      color: "#64748b",
    },

    applyBtn: {
      width: "100%",
      padding: "12px",
      borderRadius: "10px",
      border: "none",
      background: "#4f46e5",
      color: "#fff",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      marginBottom: "10px",
    },

    small: {
      fontSize: "12px",
      color: "#64748b",
    },
  };

  return (
    <div style={styles.container}>
      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back to Jobs
      </button>

      {/* Header */}
      <div style={{ ...styles.card, ...styles.header }}>
        <div style={styles.headerLeft}>
          <div style={styles.icon}>🏢</div>
          <div>
            <div style={styles.title}>Senior Frontend Developer</div>
            <div style={styles.company}>TechCorp Inc.</div>
            <div style={styles.meta}>
              <span>📍 San Francisco, CA</span>
              <span>⏱ 2 days ago</span>
              <span>💰 $150,000 – $180,000</span>
            </div>
          </div>
        </div>

        <div style={styles.badgeWrap}>
          <span style={styles.badge}>Senior (5+ years)</span>
          <span style={styles.badge}>Full-time</span>
        </div>
      </div>

      {/* Content */}
      <div style={styles.layout}>
        {/* Left */}
        <div>
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Job Overview</div>
            <p style={styles.text}>
              We are looking for a Senior Frontend Developer to join our dynamic
              team and help build cutting-edge web applications used by millions
              of users daily.
            </p>
          </div>

          <div style={styles.section}>
            <div style={styles.sectionTitle}>Responsibilities</div>
            <ul style={styles.list}>
              <li style={styles.listItem}>Build complex React features</li>
              <li style={styles.listItem}>Mentor junior developers</li>
              <li style={styles.listItem}>Collaborate with designers</li>
              <li style={styles.listItem}>Optimize performance</li>
              <li style={styles.listItem}>Architect scalable systems</li>
            </ul>
          </div>

          <div style={styles.section}>
            <div style={styles.sectionTitle}>Requirements</div>
            <ul style={styles.list}>
              <li style={styles.listItem}>5+ years frontend experience</li>
              <li style={styles.listItem}>React, TypeScript, CSS</li>
              <li style={styles.listItem}>Redux or Zustand</li>
              <li style={styles.listItem}>Testing knowledge</li>
              <li style={styles.listItem}>Strong communication</li>
            </ul>
          </div>
          <div style={{ width: "100%" }}>
          <div style={styles.section}>
            <div style={styles.sectionTitle}>Required Skills</div>
            <div style={styles.tagsBox}>
              <span style={styles.tag}>React</span>
              <span style={styles.tag}>TypeScript</span>
              <span style={styles.tag}>CSS</span>
              <span style={styles.tag}>Redux</span>
              <span style={styles.tag}>GraphQL</span>
            </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div style={styles.applyCard}>
          <div style={styles.applyTitle}>Ready to apply?</div>
          <p style={styles.text}>
            Complete an AI-powered interview to showcase your skills.
          </p>

          <ol style={styles.steps}>
            <li>Upload your resume</li>
            <li>Complete AI interview</li>
            <li>Get instant feedback</li>
          </ol>

          <button
  style={styles.applyBtn}
  onClick={() => navigate("/apply")}
>
  Apply Now →
</button>

          <div style={styles.small}>Average interview time: 15–20 minutes</div>
        </div>
      </div>
    </div>
  );
}
