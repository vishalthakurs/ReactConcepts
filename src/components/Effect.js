import React,{useEffect,useState} from 'react'
export default function Effect()
{
    const [data,setData]=useState(10);
    const [count,setCount]=useState(10);
    useEffect(()=>{
        console.log("Data is called");
    },[data])
    useEffect(()=>{
        alert(`count is ${count}`)
    },[count])
    return(
        <>
        <div>
            <h1>Count :{count}</h1>
            <h1>Data : {data}</h1>
            <button onClick={()=>{setCount(count+1)}}>Update Count</button>
            <button onClick={()=>{setData(data+1)}}>Update Data</button>
        </div>
        </>
    )
}