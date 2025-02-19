import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState('');

  function handleChangeA(e) {
    setA(e.target.value);
    console.log(a);
  }
  function handleChangeB(e) {
    setB(e.target.value);
    console.log(b);
  }
  function handleClick(){
    setResult(parseInt(a)+parseInt(b));
  }
  return (
    <>
      <input onChange={handleChangeA} type="text"/>
      <br/>
      <input onChange={handleChangeB} type="text" />

      <br/>
      <button onClick={handleClick}>Calculator</button>
      <br/>
      <span>{result}</span>
    </>
  )
}

export default App
