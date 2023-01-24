import './App.css';
import React, { useState } from "react";
const App=()=>{
  let d = new Date();
  let n = d.toLocaleTimeString();
  const state = useState();
  const [time,setTime] = useState(n);
  const getTime=()=>{
    let d = new Date();
    let n = d.toLocaleTimeString();
    setTime(n);
  }
  setInterval(getTime,1000);
  return(
  <>
  <div className = "container">
    <h1 className="heading">{time}</h1>
    {/* <button className="button" onClick={getTime}>GET TIME</button> */}
  </div>
  </>
  );
}
export default App;