import React, { useState } from 'react'
export default function PostExample() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const saveUser=()=>{
        console.log({name,email,phone})
        let data={name,email,phone}
        fetch('http://localhost:3000/users',{
            Method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
        }).then((response)=>{
            return response
        }).then((result)=>{
            console.log(result)
        })
    }
    return(
        <>
        <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
        <input type='text' name='mobile' value={phone} onChange={(e)=>setPhone(e.target.value)}></input><br></br>
        <button type='button' onClick={saveUser}>save New USer</button>
        </>
    )
    
}