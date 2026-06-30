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

      <p>
        Average Score:
        {" "}
        {avgScore}/10
      </p>

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