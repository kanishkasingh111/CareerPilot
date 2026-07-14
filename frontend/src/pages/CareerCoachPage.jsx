import { useState, useEffect } from "react";

function CareerCoachPage({ studentData }) {

  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState(()=>{
  const saved=localStorage.getItem("coachChat");
      if(saved) return JSON.parse(saved);
      return [
        {
          sender:"ai",
          text:`👋 Hello ${studentData.name}!

    I'm your CareerPilot AI Coach.

    I can help you with:

    • Career Roadmap
    • DSA Preparation
    • Resume Building
    • Interview Tips
    • Internship Guidance

    Ask me anything! 🚀`
        }
      ];
  });
  const [typing, setTyping] = useState(false);
  const [answer, setAnswer] = useState("");
  useEffect(()=>{
    localStorage.setItem("coachChat",JSON.stringify(messages));
  },[messages]);

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
        const response=`As a ${studentData.year} student aiming to become an AI Engineer:
        1. Master Python
        2. Learn DSA
        3. Learn Machine Learning
        4. Build AI Projects
        5. Learn Deep Learning
        6. Apply for AI internships`;

        setMessages(prev=>[
          ...prev,
          {sender:"user",text:question}
          ]);
          setQuestion("");
          setTyping(true);
          setTimeout(()=>{
          setMessages(prev=>[
          ...prev,
          {sender:"ai",text:response}
          ]);
          setTyping(false);
          },1000);
        }

        else if (studentData.goal === "Web Developer") {
        const response=`As a ${studentData.year} student aiming to become a Web Developer:
        1. HTML/CSS
        2. JavaScript
        3. React
        4. Node.js
        5. MongoDB
        6. Build Full Stack Projects`;

        setMessages(prev=>[
          ...prev,
          {sender:"user",text:question}
          ]);
          setQuestion("");
          setTyping(true);
          setTimeout(()=>{
          setMessages(prev=>[
          ...prev,
          {sender:"ai",text:response}
          ]);
          setTyping(false);
          },1000);
        }

        else {
        const response="Focus on DSA, projects, internships and communication skills.";
        setMessages(prev=>[
          ...prev,
          {sender:"user",text:question}
          ]);
          setQuestion("");
          setTyping(true);
          setTimeout(()=>{
          setMessages(prev=>[
          ...prev,
          {sender:"ai",text:response}
          ]);
          setTyping(false);
          },1000);
        }
    }

        else if (q.includes("internship")) {
        const response=`As a ${studentData.year} student, build projects, improve DSA, maintain GitHub, and apply regularly through LinkedIn and company career portals.`;
        setMessages(prev=>[
          ...prev,
          {sender:"user",text:question}
          ]);
          setQuestion("");
          setTyping(true);
          setTimeout(()=>{
          setMessages(prev=>[
          ...prev,
          {sender:"ai",text:response}
          ]);
          setTyping(false);
          },1000);
        }


    else if (q.includes("resume")) {
        const response="Add strong projects, GitHub links, LinkedIn profile, technical skills, achievements and certifications.";
        setMessages(prev=>[
        ...prev,
        {sender:"user",text:question}
        ]);
        setQuestion("");
        setTyping(true);
        setTimeout(()=>{
        setMessages(prev=>[
        ...prev,
        {sender:"ai",text:response}
        ]);
        setTyping(false);
        },1000);
    }

    else if (q.includes("interview")) {
        const response="Practice DSA daily, improve communication, take mock interviews and review common interview questions.";
        setMessages(prev=>[
        ...prev,
        {sender:"user",text:question}
        ]);
        setQuestion("");
        setTyping(true);
        setTimeout(()=>{
        setMessages(prev=>[
        ...prev,
        {sender:"ai",text:response}
        ]);
        setTyping(false);
        },1000);
    }

    else {
        const response = `Based on your goal (${studentData.goal}), keep building projects, learning relevant skills and preparing for internships.`;
        setMessages(prev=>[
        ...prev,
        {sender:"user",text:question}
        ]);
        setQuestion("");
        setTyping(true);
        setTimeout(()=>{
        setMessages(prev=>[
        ...prev,
        {sender:"ai",text:response}
        ]);
        setTyping(false);
        },1000);
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

      <div className="suggestion-box">
        <button onClick={()=>setQuestion("Resume tips")}>📄 Resume Tips</button>

        <button onClick={()=>setQuestion("Interview preparation")}>🎤 Interview</button>

        <button onClick={()=>setQuestion("Internship guidance")}>🚀 Internship</button>

        <button onClick={()=>setQuestion("What should I learn next?")}>📚 Learn Next</button>

        <button onClick={()=>setQuestion("DSA roadmap")}>💻 DSA</button>
      </div>

      <textarea
        placeholder="Ask a question..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        onKeyDown={(e)=>{
          if(e.key==="Enter" && !e.shiftKey){
            e.preventDefault();
            handleAsk();
          }
        }}
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

      <div
  style={{
    display:"flex",
    gap:"10px",
    marginTop:"15px"
  }}
>
      <button onClick={handleAsk}>
        Ask Coach
      </button>

      <button
        onClick={()=>{
          const welcome=[
            {
              sender:"ai",
              text:`👋 Hello ${studentData.name}!

        I'm your CareerPilot AI Coach.

        I can help you with:

        • Career Roadmap
        • DSA Preparation
        • Resume Building
        • Interview Tips
        • Internship Guidance

        Ask me anything! 🚀`
            }
          ];

          setMessages(welcome);

          localStorage.setItem(
            "coachChat",
            JSON.stringify(welcome)
          );
        }}
        style={{
          background:"#dc2626"
        }}
      >
        🗑 Clear Chat
      </button>
    </div>

      <div className="chat-container">
        {messages.map((msg,index)=>(
          <div
            key={index}
            className={msg.sender==="user"?"user-message":"ai-message"}
          >
            <strong>
              {msg.sender==="user"?"👤 You":"🤖 AI Coach"}
            </strong>

            <p>{msg.text}</p>
          </div>
        ))}
        {typing && (
          <div className="typing-message">

          <div className="typing-header">
          🤖 AI Coach
          </div>

          <div className="typing-dots">
          <span></span>
          <span></span>
          <span></span>
          </div>

          </div>
          )}
      </div>

    </div>
  );
}

export default CareerCoachPage;