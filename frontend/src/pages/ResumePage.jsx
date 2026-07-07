import roadmaps from "../data/roadmaps";
import ProgressCard from "../components/ProgressCard";
import { jsPDF } from "jspdf";

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
  const downloadResume = () => {
  const doc = new jsPDF();

  doc.setFontSize(24);
  doc.text(studentData.name, 20, 20);

  doc.setFontSize(12);

  doc.text(
    `Aspiring ${studentData.goal}`,
    20,
    30
  );

  doc.setFontSize(12);
  doc.text(
    `Branch: ${studentData.branch}`,
    20,
    35
  );

  doc.text(
    `Year: ${studentData.year}`,
    20,
    45
  );

  doc.text(
    `Career Goal: ${studentData.goal}`,
    20,
    55
  );

  doc.text("Skills:", 20, 75);

  skills.forEach((skill, index) => {
    doc.text(
      `• ${skill}`,
      25,
      85 + index * 10
    );
  });

  const projectStartY =
    95 + skills.length * 10;

  doc.text(
    "Projects:",
    20,
    projectStartY
  );

  projects.forEach((project, index) => {
    doc.text(
      `• ${project}`,
      25,
      projectStartY + 10 + index * 10
    );
  });

  const currentXP =
  Number(localStorage.getItem("xp")) || 0;

  localStorage.setItem(
    "xp",
    currentXP + 30
  );

  doc.save("CareerPilot_Resume.pdf");

  const achievementY =
  projectStartY +
  20 +
  projects.length * 10;
  doc.text(
    "Achievements:",
    20,
    achievementY
  );

  doc.text(
    "• Completed CareerPilot Roadmap",
    25,
    achievementY + 10
  );

  doc.text(
    "• Participated in Mock Interviews",
    25,
    achievementY + 20
  );

  doc.text(
    "• Built Technical Projects",
    25,
    achievementY + 30
  );

};
  return (
    <div className="app-container">
      <div className="dashboard">

        <div className="dashboard-header">
          <h1>📄 Resume Builder</h1>
        </div>

        <div className="roadmap-card">

          <h2>{studentData.name}</h2>
          <p>📧 your.email@example.com</p>
          <p>🔗 linkedin.com/in/yourprofile</p>
          <p>💻 github.com/yourgithub</p>
          <h4>
            Aspiring {studentData.goal}
          </h4>

          <p>{studentData.branch} • {studentData.year}</p>
          <h3>Education</h3>
          <p>B.Tech - {studentData.branch}</p>
          <p>{studentData.year}</p>

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
          <h3>Achievements</h3>
          <ul>
            <li>Completed CareerPilot Roadmap</li>
            <li>Participated in Mock Interviews</li>
            <li>Built Technical Projects</li>
          </ul>

            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <h3>
                Resume Strength: 85%
              </h3>
            </div>

            <div style={{ marginTop: "25px" }}>
              <button
                onClick={downloadResume}
              >
                📄 Download Resume PDF
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