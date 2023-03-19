import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
export default function Dele()
{
    const [data,setData]=useState([]);
    function getData()
    {
        fetch('http://localhost:3000/users').then((response)=>{
            return response.json()
        }).then((result)=>{
            setData(result);
            
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
                     </tr>)
                }
            </tbody>
        </Table>
        <div className='form-data'>
            <input type='text'></input><br></br>
            <input type='text'></input><br></br>
            <input type='text'></input><br></br>
            <button>Update User</button>
        </div>
        </>
    )
}