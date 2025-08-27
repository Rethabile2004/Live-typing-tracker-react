import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState(false);
  const [lazyCount, setLazyCount] = useState(0);

  useEffect(() => {
    if (!input) return;

    const timeout = setTimeout(() => {
      setMessage(true);
      setLazyCount((prev) => prev + 1); // increment when stopped
    }, 2000);

    return () => clearTimeout(timeout);
  }, [input]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setMessage(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Live Typing Tracker</h1>
      <input
        type="text"
        placeholder="Keep typing..."
        onChange={handleInputChange}
        value={input}
      />
      <p>
        {message
          ? `You stopped typing ${lazyCount} times... 🤔`
          : "You are typing... 🐱‍👤"}
      </p>
    </div>
  );
}

export default App;
