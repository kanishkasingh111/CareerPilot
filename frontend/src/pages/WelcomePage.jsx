function WelcomePage({ onStart }) {
  return (
    <div className="welcome-page">

      <div className="hero">

        <div className="hero-icon">
          🤖
        </div>

        <h1 className="logo">
          CareerPilot AI
        </h1>

        <p className="tagline">
          Your Personal AI Career Mentor
        </p>

        <p className="subtitle">
          Build Skills • Crack Interviews • Get Placed
        </p>

        <button
          className="start-btn"
          onClick={onStart}
        >
          Start Your Journey →
        </button>

      </div>

      <div className="quick-features">

        <div className="quick-card">
          <span>🤖</span>
          <h3>AI Coach</h3>
        </div>

        <div className="quick-card">
          <span>🎤</span>
          <h3>Interview</h3>
        </div>

        <div className="quick-card">
          <span>📄</span>
          <h3>Resume</h3>
        </div>

        <div className="quick-card">
          <span>📊</span>
          <h3>Progress</h3>
        </div>

      </div>

      <div className="welcome-stats">

        <div>
          <h2>500+</h2>
          <p>Interview Questions</p>
        </div>

        <div>
          <h2>7+</h2>
          <p>AI Features</p>
        </div>

        <div>
          <h2>24/7</h2>
          <p>AI Career Coach</p>
        </div>

      </div>

    </div>
  );
}

export default WelcomePage;