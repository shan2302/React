import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Comp3 from './Components/Body/Comp3'
import Body from './Components/Body/Body'

function App() {
  const [headerName, setHeaderName] = useState("Header")

  return (
    <>
    <Header headerName={headerName}/>
    {/* <Comp3 setHeaderName={setHeaderName}/> */}
    <Body setHeaderName={setHeaderName}/>
    </>
  )
}

export default App
