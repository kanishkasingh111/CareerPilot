import { useState } from "react";

function ProfilePage({ onNext }) {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [goal, setGoal] = useState("");

  const handleSubmit = () => {
        if (!name || !branch || !year || !goal) {
    alert("Please fill all fields");
    return;
    }
    const studentData = {
      name,
      branch,
      year,
      goal,
    };
    

    onNext(studentData);
  };

return (
  <div className="app-container">
    <div className="card">

      <h1 className="page-title">
        Build Your Career Profile
      </h1>

      <p className="page-subtitle">
        Tell us about yourself and we'll create your personalized roadmap
      </p>

      <label>👤 Full Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🎓 Branch</label>
      <select
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      >
        <option value="">Select Branch</option>

        <option value="CSE">
          Computer Science Engineering
        </option>

        <option value="IT">
          Information Technology
        </option>

        <option value="ECE">
          Electronics & Communication
        </option>

        <option value="EE">
          Electrical Engineering
        </option>

        <option value="ME">
          Mechanical Engineering
        </option>

        <option value="CE">
          Civil Engineering
        </option>
      </select>

      <label>📚 Current Year</label>
      <select
        value={year}
        onChange={(e) => setYear(e.target.value)}
      >
        <option value="">Select Year</option>

        <option value="firstYear">First Year</option>
        <option value="secondYear">Second Year</option>
        <option value="thirdYear">Third Year</option>
        <option value="finalYear">Final Year</option>
      </select>

      <label>🎯 Career Goal</label>
      <select
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      >
        <option value="">Select Goal</option>

        <option value="softwareEngineer">
          Software Engineer
        </option>

        <option value="aiEngineer">
          AI Engineer
        </option>

        <option value="dataScientist">
          Data Scientist
        </option>

        <option value="webDeveloper">
          Web Developer
        </option>
      </select>
<br /><br />
      <button onClick={handleSubmit}>
        Continue →
      </button>

    </div>
  </div>
);
}

export default ProfilePage;