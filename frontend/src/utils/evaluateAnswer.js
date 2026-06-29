function evaluateAnswer(answer) {
  let score = 0;
  let feedback = [];

  const text = answer.toLowerCase();

  if (answer.length > 100) {
    score += 2;
    feedback.push("Good detailed answer.");
  } else {
    feedback.push("Try adding more details.");
  }

  if (
    text.includes("project") ||
    text.includes("internship")
  ) {
    score += 2;
    feedback.push("Relevant experience mentioned.");
  }

  if (
    text.includes("skill") ||
    text.includes("react") ||
    text.includes("python")
  ) {
    score += 2;
    feedback.push("Technical skills mentioned.");
  }

  if (
    text.includes("learn") ||
    text.includes("improve")
  ) {
    score += 2;
    feedback.push("Growth mindset shown.");
  }

  if (
    text.includes("result") ||
    text.includes("achieved") ||
    text.includes("built")
  ) {
    score += 2;
    feedback.push("Achievements highlighted.");
  }

  return {
    score,
    feedback,
  };
}

export default evaluateAnswer;