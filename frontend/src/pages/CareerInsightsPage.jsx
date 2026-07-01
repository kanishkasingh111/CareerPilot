import careerInsights from "../data/careerInsights";

function CareerInsightsPage({ studentData }) {

    if (!studentData) {
  return (
    <div className="dashboard">
      <h2>Please complete profile first.</h2>
    </div>
  );
}

  const career =
    careerInsights[studentData.goal];

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <h1>🧠 Career Insights</h1>
      </div>

      <div className="roadmap-grid">

        <div className="roadmap-card">
          <h2>📚 Required Skills</h2>

          <ul>
            {career.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="roadmap-card">
          <h2>💼 Top Companies</h2>

          <ul>
            {career.companies.map(
              (company, index) => (
                <li key={index}>
                  {company}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="roadmap-card">
          <h2>💰 Average Salary</h2>

          <h1>{career.salary}</h1>
        </div>

        <div className="roadmap-card">
            <h2>📖 Learning Resources</h2>

            <ul>
                <li>CS50</li>
                <li>freeCodeCamp</li>
                <li>Andrew Ng ML Course</li>
                <li>GeeksforGeeks</li>
            </ul>
        </div>

        <div className="roadmap-card">
            <h2>📈 Industry Demand</h2>

            <h1>High 🔥</h1>

            <p>
                Strong hiring trend in this domain.
            </p>
        </div>

      </div>

    </div>
  );
}

export default CareerInsightsPage;