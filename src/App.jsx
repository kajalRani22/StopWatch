import { useState,useRef } from 'react'

import './App.css'

function App() {
  const [time, setTime] = useState(0)
  let timeRef = useRef(null);
function startTimer(){
  timeRef.current=setInterval(()=>{
setTime(time =>time+1)
  }, 1000)

}
function stopTimer(){
clearInterval(timeRef.current);
}
function resetbtn(){
  stopTimer(); 
  setTime(0);

}
  return (
    <div>
      <h1>StopWatch:{time}seconds</h1>
     <br/> <button onClick={startTimer}>Start</button><br/>
      <br/><button onClick={stopTimer}>Stop</button><br/>
      <br/><button onClick={resetbtn}>Reset</button>
    </div>
  )
}

export default App
