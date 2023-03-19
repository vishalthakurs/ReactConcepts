import React,{useState} from 'react'
export default function UsMem()
{
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);
    console.warn('rendering');
    return(
        <>
        <h1>Count is :{count}</h1>
        <h1>Item is :{item}</h1>
        <h1></h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item*10)}>Update Item</button>
        </>
    )
}