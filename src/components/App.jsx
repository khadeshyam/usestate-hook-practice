import React, { useEffect, useState } from "react";

function App() {
 
  const now = new Date().toLocaleTimeString().substring(0,8);
 
  const [time,setTime] = useState(now);

  function updateTime(){
    const newTime = new Date().toLocaleTimeString().substring(0,8);
    setTime(newTime);
  }
  useEffect(()=>{
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  },[])
 
  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
