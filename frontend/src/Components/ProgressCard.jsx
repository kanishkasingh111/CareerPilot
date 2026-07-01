function ProgressCard({
  interviews,
  avgScore,
}) {
  return (
    <div className="roadmap-card">

      <h3>📊 Progress Tracker</h3>

      <p>
        Interviews Attempted:
        {" "}
        {interviews}
      </p>

      <div className="roadmap-card">
        <h2>{avgScore}/10</h2>

        <p>Average Score</p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${avgScore * 10}%`,
            }}
          ></div>
        </div>

        <p style={{ marginTop: "10px" }}>
          Placement Readiness: {avgScore * 10}%
        </p>
      </div>

      {avgScore >= 8 ? (
        <h4>🏆 Placement Ready</h4>
      ) : avgScore >= 6 ? (
        <h4>🚀 Improving</h4>
      ) : (
        <h4>📚 Keep Practicing</h4>
      )}

    </div>
    
  );
}

export default ProgressCard;