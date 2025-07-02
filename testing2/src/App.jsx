
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [headerName,setHeaderName] = useState("Header")
  return (
    <>
      <Header headerName={headerName}/>
      <Body setHeaderName={setHeaderName}/>
      {/* <Btn/>
      */}
      <Footer/>
    </>
  )
}

export default App
