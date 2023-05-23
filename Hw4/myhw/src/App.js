import { useState } from 'react';

function App() {  
  const [state, setState] = useState(1);
  const handleReduce = () => {
    if(state > 1) {
      setState(state - 1);
    }
  } 

  const handleIncrease = () => {
    setState(preState => preState +1)
    setState(preState => preState +1)
    setState(preState => preState +1)
  }

  return (
   <>
      <button onClick={handleReduce}>-</button>
      <h1>{state}</h1>
      <button onClick={handleIncrease}>+</button>
   </> 
  )
}

export default App;
