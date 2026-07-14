function RecentActivity() {

  const activities =
    JSON.parse(localStorage.getItem("activities")) || [];

  return (
    <div className="roadmap-card">

      <h2>📅 Recent Activity</h2>

      {activities.length === 0 ? (

        <p>No recent activity.</p>

      ) : (

        activities.map((activity, index) => (
            <div className="activity-item" key={index}>

                <div className="activity-icon">
                {activity.title.split(" ")[0]}
                </div>

                <div className="activity-content">
                <h4>{activity.title}</h4>
                <p>{activity.description}</p>
                <small>{activity.time}</small>
                </div>

            </div>
        ))

      )}

    </div>
  );
}

export default RecentActivity;