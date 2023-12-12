import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import Savedata from './Savedata';


function App() {
  const [num,setnum]=useState('');
  const[num2,setnum2]=useState('');
 
  function handleSubmit(e)
  {
    e.preventDefault();
           console.log(num,num2);

  }
  
  return (
  
    <>
    <form onSubmit={handleSubmit}>
      <label>Number1</label>
      <input type='number' placeholder="Enter the number" onChange={(e)=>setnum(e.target.value)}/><br/><br/>
      <label>Number2</label>
      <input type='number' placeholder="Enter the number" onChange={(e)=>setnum2(e.target.value)}/><br/><br/>
      <Savedata num={num} num2={num2}/>
     
    </form>
    </>
  );
}

export default App;
