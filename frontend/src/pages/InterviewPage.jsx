import interviewQuestions from "../data/interviewQuestions";
import { useState, useEffect } from "react";
import evaluateAnswer from "../utils/evaluateAnswer";

function InterviewPage({
  studentData,
  goToResume
  
}){
    if (!studentData) {
    return (
      <div className="app-container">
        <h2>No student data found.</h2>
      </div>
    );
  }

  const questions =
    interviewQuestions[studentData.goal] || [];
    const [answers, setAnswers] = useState({});
    const [results, setResults] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [savedInterview, setSavedInterview] = useState(false);
    
    useEffect(() => {
  if (
    !savedInterview &&
    currentQuestion === questions.length - 1 &&
    results[currentQuestion]
  ) {
    const interviews =
      Number(localStorage.getItem("interviews")) || 0;

    localStorage.setItem(
      "interviews",
      interviews + 1
    );

    setSavedInterview(true);
  }
}, [
  currentQuestion,
  results,
  questions.length,
  savedInterview
]);

  return (
    <div className="app-container">
      <div className="dashboard">

        <div className="dashboard-header">
          <h1>🎤 Interview Practice</h1>

          <p>
            Practice questions for {studentData.goal}
          </p>
        </div>

        <div className="roadmap-card">

            <h2>
                Question {currentQuestion + 1} of {questions.length}
            </h2>

            <h3>
                {questions[currentQuestion]}
            </h3>

            <textarea
                rows="5"
                placeholder="Type your answer..."
                value={answers[currentQuestion] || ""}
                onChange={(e) =>
                setAnswers({
                    ...answers,
                    [currentQuestion]: e.target.value,
                })
                }
            />

            <button
                onClick={() => {
                const result = evaluateAnswer(
                    answers[currentQuestion] || ""
                );

                setResults({
                    ...results,
                    [currentQuestion]: result,
                });

                setTotalScore(prev => {
                    const newScore = prev + result.score;

                    localStorage.setItem(
                        "avgScore",
                        (
                        newScore / questions.length
                        ).toFixed(1)
                    );

                    return newScore;
                    });
                }}
            >
                Evaluate Answer
            </button>
            <button
            onClick={() => goToResume()}
            >
            📄 Build Resume
            </button>
            {results[currentQuestion] && (
                <div style={{ marginTop: "20px" }}>
                    <h3>
                    Score:
                    {results[currentQuestion].score}/10
                    </h3>

                    <ul>
                    {results[currentQuestion].feedback.map(
                        (item, index) => (
                        <li key={index}>{item}</li>
                        )
                    
                    )}
                    </ul>
                    {results[currentQuestion] &&
                        currentQuestion < questions.length - 1 && (
                        <button
                            onClick={() =>
                            setCurrentQuestion(currentQuestion + 1)
                            }
                        >
                            Next Question →
                        </button>
                    )}
                    {currentQuestion === questions.length - 1 &&
                        results[currentQuestion] && (
                        <div
                            style={{
                            marginTop: "30px",
                            textAlign: "center",
                            }}
                        >
                            <h2>🎉 Interview Complete</h2>
                            <div className="report-card">

                            <h2>📊 Interview Report</h2>

                            <h3>
                                Overall Score:
                                {(totalScore / questions.length).toFixed(1)}
                                /10
                            </h3>

                            <div className="report-section">
                                <h4>✅ Strengths</h4>

                                <ul>
                                <li>Good communication</li>
                                <li>Shows willingness to learn</li>
                                <li>Technical skills mentioned</li>
                                </ul>
                            </div>

                            <div className="report-section">
                                <h4>⚠ Areas to Improve</h4>

                                <ul>
                                <li>Add more project examples</li>
                                <li>Give detailed answers</li>
                                <li>Quantify achievements</li>
                                </ul>
                            </div>

                            </div>
                        </div>
                    )}
                </div>

             )}
        </div>

      </div>
    </div>
  );
}

export default InterviewPage;