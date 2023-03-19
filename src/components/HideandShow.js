import React,{Component,useState} from "react";
export default function HideandShow()
{
    const [status,setStatus]=useState(true)
    console.log('why i am not visible');
    function showToggle()
    {
        if(status===false)
        {
            setStatus(true)
        }
        else{
        setStatus(false);
        }
    }
    return(
        <>
        {
            status?<h1>Hello world</h1>:null
        }
        {/* <button onClick={()=>{setStatus(false)}}>Hide</button>
        <button onClick={()=>{setStatus(true)}}>Show</button> */}
        <button onClick={showToggle}>Toggle</button>
        </>
    )
}