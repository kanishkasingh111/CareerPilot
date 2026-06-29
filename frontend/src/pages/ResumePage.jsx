function ResumePage({ studentData }) {
  return (
    <div className="app-container">
      <div className="dashboard">

        <div className="dashboard-header">
          <h1>📄 Resume Builder</h1>
        </div>

        <div className="roadmap-card">

          <h2>{studentData.name}</h2>

          <p>
            {studentData.branch} • {studentData.year}
          </p>

          <hr />

          <h3>Career Goal</h3>
          <p>{studentData.goal}</p>

          <h3>Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
          </ul>

          <h3>Projects</h3>
          <ul>
            <li>CareerPilot AI</li>
            <li>Portfolio Website</li>
          </ul>

        </div>

      </div>
    </div>
  );
}

export default ResumePage;