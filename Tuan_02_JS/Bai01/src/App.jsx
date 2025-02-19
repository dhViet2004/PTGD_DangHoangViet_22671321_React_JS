import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  var nameOutput = '';
  function handleChange(e) {
    nameOutput=e.target.value;
  }
  function handleClick() {
    setName(nameOutput);    
  }
  return (
    <>
      <input onChange={handleChange} type="text" placeholder='Enter your name' />
      <br/>
      <button onClick={handleClick}>Click say...</button>
      <br/>
      <span>Hello {name}</span>
    </>
  )
}

export default App
