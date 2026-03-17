import React, { useState } from "react";

function MoodTracker() {
  const [mood, setMood] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Mood Tracker</h2>

      <button onClick={() => setMood("😊 Happy")}>Happy</button>
      <button onClick={() => setMood("😢 Sad")}>Sad</button>
      <button onClick={() => setMood("😎 Cool")}>Cool</button>

      <h3>Your Mood: {mood}</h3>
    </div>
  );
}

export default MoodTracker;