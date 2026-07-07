function ResourcesPage({ studentData }) {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📚 Learning Resources</h1>
        <p>
          Curated resources for {studentData.goal}
        </p>
      </div>

      <div className="roadmap-card">
        <h2>React</h2>

        <p>
          📺 YouTube: CodeWithHarry React Course
        </p>

        <p>
          📖 Documentation: react.dev
        </p>

        <p>
          💻 Project: Build a Todo App
        </p>
      </div>

      <div className="roadmap-card">
        <h2>Node.js</h2>

        <p>
          📺 YouTube: Apna College Backend Course
        </p>

        <p>
          📖 Documentation: nodejs.org
        </p>

        <p>
          💻 Project: REST API
        </p>
      </div>

      <div className="roadmap-card">
        <h2>MongoDB</h2>

        <p>
          📺 YouTube: MongoDB Tutorial
        </p>

        <p>
          📖 Documentation: mongodb.com
        </p>

        <p>
          💻 Project: Student Database System
        </p>
      </div>
    </div>
  );
}

export default ResourcesPage;