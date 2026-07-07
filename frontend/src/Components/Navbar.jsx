import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Navbar({
  currentPage,
  setCurrentPage,
  studentData
}) {
  return (
    <div className="navbar">

    <div className="nav-brand">
        <div className="nav-logo">
            CareerPilot
        </div>

        <div className="nav-username">
            👤 {studentData?.name}
        </div>

        <div className="nav-role">
            🎯 {studentData?.goal} • {studentData?.year}
        </div>
    </div>

      <div className="nav-links">

        <button onClick={() => setCurrentPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setCurrentPage("roadmap")}>
          Roadmap
        </button>

        <button onClick={() => setCurrentPage("interview")}>
          Interview
        </button>

        <button onClick={() => setCurrentPage("resume")}>
          Resume
        </button>

        <button onClick={() => setCurrentPage("progress")}>
          Progress
        </button>

        <button onClick={() => setCurrentPage("insights")}>
          Insights
        </button>

        <button
          onClick={() =>
            setCurrentPage("coach")
          }
        >
          AI Coach
        </button>

        <button
          onClick={() =>
            setCurrentPage("resources")
          }
        >
          Resources
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