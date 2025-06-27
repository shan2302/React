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