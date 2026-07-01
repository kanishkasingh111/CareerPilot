function DashboardPage({
  studentData,
  setCurrentPage,
}) {
  const interviews =
    Number(localStorage.getItem("interviews")) || 0;

  const avgScore =
    Number(localStorage.getItem("avgScore")) || 0;

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>
          Welcome {studentData.name} 👋
        </h1>

        <p>
          Your AI Career Companion
        </p>
      </div>

      <div className="roadmap-grid">

        <div className="roadmap-card">
          <h2>{interviews}</h2>
          <p>Interviews Attempted</p>
        </div>

        <div className="roadmap-card">
          <h2>{avgScore}/10</h2>
          <p>Average Score</p>
        </div>

        <div className="roadmap-card">
          <h2>📄</h2>
          <p>Resume Ready</p>
        </div>

        <div className="roadmap-card">
          <h2>{avgScore * 10}%</h2>
          <p>Placement Readiness</p>
        </div>

      </div>

        <div className="roadmap-card">
            <h2>🏅 Achievements</h2>

            <div
                style={{
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
                justifyContent: "center",
                }}
            >
                {interviews >= 1 && (
                <span className="achievement-badge">📚 Beginner</span>
                )}

                {avgScore >= 6 && (
                <span className="achievement-badge">🚀 Rising Candidate</span>
                )}

                {avgScore >= 8 && (
                <span className="achievement-badge">
                🏆 Placement Ready
                </span>
                )}

                {interviews >= 5 && (
                <span className="achievement-badge">⭐ Interview Master</span>
                )}
            </div>
        </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() =>
            setCurrentPage("roadmap")
          }
        >
          View Roadmap
        </button>

        <button
          onClick={() =>
            setCurrentPage("interview")
          }
        >
          Practice Interview
        </button>

        <button
          onClick={() =>
            setCurrentPage("resume")
          }
        >
          Resume Builder
        </button>
      </div>

    </div>
  );
}

export default DashboardPage;