function ProgressPage() {
  const interviews =
    Number(localStorage.getItem("interviews")) || 0;

  const avgScore =
    Number(localStorage.getItem("avgScore")) || 0;

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>📊 Progress Dashboard</h1>
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
          <h2>
            {avgScore >= 8
              ? "🏆"
              : avgScore >= 6
              ? "🚀"
              : "📚"}
          </h2>

          <p>
            {avgScore >= 8
              ? "Placement Ready"
              : avgScore >= 6
              ? "Improving"
              : "Keep Practicing"}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ProgressPage;