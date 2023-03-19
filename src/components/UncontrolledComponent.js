import React,{useRef} from 'react'
export default function UncontrolledComponent()
{
    let inputRef=useRef(null);
    let inputRef2=useRef(null);
    const submitform=(event)=>{
        event.preventDefault();
        console.log(`input field value 1:${inputRef.current.value}`);
        console.log(`input field value 2:${inputRef2.current.value}`);
    }
    return(
        <>
        <form onSubmit={submitform}>  
            <input type='text' ref={inputRef}></input><br></br>
            <input type='text' ref={inputRef2}></input><br></br>
            <button type='submit'>Submit</button>
        </form>
        </>
    )
}
