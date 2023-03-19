import React, { useRef } from 'react'
export default function UsRef()
{
    let inputRef=useRef(null);
    function changleInput()
    {
        inputRef.current.value=1000;
        inputRef.current.style.color='blue'
        inputRef.current.focus()
        //inputRef.current.style.backgroundColor='black';
    }

    return(
        <>
        <input type='text' ref={inputRef}></input>
        <button onClick={changleInput}>Handle Input</button>
        </>
    )
}
