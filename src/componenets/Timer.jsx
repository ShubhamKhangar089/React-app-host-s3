import { useEffect, useState } from "react"

const MyTimer=()=>{
    const[time, setTime] = useState(0);
    const[active, setActive] = useState(false);

    useEffect(()=>{
        let interval = null;
           if(active){
           interval =  setInterval(()=>{
               setTime(prev => prev + 1);
            },1000);
           }else if(!active && time !== 0){
            clearInterval(interval);
           }
          return () => clearInterval(interval);
    },[time, active])


    const handleStart=()=>{
        setActive(true);
    }
    
    const handlePaused=()=>{
        setActive(false);
    } 

    const handleReset=()=>{
        setActive(false);
        setTime(0);
    }


    return(
        <>
        <h3>Timer: {time}</h3>
        <button onClick={handleStart} >START</button>
        <button onClick={handlePaused} >PAUSED</button>
        <button onClick={handleReset} >RESET</button>
        </>
    )
}

export default MyTimer;