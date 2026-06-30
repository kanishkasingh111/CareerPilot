import roadmaps from "../data/roadmaps";
import ProgressCard from "../components/ProgressCard";

function ResumePage({ studentData }) {
   if (!studentData) {
    return (
      <div className="app-container">
        <div className="card">
          <h2>No profile data found.</h2>
          <p>Please complete your profile first.</p>
        </div>
      </div>
    );
  }
  const roadmap =
  roadmaps[studentData.goal]?.[studentData.year];

  const skills = roadmap?.skills || [];

  const projects = roadmap?.projects || [];
  return (
    <div className="app-container">
      <div className="dashboard">

        <div className="dashboard-header">
          <h1>📄 Resume Builder</h1>
        </div>

        <div className="roadmap-card">

          <h2>{studentData.name}</h2>
          <h4>
            Aspiring {studentData.goal}
          </h4>

          <p>
            {studentData.branch} • {studentData.year}
          </p>

          <hr />

          <h3>Career Goal</h3>
          <p>{studentData.goal}</p>

          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Projects</h3>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>

            <div style={{ marginTop: "25px" }}>
              <button
                onClick={() => window.print()}
              >
                📄 Download Resume
              </button>
            </div>

        </div>
        <ProgressCard
          interviews={1}
          avgScore={8}
        />

      </div>
    </div>
    
  );
}

export default ResumePage;