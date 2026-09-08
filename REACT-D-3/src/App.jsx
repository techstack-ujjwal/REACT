import { useState } from 'react';

import './App.css';


export default function App() {

  const [count,setCount]= useState(0);
  const[count1,setCount1]=useState(0);

  // const incrementHandler=(numVal)=>{
  //   // setCount(numVal+1); short hand notation
  //   setCount((prev)=>prev+ numVal+1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  
  return (
    <>
      <h1>COUNTER is {count}</h1>
      <div className="Card">count is {count}</div>
      <div>
        <button onClick={() => setCount(count+1)} style={{ margin: "0 5px" }}>
          Increase
        </button>
        <button onClick={() =>setCount((count)=>Math.max(count-1,0))} style={{ margin: "0 5px" }}>
          Decrease
        </button>
        <button onClick={() =>setCount(0)} style={{ margin: "0 5px" }}>
          reset
        </button>
          </div>
        <div style={{margin :"10px 0"}}>
          <input style={{
            width:"100px",
            border:"1px solid",
            margin:"0 6 px",
            padding:"0,6em 1.2em"

          }}
          value={count1}
          onChange={(e)=>{setCount1(Number(e.target.value)) }}  type="text" />
          <button
          style={{margin:"0,5px"}}
          onClick={()=>{
            setCount(Number(count1))
            setCount1(0)

          }}>Set to {count1}</button>
        </div>
    </>
  );

}