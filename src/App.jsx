import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import JobDetails from "./pages/JobDetails";
import MyApplications from "./pages/MyApplications";
import InterviewCompleted from "./pages/InterviewCompleted";
import Profile from "./pages/Profile";
import ApplyNow from "./pages/ApplyNow";
import Interview from "./pages/Interview";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="jobs" element={<Dashboard />} />
        <Route path="job/:id" element={<JobDetails />} />
        <Route path="my-applications" element={<MyApplications />} />
        <Route path="interview-complete" element={<InterviewCompleted />} />
       <Route path="/profile" element={<Profile />} />
     <Route path="/apply" element={<ApplyNow />} />
      <Route path="/interview" element={<Interview />} />
      </Route>
    </Routes>
  );
}