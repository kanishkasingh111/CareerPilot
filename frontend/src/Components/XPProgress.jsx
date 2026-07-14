function XPProgress({ xp }) {

  const radius = 55;
  const circumference = 2 * Math.PI * radius;

  const level=Math.floor(xp/500)+1;

  const currentXP=xp%500;

  const progress=currentXP/500;

  const offset =
    circumference - progress * circumference;

  return (
    <div className="xp-card">

      <svg width="150" height="150">

        <circle
          cx="75"
          cy="75"
          r={radius}
          className="xp-bg"
        />

        <circle
          cx="75"
          cy="75"
          r={radius}
          className="xp-progress"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />

      </svg>

      <div className="xp-text">

        <h3>Level {level}</h3>

        <h2>{currentXP}</h2>

        <p>/500 XP</p>

      </div>

      <div className="xp-bar">

        <div className="xp-fill"
        style={{
        width:`${progress*100}%`
        }}
        ></div>

      </div>

    </div>
  );
}

export default XPProgress;