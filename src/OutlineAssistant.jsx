import React, { useState } from "react";

const OutlineAssistant = () => {
  const [step, setStep] = useState(0);
  const [topic, setTopic] = useState("");
  const [structure, setStructure] = useState("");
  const [audience, setAudience] = useState("");
  const [visuals, setVisuals] = useState(null);

  const handleUseAssistant = () => setStep(1);
  const handleSkip = () => setStep("skip");

  const suggestedKeywords = [
    "Grammar Tips",
    "Motivational Speech",
    "Book Review",
    "Startup Pitch",
    "Science Project",
  ];

  const handleKeywordClick = (keyword) => setTopic(keyword);

  return (
    <div
      style={{
        padding: "4rem",
        backgroundColor: "#F5F3EB",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        color: "#1E1E1E",
        textAlign: "center",
      }}
    >
      {/* Step 0 – Welcome */}
      {step === 0 && (
        <>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Would you like help building your outline?
          </h2>
          <p style={{ color: "#737373", marginBottom: "2rem" }}>
            Prezen can guide you step-by-step — or let you skip straight to the designer.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button
              onClick={handleUseAssistant}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#3E7BFA",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              🧠 Use Outline Assistant
            </button>
            <button
              onClick={handleSkip}
              style={{
                padding: "1rem 2rem",
                backgroundColor: "#fff",
                border: "2px solid #3E7BFA",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
                color: "#3E7BFA",
              }}
            >
              🎨 Skip & Start Designing
            </button>
          </div>
        </>
      )}

      {/* Step 1 – Topic */}
      {step === 1 && (
        <>
          <h3 style={{ fontSize: "1.75rem", marginTop: "2rem" }}>
            Step 1: What's your presentation about?
          </h3>
          <p style={{ color: "#737373" }}>You can type your idea — or pick one below to get started:</p>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Grammar tips for 6th grade students"
            style={{
              marginTop: "1rem",
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              width: "60%",
              maxWidth: "400px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          />
          <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
            {suggestedKeywords.map((keyword) => (
              <button
                key={keyword}
                onClick={() => handleKeywordClick(keyword)}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.95rem",
                  backgroundColor: "#E5EAFD",
                  color: "#3E7BFA",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                {keyword}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <button
              onClick={() => setStep(2)}
              disabled={!topic}
              style={{
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                backgroundColor: "#3E7BFA",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 2 – Structure */}
      {step === 2 && (
        <>
          <h3 style={{ fontSize: "1.75rem", marginTop: "2rem" }}>
            Step 2: Let’s shape your idea into something powerful.
          </h3>
          <p style={{ color: "#737373" }}>What kind of story are you trying to tell?</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginTop: "2rem" }}>
            {[
              { label: "🎓 Teach something clearly", value: "informative" },
              { label: "💬 Persuade or motivate", value: "persuasive" },
              { label: "📖 Tell a story or journey", value: "storytelling" },
              { label: "✍️ I’ll decide later", value: "custom" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setStructure(option.value)}
                style={{
                  padding: "1rem 1.5rem",
                  fontSize: "1rem",
                  backgroundColor: structure === option.value ? "#3E7BFA" : "#fff",
                  color: structure === option.value ? "#fff" : "#3E7BFA",
                  border: "2px solid #3E7BFA",
                  borderRadius: "10px",
                  cursor: "pointer",
                  minWidth: "260px",
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <button
              onClick={() => setStep(3)}
              disabled={!structure}
              style={{
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                backgroundColor: structure ? "#3E7BFA" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: structure ? "pointer" : "not-allowed",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 3 – Slide Count + Tone */}
      {step === 3 && (
        <>
          <h3 style={{ fontSize: "1.75rem", marginTop: "2rem" }}>
            Step 3: Let’s fine-tune the vibe.
          </h3>
          <p style={{ color: "#737373" }}>How long and what kind of energy should your presentation have?</p>
          <div style={{ marginTop: "2rem" }}>
            <h4>📊 How many slides?</h4>
            <input
              type="number"
              min="1"
              placeholder="e.g. 10"
              style={{
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                width: "120px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                marginTop: "0.5rem",
              }}
            />
            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem", justifyContent: "center" }}>
              {[5, 10, 15].map((num) => (
                <button
                  key={num}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.95rem",
                    backgroundColor: "#E5EAFD",
                    color: "#3E7BFA",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    document.querySelector('input[type="number"]').value = num;
                  }}
                >
                  {num} slides
                </button>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "3rem" }}>
            <h4>🎤 What tone or energy?</h4>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
              {["Exciting", "Professional", "Creative", "Friendly", "Calm"].map((tone) => (
                <button
                  key={tone}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.95rem",
                    backgroundColor: "#E5EAFD",
                    color: "#3E7BFA",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    document.getElementById("toneInput").value = tone;
                  }}
                >
                  {tone}
                </button>
              ))}
            </div>
            <input
              id="toneInput"
              type="text"
              placeholder="Type your own style…"
              style={{
                marginTop: "1rem",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                width: "60%",
                maxWidth: "300px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <button
              onClick={() => setStep(4)}
              style={{
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                backgroundColor: "#3E7BFA",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 4 – Audience */}
      {step === 4 && (
        <>
          <h3 style={{ fontSize: "1.75rem", marginTop: "2rem" }}>
            Step 4: Who is this presentation for?
          </h3>
          <p style={{ color: "#737373" }}>Choose your primary audience so we can fine-tune the tone and visuals.</p>
          <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "center" }}>
            {["Students", "Coworkers", "Clients", "Investors", "Kids", "General Public"].map((group) => (
              <button
                key={group}
                onClick={() => setAudience(group)}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.95rem",
                  backgroundColor: audience === group ? "#3E7BFA" : "#E5EAFD",
                  color: audience === group ? "#fff" : "#3E7BFA",
                  border: "none",
                  borderRadius: "20px",
                  cursor: "pointer",
                }}
              >
                {group}
              </button>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <button
              onClick={() => setStep(5)}
              disabled={!audience}
              style={{
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                backgroundColor: audience ? "#3E7BFA" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: audience ? "pointer" : "not-allowed",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Step 5 – Visuals */}
      {step === 5 && (
        <>
          <h3 style={{ fontSize: "1.75rem", marginTop: "2rem" }}>
            Step 5: Do you want visuals with that?
          </h3>
          <p style={{ color: "#737373" }}>We can generate relevant images or graphics for your slides. Totally optional.</p>
          <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
            <button
              onClick={() => setVisuals(true)}
              style={{
                padding: "1rem 2rem",
                backgroundColor: visuals === true ? "#3E7BFA" : "#fff",
                color: visuals === true ? "#fff" : "#3E7BFA",
                border: "2px solid #3E7BFA",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ✅ Yes, generate visuals
            </button>
            <button
              onClick={() => setVisuals(false)}
              style={{
                padding: "1rem 2rem",
                backgroundColor: visuals === false ? "#3E7BFA" : "#fff",
                color: visuals === false ? "#fff" : "#3E7BFA",
                border: "2px solid #3E7BFA",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ❌ No thanks
            </button>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <button
              style={{
                padding: "0.75rem 2rem",
                fontSize: "1rem",
                backgroundColor: visuals !== null ? "#3E7BFA" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: visuals !== null ? "pointer" : "not-allowed",
              }}
              disabled={visuals === null}
            >
              Finish
            </button>
          </div>
        </>
      )}

      {/* Skip Mode */}
      {step === "skip" && (
        <h3 style={{ fontSize: "1.75rem", marginTop: "2rem" }}>
          🎉 Designer Mode Coming Soon!
        </h3>
      )}
    </div>
  );
};

export default OutlineAssistant;
