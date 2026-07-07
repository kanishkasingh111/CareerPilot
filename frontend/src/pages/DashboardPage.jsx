function DashboardPage({
  studentData,
  setCurrentPage,
}) {
  const interviews =
    Number(localStorage.getItem("interviews")) || 0;

  const avgScore =
    Number(localStorage.getItem("avgScore")) || 0;

  const readiness = Math.min(
    100,
    Math.round(
      interviews * 10 +
      avgScore * 5 +
      20
    )
  );

  const xp =
  Number(localStorage.getItem("xp")) || 0;

  let level = "Level 1";
  let nextLevelXP = 100;

  if (xp >= 100 && xp < 250) {
    level = "Level 2";
    nextLevelXP = 250;
  }

  if (xp >= 250 && xp < 500) {
    level = "Level 3";
    nextLevelXP = 500;
  }

  if (xp >= 500) {
    level = "Level 4";
    nextLevelXP = 1000;
  }

  const progress =
    Math.min(
      100,
      (xp / nextLevelXP) * 100
    );

  const skillScore = 80;
  const resumeScore = 100;
  const interviewScore = avgScore * 10;
  const roadmapScore = Math.min(
    100,
    interviews * 15 + 30
  );
  const streak =
  Number(localStorage.getItem("streak")) || 1;

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>
          👋 Welcome Back, {studentData.name}
        </h1>

        <h3>
          {level} • {xp} XP
        </h3>

        <p>
          🎯 {studentData.goal} • {studentData.year}
        </p>
      </div>

      <div className="roadmap-grid">

        <div className="roadmap-card">
          <h2>{interviews}</h2>
          <p>🎤 Interviews Attempted</p>
        </div>

        <div className="roadmap-card">
          <h2>{avgScore}/10</h2>
          <p>⭐ Average Score</p>
        </div>

        <div className="roadmap-card">
          <h2>📄</h2>
          <p>Resume Ready</p>
        </div>

        <div className="roadmap-card">
          <h2>{readiness}%</h2>
          <p>🚀 Career Readiness</p>

          <div
            style={{
              width: "100%",
              height: "12px",
              background: "#222",
              borderRadius: "20px",
              marginTop: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${readiness}%`,
                height: "100%",
                background: "limegreen",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>

        <div className="roadmap-card">
          <h2>📊 Career Readiness Breakdown</h2>

          <div className="readiness-item">
            <span>Skills Progress</span>
            <span>{skillScore}%</span>
          </div>

          <div className="readiness-item">
            <span>Interview Readiness</span>
            <span>{interviewScore}%</span>
          </div>

          <div className="readiness-item">
            <span>Resume Quality</span>
            <span>{resumeScore}%</span>
          </div>

          <div className="readiness-item">
            <span>Roadmap Progress</span>
            <span>{roadmapScore}%</span>
          </div>
        </div>

        <div className="roadmap-card">
          <h2>🏆 Career Explorer</h2>

          <h3>{level}</h3>

          <p>
            XP: {xp} / {nextLevelXP}
          </p>

          <div
            style={{
              width: "100%",
              height: "12px",
              background: "#222",
              borderRadius: "20px",
              marginTop: "10px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "gold",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
        <div className="roadmap-card">
        <h2>🔥 {streak} Day Streak</h2>

        <p>
          Keep learning daily to maintain your streak.
        </p>
      </div>

      </div>

      <br />

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
            <span className="achievement-badge">
              📚 Beginner
            </span>
          )}

          {avgScore >= 6 && (
            <span className="achievement-badge">
              🚀 Rising Candidate
            </span>
          )}

          {avgScore >= 8 && (
            <span className="achievement-badge">
              🏆 Placement Ready
            </span>
          )}

          {interviews >= 5 && (
            <span className="achievement-badge">
              ⭐ Interview Master
            </span>
          )}
          {xp >= 50 && (
            <span className="achievement-badge">
              🎖 First Interview
            </span>
          )}

          {xp >= 200 && (
            <span className="achievement-badge">
              🧠 AI Coach User
            </span>
          )}

          {xp >= 400 && (
            <span className="achievement-badge">
              📚 Lifelong Learner
            </span>
          )}
        </div>
      </div>

      <br />

      <div className="roadmap-card">
        <h2>🎯 Recommended Next Step</h2>
        <br />

        <div className="roadmap-card">
          <h2>🔥 Daily Motivation</h2>

          <p>
            Small progress every day leads to big career opportunities.
          </p>
        </div>

          <br />
        <div className="roadmap-card">
          <h2>🎯 Weekly Goal</h2>

          <p>
            Complete 3 interview sessions this week.
          </p>

          <p>
            Progress: {Math.min(interviews, 3)}/3
          </p>
        </div>

        <p
          style={{
            fontSize: "18px",
            marginTop: "10px",
          }}
        >
          {interviews < 3
            ? "Practice more interviews to build confidence."
            : avgScore < 7
            ? "Improve interview performance and communication."
            : "Start applying for internships and opportunities."}
        </p>
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() =>
            setCurrentPage("roadmap")
          }
        >
          🗺 View Roadmap
        </button>

        <button
          onClick={() =>
            setCurrentPage("interview")
          }
        >
          🎤 Practice Interview
        </button>

        <button
          onClick={() =>
            setCurrentPage("resume")
          }
        >
          📄 Resume Builder
        </button>
      </div>

      <div className="quick-actions">

        <div className="action-card"
          onClick={() => setCurrentPage("roadmap")}
        >
          🗺
          <h3>Roadmap</h3>
          <p>Continue learning</p>
        </div>

        <div
          className="action-card"
          onClick={() => setCurrentPage("interview")}
        >
          🎤
          <h3>Interview</h3>
          <p>Practice now</p>
        </div>

        <div
          className="action-card"
          onClick={() => setCurrentPage("resume")}
        >
          📄
          <h3>Resume</h3>
          <p>Improve profile</p>
        </div>

      </div>

    </div>

  );
}

export default DashboardPage;