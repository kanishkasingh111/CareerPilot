import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import InterviewPage from "./pages/InterviewPage";
import ResumePage from "./pages/ResumePage";
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";
import RoadmapPage from "./pages/RoadmapPage";
import ProgressPage from "./pages/ProgressPage";
import DashboardPage from "./pages/DashboardPage";
import CareerInsightsPage from "./pages/CareerInsightsPage";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [studentData, setStudentData] = useState(
  JSON.parse(localStorage.getItem("studentData")) || null
);

  return (
    <div className="app">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {studentData && (
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}

      {currentPage === "welcome" && (
        <WelcomePage
          onStart={() => setCurrentPage("profile")}
        />
      )}

      {currentPage === "profile" && (
        <ProfilePage
          onNext={(data) => {
            setStudentData(data);
            setCurrentPage("dashboard");
          }}
        />
      )}

      {currentPage === "roadmap" && (
        <RoadmapPage
          studentData={studentData}
          goToInterview={() => setCurrentPage("interview")}
        />
      )}

      {currentPage === "interview" && (
        <InterviewPage
          studentData={studentData}
          goToResume={() => setCurrentPage("resume")}
        />
      )}

      {currentPage === "resume" && (
        <ResumePage studentData={studentData} />
      )}

      {currentPage === "progress" && (
        <ProgressPage />
      )}

      {currentPage === "dashboard" && (
        <DashboardPage
          studentData={studentData}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "insights" && (
        <CareerInsightsPage
          studentData={studentData}
        />
      )}

    </div>
  );
}

export default App;