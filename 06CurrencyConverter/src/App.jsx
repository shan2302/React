import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [firstCurrencySign, setFirstCurrencySign] = useState('$')
  const [secondCurrencySign, setSecondaryCurrencySign] = useState('$')
  const [first, setFirst] = useState(0)
  const [result,setResult] = useState(0);
  const CurrencyConverter = () => {
    let convertedValue ;
    console.log(firstCurrencySign,secondCurrencySign,first);
    if(firstCurrencySign==secondCurrencySign)
    {
      alert("Both sign can't be same")
    }
    else
    {
      if(firstCurrencySign=="$")
      {
        if(secondCurrencySign=="€")
        {
          convertedValue = first*0.85;
          
        }
        else 
        {
          convertedValue = first*85.83;
        }
      }
      else if(firstCurrencySign=="€")
      {
        if(secondCurrencySign=="$")
        {
          convertedValue = first*1.18;
        }
        else
        {
          convertedValue = first*100.95;
        }
      }
      else
      {
        if(secondCurrencySign=="$")
        {
          convertedValue = first*0.012;
        }
        else
        {
          convertedValue = first*0.0099;
        }
      }
      
    }
    console.log(convertedValue);
    setResult(convertedValue);
   console.log(result);
    
  }
  return (
    <>
      <div className=' text-4xl font-bold underline text-black-500  dark:text-white text-center flex justify-center  items-center h-screen'>
        
        <div className='bg-red-700 text-yellow-500'>
          <h1 className='text-yellow-500 bg-black-500 rounded-2xl'>Currency Converter</h1>
          <input onChange={(e)=>{setFirst(e.target.value)}}className='bg-white rounded-3xl' type="number" name="" id="" />
          <select className='bg-black'value={firstCurrencySign} onChange={(e)=>{
            setFirstCurrencySign(e.target.value)
          }}>
            <option value="$">$</option>
            <option value="€">€</option>
            <option value="₹">₹</option>
          </select>
          <h4 className='text-center text-yellow-500'>To</h4>
          <input  value={result} className=' bg-white rounded-3xl ' type="number" name="" id="" readOnly/>
          <select  className='bg-black'value={secondCurrencySign} onChange={(e)=>{setSecondaryCurrencySign(e.target.value)}}>
            <option value="$">$</option>
            <option value="€">€</option>
            <option value="₹">₹</option>
          </select>
          <br />
          <button onClick={CurrencyConverter}className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-3xl'>Convert {firstCurrencySign} to {secondCurrencySign}</button>
        </div>
          
      </div>
    </>
  )
}

export default App
