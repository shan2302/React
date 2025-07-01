import Body from "./components/Body"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import Mix from "./components/mix"


function App() {
return (
  <>
   {Header()}
   {Body()}
    <Footer/>
   {Mix({component:"Shantanu"})}
   <Mix component="Siddharth"/>
  </>
)
}

export default App
