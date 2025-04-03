import React from "react";

const LandingPage = () => {
  return (
    <div style={{
      backgroundColor: "#FAFAF8",
      color: "#1E1E1E",
      padding: "4rem 2rem",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        This isn’t another slide tool.
        <br /> It’s your voice — <span style={{ color: "#3E7BFA" }}>seen</span>.
      </h1>
      <p style={{ fontSize: "1.25rem", color: "#737373", maxWidth: "600px", margin: "0 auto" }}>
        Prezen is your AI-powered agent that transforms thoughts into beautifully designed presentations.
      </p>

      <div style={{ marginTop: "2rem" }}>
        <button style={{
          backgroundColor: "#3E7BFA",
          color: "#fff",
          border: "none",
          padding: "1rem 2rem",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer",
          marginRight: "1rem"
        }}>
          Start Creating
        </button>

        <button style={{
          backgroundColor: "transparent",
          border: "2px solid #3E7BFA",
          padding: "1rem 2rem",
          fontSize: "1rem",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          See It In Action
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
