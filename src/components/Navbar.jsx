import { useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu"; 

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div style={{ borderBottom: "1px solid #e5e7eb", background: "#fff" }}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 0",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate("/")}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: "#4f46e5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            II
          </div>
          <strong className="hover:text-indigo-600 transition-colors">InterviewAI</strong>
        </div>

        {/* Nav Links */}
        <div className="flex gap-5 text-gray-500">
          <span
            className="cursor-pointer font-medium hover:text-indigo-600 transition-colors"
            onClick={() => navigate("/jobs")}
          >
            Jobs
          </span>

          <span
            className="cursor-pointer hover:text-indigo-600 transition-colors"
            onClick={() => navigate("/my-applications")}
          >
            My Applications
          </span>
        </div>

        {/* Profile Avatar */}
        <ProfileMenu />
      </div>
    </div>
  );
}
