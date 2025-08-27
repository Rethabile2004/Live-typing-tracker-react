import { useState, useEffect } from "react";

function App() {
  const [input,setInput]=useState("");
  const [message,setMessage]=useState("");

  useEffect(()=>{
    if(!input)return;

    const timeout=setTimeout(()=>{
      setMessage("You stopped typing...🤔");
    },2000)

    return ()=>{
      clearTimeout(timeout);
    }
  },[input]);

  const handleInputChange=(e)=>{
    setInput(e.target.value);
    setMessage("You are typing...🐱‍👤")
  }

  return (
    <div style={{padding:"20px"}}>
      <h1>Live typing tracker</h1>
      <input type="text" placeholder="Keep typing..." onChange={handleInputChange} value={input}/>
      <p>{message}</p>
    </div>
  )
}

export default App;
