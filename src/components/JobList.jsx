import { useNavigate } from "react-router-dom";
import { jobs } from "./jobs"; // import the jobs array from jobs.js

export default function JobList() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-5 mt-8">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="bg-white border border-slate-200 rounded-xl p-5 
                     transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
        >
          {/* Header */}
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-xl">
              💼
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                {job.title}
              </h3>
              <p className="text-sm text-slate-500">{job.company}</p>
              <p className="text-xs text-slate-400 mt-1">
                {job.location} · {job.time}
              </p>
            </div>
          </div>

          {/* Job Type */}
          <div className="flex gap-2 mt-4">
            {Array.isArray(job.type)
              ? job.type.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full 
                               bg-indigo-50 text-indigo-600 font-medium"
                  >
                    {t}
                  </span>
                ))
              : (
                  <span className="text-xs px-3 py-1 rounded-full 
                                   bg-indigo-50 text-indigo-600 font-medium">
                    {job.type}
                  </span>
                )
            }
          </div>

          {/* Skills / Technologies */}
          <div className="flex flex-wrap gap-2 mt-3">
            {job.skills
              ? job.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600"
                  >
                    {skill}
                  </span>
                ))
              : job.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600"
                  >
                    {tech}
                  </span>
                ))
            }
          </div>

          {/* Button */}
          <button
            onClick={() => navigate(`/job/${job.id}`)}
            className="mt-4 w-full py-2 border border-indigo-600 rounded-lg 
                       text-indigo-600 text-sm font-medium
                       transition hover:bg-indigo-600 hover:text-white"
          >
            View Details →
          </button>
        </div>
      ))}
    </div>
  );
}
