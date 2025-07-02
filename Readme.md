HOOKS
function App() {
  let counter = 5;
  const addValue = () => {
    console.log("clicked ",counter);
    
    counter = counter+1;

  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>CounterValue : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Remove Value</button>
    </>
  )


In this we will face UI updation problem
By React We can solve this problem by Hooks methods
we will read React Hooks by React documentation


let [counter,setCounter]=useState(5)

  // let counter = 5;
  const addValue = () => {
    console.log("clicked ",counter);
    
    counter = counter+1;
    setCounter(counter)
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////

<!--VIRTUAL DOM-->
The Virtual DOM is a lightweight copy of the real DOM that React uses to quickly figure out the most efficient way to update the UI.

<!-- React Fiber -->
React Fiber is a reimplementation of React’s rendering engine that lets it break work into chunks so it can prioritize updates and make apps smoother.
it helps in hydration(implementation of JS)
<!-- Reconcillation -->

Reconciliation in React is the process by which React efficiently updates the user interface (UI) to reflect changes in the application's state or props

<!-- TAILWIND  -->
CSS FRAMEWORK
npm install tailwindcss @tailwindcss/vite


useCallback(()=>{},{dependencies})
useCallback use for optimizing the code and use to store data in cache
useEffect(()=>{},{dependencies})
useEffect that use to runs side effect after rendering
useRef()
useRef will create a mutable reference object to persist value

In React we have window
we want to find clipboard we will find it in window.navigator.clipboard.writeText


7:18:38