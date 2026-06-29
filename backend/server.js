require("dotenv").config();
console.log(process.env.GEMINI_API_KEY);

const { GoogleGenerativeAI } = require("@google/generative-ai");

const express = require("express");
const cors = require("cors");

const app = express();

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CareerPilot Backend Running");
});

app.post("/roadmap", async (req, res) => {
  try {
    console.log("Roadmap route hit");

    const { branch, year, goal } = req.body;

    console.log(branch, year, goal);

    const prompt = `
You are an expert career mentor.

Student Details:
Branch: ${branch}
Year: ${year}
Goal: ${goal}
`;

    console.log("Prompt created");

    const result = await model.generateContent(prompt);

    console.log("Gemini responded");

    const roadmap = result.response.text();

    res.json({
      roadmap,
    });

  } catch (error) {
    console.log("ERROR OCCURRED:");
    console.log(error);

    res.status(500).json({
      message: "Something went wrong",
    });
  }
});

app.get("/models-test", async (req, res) => {
  try {
    const result = await model.generateContent("Say hello");

    res.json({
      response: result.response.text(),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});