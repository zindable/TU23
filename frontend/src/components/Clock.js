import { Center } from "@mantine/core";
import { useState } from "react";

import './Clock.css';

const Clock = () =>{
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(UpdateTime)
  return <p style={{
        textAlign: 'center',
        height: "80px",
        width: "230px"
      }}
      className="clock"
      >{ctime}</p>
}
export default Clock
