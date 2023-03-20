import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
export default function Dele()
{
    const[userId,setUserId]=useState(null)
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[phone,setPhone]=useState("");

    const [data,setData]=useState([]);
    function getData()
    {
        fetch('http://localhost:3000/users').then((response)=>{
            return response.json()
        }).then((result)=>{
            setData(result);
            setId(result[0].id)
            setName(result[0].name);
            setPhone(result[0].mobile)
            setUserId(result[0].id)
            
            
        },)
    }
   

    useEffect(()=>{getData()},[])
    function deleteUser(id)
    {
       fetch(`http://localhost:3000/users/${id}`,{
        method:'DELETE'
       }).then((response)=>{
        return response.json()
       }).then((result)=>{
        console.log(result);
        getData()
       })
    }
    function selectUser(item)
    {
        setId(item.id)
        setName(item.name)
        setPhone(item.mobile)
        setUserId(item.id)
        
    }
    function updateUser()
    {
        let data=[{id,name,phone,userId}]
        fetch(`http://localhost:3000/users/${userId}`,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data),
       }).then((response)=>{
        return response.json()
       }).then((result)=>{
        console.log(result);
        getData()
       })
        
    }
    return(
        <>
        <Table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                     data.map((e ,i)=>
                    
                     <tr key={i}>
                         <td>{e.id}</td>
                         <td>{e.name}</td>
                         <td>{e.mobile}</td>
                         <td><button onClick={()=>deleteUser(e.id)}>Delete</button></td>
                         <td><button onClick={()=>selectUser(e)}>Update</button></td>
                     </tr>)
                }
            </tbody>
        </Table>
        <div className='form-data'>
            <input type='text' value={id} onChange={(e)=>setId(e.target.value)}></input><br></br>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
            <input type='text' value={phone} onChange={(e)=>setPhone(e.target.value)}></input><br></br>
            <button onClick={updateUser}>Update User</button>
        </div>
        </>
    )
}