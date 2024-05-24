import React, { useState } from 'react'
import './App.css';
let rndNum= Math.floor(Math.random() * 100) + 1;
const App = () => {
  
  const[userGuess,setUserGuess] =useState("");
  const[userCount,setUserCount]=useState(0);
  const[userAllGuessValue,setUserAllGuessValue]=useState([]);
  const[randomNumber,setRandomNumber]=useState(rndNum);
  const[message,setMessage]=useState("");
  const[disabled,setDisabled]=useState(false);
  const [LowOrHigh,setLowOrHigh]=useState("");
  const[lhMsg,setlhMsg]=useState("");
  
  const handleValue=(e)=>{
    setUserGuess(e.target.value);
    // setUserGuess("")
  }

  const restartAgain=()=>{
    setDisabled(false);
    setMessage("");
    setUserAllGuessValue([]);
    setUserCount(0);
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setUserGuess("");

  }

  const handleSubmit=()=>{
    if(+randomNumber=== +userGuess){
      setMessage("You Won!!");
      setDisabled(true)
    }else if(userCount=== 9){
      setMessage("Game Over!!");
      setDisabled(true)
    }else{
      setMessage("Wrong Guess!!");
    if(randomNumber>userGuess){
      setlhMsg("(select value is  low)")
    }  if(randomNumber<userGuess){
      setlhMsg("(select value is  high)")
    }
  }

    


    setUserCount(userCount+1);
    setUserAllGuessValue([...userAllGuessValue,userGuess]);

  }
  return (
    <div className='app'>
     <div className="container">
     <h1 className='title'>Number guessing Game </h1>
     <p className='guess'>Guess The Number between 1 to 100</p>
     <input disabled={disabled} type="text" onChange={handleValue} placeholder='Enter any number' /><br />
     <button className='btn' disabled={disabled} onClick={handleSubmit}>Submit</button>
     {
        disabled &&
        <button className='btn2' onClick={restartAgain}>Start Again</button>
      }
      <h1 className='result'>
        Result :{message}
      </h1>
      <p className='comment'>
        {lhMsg}
      </p>
      <div>
        <p className='round'>Total Round Play By User :{userCount}</p>
        {/* <p>{randomNumber}</p> */}
        <p className='guess'>Your Guesses :
          {
            userAllGuessValue.map((item,index)=>{
              return(
                <span key={index}>
                  {item},{}  
                </span>

              )
            })
          }
        </p>
      </div>
     </div>
    </div>
  )
}

export default App