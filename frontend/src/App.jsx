import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";
import Navbar from "./components/Navbar";
import InterviewPage from "./pages/InterviewPage";
import ResumePage from "./pages/ResumePage";
import WelcomePage from "./pages/WelcomePage";
import ProfilePage from "./pages/ProfilePage";
import RoadmapPage from "./pages/RoadmapPage";
import ProgressPage from "./pages/ProgressPage";
import DashboardPage from "./pages/DashboardPage";
import CareerInsightsPage from "./pages/CareerInsightsPage";
import CareerCoachPage from "./pages/CareerCoachPage";
import ResourcesPage from "./pages/ResourcesPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [user, setUser] = useState(null);
  const [studentData, setStudentData] = useState(
  JSON.parse(localStorage.getItem("studentData")) || null
);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser(null);
    }
  });

  return unsubscribe;
}, []);

if (!user) {
  return (
    <div className="app">
      
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {currentPage === "welcome" && (
        <WelcomePage
          onStart={() => setCurrentPage("login")}
        />
      )}

      {currentPage === "login" && (
        <LoginPage
          goToSignup={() => setCurrentPage("signup")}
          onLogin={(loggedInUser) => {
            setUser(loggedInUser);

            if (localStorage.getItem("studentData")) {
              setCurrentPage("dashboard");
            } else {
              setCurrentPage("profile");
            }
          }}
        />
      )}

      {currentPage === "signup" && (
        <SignupPage
          goToLogin={() => setCurrentPage("login")}
        />
      )}

    </div>
  );
}

  return (
    <div className="app">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

          <Navbar
  currentPage={currentPage}
  setCurrentPage={setCurrentPage}
  studentData={studentData}
  onLogout={() => {
    setUser(null);
    setCurrentPage("welcome");
  }}
/>
      

      {/* {studentData && (
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )} */}

      

      {currentPage === "profile" && (
        <ProfilePage
          onNext={(data) => {
            setStudentData(data);

            localStorage.setItem(
              "studentData",
              JSON.stringify(data)
            );
            const currentStreak =
              Number(localStorage.getItem("streak")) || 0;

            localStorage.setItem(
              "streak",
              currentStreak + 1
            );

            setCurrentPage("dashboard");
          }}
        />
      )}

      {currentPage === "roadmap" && (
      <div className="page-transition">
      <RoadmapPage
      studentData={studentData}
      goToInterview={() => setCurrentPage("interview")}
      />
      </div>
      )}

      {currentPage === "interview" && (
      <div className="page-transition">
      <InterviewPage
      studentData={studentData}
      goToResume={() => setCurrentPage("resume")}
      />
      </div>
      )}

      {currentPage === "resume" && (
      <div className="page-transition">
      <ResumePage studentData={studentData} />
      </div>
      )}

      {currentPage === "progress" && (
      <div className="page-transition">
      <ProgressPage />
      </div>
      )}

      {currentPage === "dashboard" && (
      <div className="page-transition">
        <DashboardPage
          studentData={studentData}
          setCurrentPage={setCurrentPage}
        />
      </div>
      )}
      {currentPage === "insights" && (
      <div className="page-transition">
      <CareerInsightsPage
      studentData={studentData}
      />
      </div>
      )}
      
      

      {currentPage === "coach" && (
      <div className="page-transition">
      <CareerCoachPage
      studentData={studentData}
      />
      </div>
      )}

      {currentPage === "resources" && (
      <div className="page-transition">
      <ResourcesPage
      studentData={studentData}
      />
      </div>
      )}

    </div>
  );
}

export default App;