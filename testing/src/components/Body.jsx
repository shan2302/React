import { useState } from "react"

export default function Body() {
  const [change,SetChange] = useState("header");

  return(
  <>
  <h1>Body</h1>
  <button value="Shantanu" onClick={(e)=>{SetChange(e.target.value)}}>Click to change to Shantanu</button>
</>
  )
}
