import React from 'react'
import { Table } from 'react-bootstrap'
export default function HandlaArray()
{
    
    const students=[
        {name:'Manasa',email:'manasa@gmail.com',phone:'9090'},
        {name:'sowmya',email:'soemya@gmail.com',phone:'9191'},
        {name:'raghu',email:'raghu@gmail.com',phone:'9292'},
    ]
    return(
        <div>
            <Table bordered striped hover >
                <thead>
                <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                </tr>
                </thead>
                <tbody>
            {
                
                students.map((data,i)=>
                    <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                        
                    </tr>
                )
            }
            </tbody>
            </Table>
        </div>
    )
}
