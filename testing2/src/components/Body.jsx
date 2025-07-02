import { useState } from "react";

export default function Body({setHeaderName}) {
  return(
    <>
    <h1>Body</h1>
    <button value="Shantanu" onClick={(e)=>{setHeaderName(e.target.value)}}>click to print the value of header as Shantanu</button>
    </>
  )
}

