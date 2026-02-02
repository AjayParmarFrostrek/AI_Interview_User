import React from "react";
import { useNavigate } from "react-router-dom";


const applications = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    applied: "Applied 2 hours ago",
    status: "Under Review",
    statusColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "DesignHub",
    location: "Remote",
    applied: "Applied 3 days ago",
    status: "Interview Completed",
    statusColor: "text-green-600",
    bgColor: "bg-green-50",
  },
];

export default function MyApplications() {
     const navigate = useNavigate();

  return (
   
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl">
          📄
        </div>

        <div>
          <h1 className="text-2xl font-bold">My Applications</h1>
          <p className="text-sm text-slate-500">
            Track the status of your job applications
          </p>
        </div>
      </div>

      {/* Application Cards */}
      <div className="flex flex-col gap-4">
        {applications.map((app) => (
          <div key={app.id}
              className=" flex items-center justify-between bg-white border border-slate-200 rounded-2xl p-5
    transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">

            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-xl">
                💼
              </div>

              <div>
                <h3 className="font-semibold">{app.title}</h3>
                <p className="text-sm text-slate-500">{app.company}</p>

                <div className="flex gap-4 text-xs text-slate-500 mt-1">
                  <span>📍 {app.location}</span>
                  <span>⏱ {app.applied}</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${app.bgColor} ${app.statusColor}`}
              >
                {app.status}
              </span>

              <button  onClick={() => navigate(`/job/${app.id}`)}
              className="px-4 py-2 text-sm font-medium border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-[#4A47FF]
                         hover:shadow-md ">
                View Job →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <StatCard number="2" label="Total Applications" color="text-indigo-600" />
        <StatCard number="1" label="Under Review" color="text-amber-600" />
        <StatCard number="1" label="Completed" color="text-green-600" />
      </div>
    </div>
  );
}

function StatCard({ number, label, color }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
      <div className={`text-3xl font-bold ${color}`}>{number}</div>
      <div className="text-sm text-slate-500 mt-1">{label}</div>
    </div>
  );
}
