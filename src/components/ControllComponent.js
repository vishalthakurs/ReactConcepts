import React, { useState } from "react";
export default function ControllComponent()
{
    const [count,setCount]=useState();
    return(
        <>
        <input type ='text' value={count} onChange={(e)=>setCount(e.target.value)}></input>
        <h1>{count}</h1>
        </>
    )
}