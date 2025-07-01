import { useState } from "react";

function App() {
  const [color, SetColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200 "
        style={{ backgroundColor: color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
            <button  onClick={()=> SetColor("Red")}className="outline-none px-4 py-1 rounded-full text-white-500 shadow-lg"
            style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=> SetColor("Green")}className="outline-none px-4 py-1 rounded-full text-white-500 shadow-lg"
            style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=> SetColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white-500 shadow-lg"
            style={{backgroundColor:"blue"}}>Blue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
