export const formatGoal = (goal = "") => {
  return goal
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase())
    .trim();
};

export const formatYear = (year = "") => {
  return year
    .replace("firstYear", "1st Year")
    .replace("secondYear", "2nd Year")
    .replace("thirdYear", "3rd Year")
    .replace("fourthYear", "4th Year");
};