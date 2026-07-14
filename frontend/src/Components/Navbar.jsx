import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useState } from "react";

function Navbar({
  currentPage,
  setCurrentPage,
  studentData
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const formatGoal = (goal) => {
    const goals = {
      aiEngineer: "AI Engineer",
      fullStackDeveloper: "Full Stack Developer",
      dataScientist: "Data Scientist",
      cybersecurity: "Cyber Security",
      softwareEngineer: "Software Engineer",
    };

    return goals[goal] || goal;
  };

  const formatYear = (year) => {
    const years = {
      firstYear: "1st Year",
      secondYear: "2nd Year",
      thirdYear: "3rd Year",
      fourthYear: "4th Year",
    };

    return years[year] || year;
  };

  return (
    <div className="navbar">

    <div className="nav-brand">
        <div className="nav-logo">
          🚀 CareerPilot
        </div>

        <div className="nav-username">
            👤 {studentData?.name}
        </div>

        <div className="nav-role">
          🎯 {formatGoal(studentData?.goal)} • {formatYear(studentData?.year)}
        </div>
    </div>

    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <button
          className={
            currentPage === "dashboard"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("dashboard")}
        >
          🏠 Dashboard
        </button>

        <button
          className={
            currentPage === "roadmap"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("roadmap")}
        >
          🗺 Roadmap
        </button>

        <button
          className={
            currentPage === "interview"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("interview")}
        >
          🎤 Interview
        </button>

        <button
          className={
            currentPage === "resume"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("resume")}
        >
          📄 Resume
        </button>

        <button
          className={
            currentPage === "progress"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("progress")}
        >
          📊 Progress
        </button>

        <button
          className={
            currentPage === "insights"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("insights")}
        >
          🧠 Insights
        </button>

        <button
          className={
            currentPage === "coach"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("coach")}
        >
          🤖 AI Coach
        </button>

        <button
          className={
            currentPage === "resources"
              ? "nav-active"
              : ""
          }
          onClick={() => setCurrentPage("resources")}
        >
          📚 Resources
        </button>

        <button
            className="logout-btn"
            onClick={async () => {
                await signOut(auth);

                localStorage.removeItem("studentData");

                window.location.reload();
            }}
            >
            🚪 Logout
        </button>

      </div>

      <div className="nav-user">
        👋 {studentData?.name}
      </div>

    </div>
  );
}

export default Navbar;