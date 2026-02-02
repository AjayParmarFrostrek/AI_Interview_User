import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate

export default function ApplyNow() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate(); // <-- Initialize navigate

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      alert("Only PDF, DOC, DOCX files are allowed");
      return;
    }

    setFile(selectedFile);
  };

  const goToInterview = () => {
    navigate("/interview"); // <-- Navigate to Interview page
  };

  return (
    <div className="min-h-screen bg-slate-50 flex justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Back */}
        <button className="text-sm text-slate-500 mb-6 hover:text-indigo-600">
          ← Back to Job
        </button>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-10">
          {[
            { step: 1, label: "Upload Resume" },
            { step: 2, label: "Interview" },
            { step: 3, label: "Complete" },
          ].map((item, index) => (
            <div key={item.step} className="flex-1 flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${
                    item.step === 1
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-200 text-slate-500"
                  }`}
              >
                {item.step}
              </div>
              <p className="text-xs text-slate-500 mt-2">{item.label}</p>

              {index !== 2 && <div className="h-px w-full bg-slate-300 mt-4" />}
            </div>
          ))}
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-lg font-semibold">Apply for Full Stack Engineer</h1>
          <p className="text-sm text-slate-500">at InnovateTech</p>
        </div>

        {/* Upload Card */}
        <div className="bg-white rounded-xl border p-6 mb-6">
          <h3 className="text-sm font-semibold mb-4 text-center">Upload Your Resume</h3>

          <label
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files[0]);
            }}
            className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition"
          >
            <input
              type="file"
              hidden
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFile(e.target.files[0])}
            />

            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mb-3">
              ⬆
            </div>

            {!file ? (
              <>
                <p className="text-sm font-medium">Drag and drop your resume here</p>
                <p className="text-xs text-slate-500 mt-1">or click to browse files</p>
                <p className="text-xs text-slate-400 mt-3">Supported formats: PDF, DOC, DOCX</p>
              </>
            ) : (
              <p className="text-sm font-medium text-green-600">✅ {file.name}</p>
            )}
          </label>
        </div>

        {/* Interview Tips */}
        <div className="bg-indigo-50 rounded-xl p-4 mb-6">
          <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">ℹ Interview Tips</h4>
          <ul className="text-xs text-slate-600 space-y-1 list-disc pl-4">
            <li>Ensure you're in a quiet environment with good lighting</li>
            <li>Test your camera and microphone before starting</li>
            <li>The interview typically takes 15–20 minutes</li>
            <li>Speak clearly and take your time with responses</li>
          </ul>
        </div>

        {/* Action Button */}
        <button
          disabled={!file}
          onClick={goToInterview} // <-- Add click handler
          className={`w-full py-3 rounded-xl text-sm font-medium text-white transition
            ${file ? "bg-indigo-500 hover:bg-indigo-600" : "bg-slate-300 cursor-not-allowed"}`}
        >
          Proceed to Interview →
        </button>
      </div>
    </div>
  );
}
