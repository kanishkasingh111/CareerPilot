function ProgressPage() {
  const interviews =
    Number(localStorage.getItem("interviews")) || 0;

  const avgScore =
    Number(localStorage.getItem("avgScore")) || 0;

  const xp=
  Number(localStorage.getItem("xp"))||0;

  const streak=
  Number(localStorage.getItem("streak"))||1;

  const readiness=
  Math.min(
  100,
  Math.round(
  (interviews*15)+(avgScore*5)
  )
  );

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

        <div className="roadmap-card stat-card">
          <div className="stat-icon">⭐</div>

          <h2>{xp}</h2>

          <p>Total XP</p>

          </div>

          <div className="roadmap-card stat-card">
          <div className="stat-icon">🔥</div>

          <h2>{streak}</h2>

          <p>Day Streak</p>

          </div>

          <div className="roadmap-card stat-card">
          <div className="stat-icon">🚀</div>

          <h2>{readiness}%</h2>

          <p>Career Readiness</p>

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

      <div className="roadmap-card">

        <h2>📈 Overall Progress</h2>

        <div className="goal-progress">

        <div
        className="goal-fill"
        style={{
        width:`${readiness}%`
        }}
        ></div>

        </div>

        <p
        style={{
        marginTop:"15px"
        }}
        >

        {readiness}% Complete

        </p>

      </div>

    </div>
  );
}

export default ProgressPage;