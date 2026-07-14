export function addActivity(title, description) {
  const activities =
    JSON.parse(localStorage.getItem("activities")) || [];

  activities.unshift({
    title,
    description,
    time: new Date().toLocaleString()
  });

  // Keep only the latest 10 activities
  if (activities.length > 10) {
    activities.pop();
  }

  localStorage.setItem(
    "activities",
    JSON.stringify(activities)
  );
}