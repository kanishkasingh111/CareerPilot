import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase";
// import Sidebar from "./components/Sidebar";
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
  const unsubscribe =
    onAuthStateChanged(
      auth,
      (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
        }
      }
    );

  return unsubscribe;
}, []);

  return (
    <div className="app">

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {currentPage !== "welcome" &&
        currentPage !== "profile" && (
          <Navbar
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            studentData={studentData}
          />
      )}

      {/* {studentData && (
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )} */}

      {currentPage === "welcome" && (
        <WelcomePage
          onStart={() =>setCurrentPage("login")}
        />
      )}

      {currentPage === "profile" && (
        <ProfilePage
          onNext={(data) => {
            setStudentData(data);

            localStorage.setItem(
              "studentData",
              JSON.stringify(data)
            );

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
      {currentPage === "signup" && (
        <SignupPage
          goToLogin={() =>
            setCurrentPage("login")
          }
        />
      )}
      {currentPage === "login" && (
        <LoginPage
          goToSignup={() => setCurrentPage("signup")}
          onLogin={(loggedInUser) => {
            setUser(loggedInUser);

            if (
              localStorage.getItem("studentData")
            ) {
              setCurrentPage("dashboard");
            } else {
              setCurrentPage("profile");
            }
          }}
        />
      )}

      {currentPage === "coach" && (
        <CareerCoachPage
          studentData={studentData}
        />
      )}

      {currentPage === "resources" && (
        <ResourcesPage
          studentData={studentData}
        />
      )}

    </div>
  );
}

export default App;