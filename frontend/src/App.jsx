import { useState } from "react";
import "./App.css";
import InterviewPage from "./pages/InterviewPage";
import ResumePage from "./pages/ResumePage";
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";
import RoadmapPage from "./pages/RoadmapPage";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [studentData, setStudentData] = useState(null);

  return (
    <div className="app">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {currentPage === "welcome" && (
        <WelcomePage
          onStart={() => setCurrentPage("profile")}
        />
      )}

      {currentPage === "profile" && (
        <ProfilePage
          onNext={(data) => {
            setStudentData(data);
            setCurrentPage("roadmap");
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

    </div>
  );
}

export default App;