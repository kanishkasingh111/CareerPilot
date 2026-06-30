function Sidebar({ setCurrentPage }) {
  return (
    <div className="sidebar">

      <h2>🚀 CareerPilot</h2>

      <button
        onClick={() => setCurrentPage("roadmap")}
      >
        🏠 Roadmap
      </button>

      <button
        onClick={() => setCurrentPage("interview")}
      >
        🎤 Interview
      </button>

      <button
        onClick={() => setCurrentPage("resume")}
      >
        📄 Resume
      </button>

      <button
        onClick={() => setCurrentPage("progress")}
      >
        📊 Progress
      </button>

    </div>
  );
}

export default Sidebar;