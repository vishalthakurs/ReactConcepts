import React, { useState } from 'react'
export default function HighOrderComponent()
{
    
    return(
        <>
        <RedCounter cmp={Counter}/>
        <GreenCounter  cmp={Counter}/>
        <OrangeCounter cmp={Counter}/>
        </>
    )
}
function RedCounter(props)
{
    return(
        <h2 style={{background:'red',width:100}}><props.cmp />Red</h2>
    )
}
function GreenCounter(props)
{
    return(
        <h3 style={{backgroundColor:'green',width:100}}><props.cmp/>Green</h3>
    )
}
function OrangeCounter(props)
{
    return(
        <h3 style={{backgroundColor:'Orange',width:100}}><props.cmp/>Orange</h3> 
    )
}
function Counter()
{
    const [count,setCount]=useState(0);
    return(
        <div>
            <h3>{count}</h3>
            <h3 style={{fontSize:'1rem'}}><button onClick={()=>setCount(count+1)}>Update</button></h3>
        </div>
    )
}