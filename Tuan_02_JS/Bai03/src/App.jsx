import { useState } from 'react'
import './App.css'

function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');
  function handleChange(e) {
    setOperator(e.target.value);
  }
  function Calculator() {
    switch (operator) {
      case '+':
        setResult(parseFloat(a)+parseFloat(b));
        break;
      case '-':
        setResult(parseFloat(a)-parseFloat(b));
        break;
      case '*':
        setResult(parseFloat(a)*parseFloat(b));
        break;
      case '/':
        if(b==0){
          alert('Số B không hợp lệ');
        }else{
          setResult(parseFloat(a)/parseFloat(b));
        }
        break;
      default:
        break;
    }
  }

  return (
    <>
      <input onChange={(e)=>{
        setA(e.target.value);
      }} type="text"
      placeholder='Nhap so A'/>
      <br/>
      <input onChange={(e)=>{
        setB(e.target.value);
      }} type="text"
      placeholder='Nhap so B'
     />
     <br/>
     <input onChange={handleChange} type="radio" name="group" value='+' /><span>+</span>
     <input onChange={handleChange} type="radio" name="group" value='-' /><span>-</span>
     <input onChange={handleChange} type="radio" name="group" value='*' /><span>*</span>
     <input onChange={handleChange} type="radio" name="group" value='/' /><span>/</span>
     <br/>
     <button onClick={Calculator}>Calculator</button>
     <br/>
     <span>Result = {result}</span>
    </>
  )
}

export default App
