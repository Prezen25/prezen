import React from "react";
import LandingPage from "./LandingPage";
import OutlineAssistant from "./OutlineAssistant";

function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <LandingPage />
      {/* Uncomment this later to jump straight to the assistant */}
      {/* <OutlineAssistant /> */}
    </div>
  );
}

export default App;
