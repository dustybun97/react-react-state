import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");
  const handleGreeting = (message) => {
    setGreeting(message);
  };

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={() => handleGreeting("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => handleGreeting("Hi!")}>Hi!</button>
        <button onClick={() => handleGreeting("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
