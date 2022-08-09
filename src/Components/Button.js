import React from 'react'
import { useState,useEffect } from 'react'

export default function Button() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    
    useEffect(() => {
        console.log('klik')
      
      },[count]);
    return (
        <div>
            <div className='cnt'></div>
            {count}
            <button onClick={() => setCount(count + 1)}>click
            </button>
            <button onClick={() => setCount2(count2 + 1)}>click 2
            </button>
        </div>
  )
}
