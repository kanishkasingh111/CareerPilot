function WelcomePage({ onStart }) {
  return (
    <div className="app-container">
      <div className="hero">

        <h1 className="logo">
          CareerPilot AI
        </h1>

        <p className="tagline">
          Navigate Your Career Journey With AI
        </p>

        <p className="subtitle">
          Personalized Roadmaps • Interview Prep •
          Placement Guidance • Progress Tracking
        </p>

        <button onClick={onStart}>
          Start Your Journey →
        </button>

      </div>
    </div>
  );
}

export default WelcomePage;