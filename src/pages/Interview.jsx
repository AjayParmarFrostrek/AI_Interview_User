import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Interview() {
  const navigate = useNavigate();

  const totalTimeInSeconds = 20 * 60;
  const [timeLeft, setTimeLeft] = useState(totalTimeInSeconds);

  // States for mic and camera
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSubmitResponse = () => {
    navigate("/interviewcompleted");
  };

  // Toggle mic/camera functions
  const toggleMic = () => setMicOn((prev) => !prev);
  const toggleCamera = () => setCameraOn((prev) => !prev);

  return (
    <div className="min-h-screen bg-white px-6 py-4">
      {/* Stepper and Header ... (same as before) */}

      {/* Main Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Video Area */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 mb-6">
            {/* AI Interviewer */}
            <div className="bg-indigo-50 rounded-xl h-48 flex flex-col items-center justify-center relative">
              <span className="absolute top-3 left-3 text-xs bg-indigo-600 text-white px-2 py-1 rounded">
                AI Interviewer
              </span>
              <span className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full" />
              <div className="w-16 h-16 rounded-full bg-indigo-200 flex items-center justify-center text-xl">
                🤖
              </div>
            </div>

            {/* User */}
            <div className="bg-slate-100 rounded-xl h-48 flex flex-col items-center justify-center relative">
              <span className="absolute top-3 left-3 text-xs bg-white px-2 py-1 rounded border">
                You
              </span>
              <span className="absolute top-3 right-3 w-2 h-2 bg-green-500 rounded-full" />
              <div className="w-16 h-16 rounded-full bg-slate-300 flex items-center justify-center">
                👤
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={toggleMic}
              className={`w-10 h-10 rounded-full ${
                micOn ? "bg-slate-100 hover:bg-slate-200" : "bg-red-500 hover:bg-red-600 text-white"
              } flex items-center justify-center`}
            >
              {micOn ? "🎤" : "🔇"}
            </button>
            <button
              onClick={toggleCamera}
              className={`w-10 h-10 rounded-full ${
                cameraOn ? "bg-slate-100 hover:bg-slate-200" : "bg-red-500 hover:bg-red-600 text-white"
              } flex items-center justify-center`}
            >
              {cameraOn ? "📷" : "📵"}
            </button>
            <button className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
              End Interview
            </button>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSubmitResponse}
              className="px-6 py-2 border border-indigo-500 text-indigo-600 rounded-lg text-sm hover:bg-indigo-50"
            >
              Submit Response (Demo)
            </button>
          </div>
        </div>

        {/* Chat Panel ... (same as before) */}
      </div>
    </div>
  );
}
