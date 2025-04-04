import React, { useRef } from "react";
import LandingPage from "./LandingPage";
import OutlineAssistant from "./OutlineAssistant";

function App() {
  const assistantRef = useRef(null);

  const scrollToAssistant = () => {
    assistantRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      <LandingPage onStart={scrollToAssistant} />
      <div ref={assistantRef}>
        <OutlineAssistant />
      </div>
    </div>
  );
}

export default App;