import { useNavigate } from "react-router-dom";

export default function InterviewCompleted() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center px-4 py-10">
      {/* Progress Steps */}
      <div className="flex items-center gap-10 mb-10">
        {[
          { step: 1, label: "Upload Resume", sub: "Submit your CV" },
          { step: 2, label: "Interview", sub: "AI-powered interview" },
          { step: 3, label: "Complete", sub: "Get results", active: true },
        ].map((item) => (
          <div key={item.step} className="flex flex-col items-center text-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${item.active ? "bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-600"}`}
            >
              {item.step}
            </div>
            <div className="text-sm font-medium mt-2">{item.label}</div>
            <div className="text-xs text-slate-500">{item.sub}</div>
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-2xl w-full max-w-xl p-8 text-center">
        {/* Icon */}
        <div className="w-16 h-16 mx-auto rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl mb-4">
          ✓
        </div>

        <h2 className="text-xl font-bold mb-2">Interview Completed!</h2>
        <p className="text-sm text-slate-500 mb-6">
          Thank you for completing your interview for{" "}
          <span className="font-medium text-slate-700">
            UI/UX Designer at DesignHub
          </span>
        </p>

        {/* Status Box */}
        <div className="bg-slate-50 rounded-xl p-5 text-left mb-6">
          <h4 className="font-semibold text-sm mb-4">Interview Status</h4>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-500">Status</span>
              <span className="px-3 py-1 text-xs rounded-full bg-amber-100 text-amber-700">
                Under Review
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">Completed At</span>
              <span className="text-slate-700">11:19 AM</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">Expected Result</span>
              <span className="text-slate-700">Sunday, February 1, 2026</span>
            </div>
          </div>
        </div>

        {/* What’s Next */}
        <div className="text-left mb-6">
          <h4 className="font-semibold text-sm mb-3">What happens next?</h4>
          <ul className="space-y-2 text-sm text-slate-600 list-disc pl-5">
            <li>Our team will review your interview responses</li>
            <li>You’ll receive an email notification with the results</li>
            <li>If selected, we’ll schedule the next round of interviews</li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-2 border border-slate-200 rounded-xl text-sm
                       hover:bg-slate-50 transition"
          >
            ← Return to Dashboard
          </button>

          <button
            onClick={() => navigate("/my-applications")}
            className="px-5 py-2 rounded-xl text-sm font-medium
                       bg-indigo-600 text-white
                       hover:bg-indigo-700 transition"
          >
            View My Applications →
          </button>
        </div>
      </div>

      {/* Footer */}
      <p className="text-xs text-slate-400 mt-6">
        Have feedback about your interview experience?{" "}
        <span className="text-indigo-600 cursor-pointer hover:underline">
          Let us know
        </span>
      </p>
    </div>
  );
}
