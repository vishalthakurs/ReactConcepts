import React from 'react'
export default function ChildComponent(props)
{
    const name='Vishal Singh'
    const detail={name:'Vishal',email:'vishal@gmail.com',phone:'9090'}
    return(
        <>
        <h2>Child Component</h2>
        <button onClick={()=>{props.alert(detail)}}>Click me</button>
        </>
    )
}
