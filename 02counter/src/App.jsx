import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(5)

  // let counter = 5;
  const addValue = () => {
    console.log("clicked ",counter);
    if(counter<20)
    {
      setCounter(counter+1)
    }
    else
    {
      alert("Counter can't be greater than 20");
    }
    
  }
  const removeValue = () => {
    if(counter>0)
    {
      setCounter(counter-1);
    }
    else{
      alert("Counter can't be Negative");
    }
    console.log("Clicked",counter);
    
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>CounterValue : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
