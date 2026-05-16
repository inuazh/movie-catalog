'use client'

import { useState } from "react";

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  const handlePlus = () =>{
    setCount(prev => prev +1)
  }

  const handleMin = () =>{
    setCount(prev => prev -1)
  }

  return (
    <>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMin}>-</button>
      <button onClick={()=> setCount(0)}>reset</button>
      <p>{count}</p>
    </>
  );
}
