function Sidebar({
  currentPage,
  setCurrentPage,
}) {
  return (
    <div className="sidebar">

      <button
        className={
          currentPage === "welcome"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("welcome")}
      >
        👋 Welcome
      </button>

      <button
        className={
          currentPage === "profile"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("profile")}
      >
        👤 Profile
      </button>

      <hr className="sidebar-divider" />

      <h2>🚀 CareerPilot</h2>

      <button
        className={
          currentPage === "dashboard"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("dashboard")}
      >
        🏠 Dashboard
      </button>

      <button
        className={
          currentPage === "roadmap"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("roadmap")}
      >
        🗺 Roadmap
      </button>

      <button
        className={
          currentPage === "interview"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("interview")}
      >
        🎤 Interview
      </button>

      <button
        className={
          currentPage === "resume"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("resume")}
      >
        📄 Resume
      </button>

      <button
        className={
          currentPage === "progress"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("progress")}
      >
        📊 Progress
      </button>

      <button
        className={
          currentPage === "insights"
            ? "active-nav"
            : ""
        }
        onClick={() => setCurrentPage("insights")}
      >
        🧠 Career Insights
      </button>

    </div>
  );
}

export default Sidebar;