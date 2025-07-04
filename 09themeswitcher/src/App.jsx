import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./Contexts/Theme";
import "./App.css";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";

function App() {
  const [themeMode , setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  }
  const darkTheme = () => 
  {
    setThemeMode("dark");
  };

  //Actual change in theme
  useEffect(()=>
  {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
    // document.querySelector('html').classList.remove("light","dark")
    // document.querySelector('html').classList.add(themeMode);
  },[themeMode])


  return (
    <ThemeContextProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/*themeBtn */}
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            
            {/* Card */}
            <Card/>
            </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
