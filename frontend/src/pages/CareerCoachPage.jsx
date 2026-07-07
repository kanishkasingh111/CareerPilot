import { useState } from "react";

function CareerCoachPage({ studentData }) {
  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const handleAsk = () => {
  const currentXP =
    Number(localStorage.getItem("xp")) || 0;

  localStorage.setItem(
    "xp",
    currentXP + 20
  );

  const q = question.toLowerCase();

    if (
        q.includes("learn next") ||
        q.includes("what should i learn")
    ) {
        if (studentData.goal === "AI Engineer") {
        setAnswer(
            `As a ${studentData.year} student aiming to become an AI Engineer:

    1. Master Python
    2. Learn DSA
    3. Learn Machine Learning
    4. Build AI Projects
    5. Learn Deep Learning
    6. Apply for AI internships`
        );
        }

        else if (studentData.goal === "Web Developer") {
        setAnswer(
            `As a ${studentData.year} student aiming to become a Web Developer:

    1. HTML/CSS
    2. JavaScript
    3. React
    4. Node.js
    5. MongoDB
    6. Build Full Stack Projects`
        );
        }

        else {
        setAnswer(
            "Focus on DSA, projects, internships and communication skills."
        );
        }
    }

    else if (q.includes("internship")) {
        setAnswer(
        `As a ${studentData.year} student, build projects, improve DSA, maintain GitHub, and apply regularly through LinkedIn and company career portals.`
        );
    }

    else if (q.includes("resume")) {
        setAnswer(
        "Add strong projects, GitHub links, LinkedIn profile, technical skills, achievements and certifications."
        );
    }

    else if (q.includes("interview")) {
        setAnswer(
        "Practice DSA daily, improve communication, take mock interviews and review common interview questions."
        );
    }

    else {
        setAnswer(
        `Based on your goal (${studentData.goal}), keep building projects, learning relevant skills and preparing for internships.`
        );
    }
    };

  return (
    <div className="dashboard">

      <h1>
        🧠 CareerPilot AI Coach
      </h1>

      <p>
        Ask anything about your career
      </p>

      <textarea
        placeholder="Ask a question..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        rows="5"
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "15px",
          borderRadius: "10px",
        }}
      />

      <br />
      <br />

      <button onClick={handleAsk}>
        Ask Coach
      </button>

      {answer && (
        <div
          className="roadmap-card"
          style={{
            marginTop: "20px",
          }}
        >
          <h2>💡 Coach Response</h2>

          <p>{answer}</p>
        </div>
      )}

    </div>
  );
}

export default CareerCoachPage;