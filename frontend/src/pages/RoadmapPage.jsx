import roadmaps from "../data/roadmaps";

function RoadmapPage({
  studentData,
  goToInterview,
}) {
  const { name, branch, year, goal } = studentData;

  const roadmap =roadmaps[goal]?.[year];
  const skills = roadmap?.skills || [];

  const projects = roadmap?.projects || [];

  const readiness =roadmap?.readiness || 0;

  return (
  <div className="app-container">

    <div className="dashboard">

      <div className="dashboard-header">
        <h1>🚀 CareerPilot AI</h1>

        <h2>Welcome Back, {name} 👋</h2>

        <p>
          {branch} • {year} • {goal}
        </p>
      </div>

      <div className="roadmap-grid">

        <div className="roadmap-card">
          <h3>📚 Skills To Learn</h3>

          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="roadmap-card">
          <h3>🚀 Projects To Build</h3>

          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>

        <div className="roadmap-card">
          <h3>💼 Internship Preparation</h3>

          <ul>
            <li>Optimize LinkedIn Profile</li>
            <li>Maintain GitHub Activity</li>
            <li>Create ATS Friendly Resume</li>
            <li>Practice Aptitude</li>
          </ul>
        </div>

        <div className="roadmap-card">
          <h3>🎯 Readiness Score</h3>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${readiness}%` }}
            ></div>
          </div>

          <h2>{readiness}%</h2>

          <p>
            Keep learning and building projects.
          </p>
        </div>

      </div>

        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          <button onClick={goToInterview}>
            🎤 Start Interview Practice
          </button>
        </div>
    </div>

  </div>
);
}

export default RoadmapPage;