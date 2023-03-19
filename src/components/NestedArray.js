import React from 'react'
import { Table } from 'react-bootstrap'
export default function NestedArray()
{
    const users=[
        {name:'Anil',email:'anil@gmail.com',address:[
            {Hno:'10',city:'Noida',country:'India'},
            {Hno:'23',city:'Kolkata',country:'India'},
            {Hno:'67',city:'Delhi',country:'India'},
            {Hno:'90',city:'Hyderabad',country:'India'},
        ]},
        {name:'Bruce',email:'bruce@gmail.com',address:[
            {Hno:'10',city:'Noida',country:'India'},
            {Hno:'23',city:'Kolkata',country:'India'},
            {Hno:'67',city:'Delhi',country:'India'},
            {Hno:'90',city:'Hyderabad',country:'India'},
        ]},
        {name:'Peter',email:'peter@gmail.com',address:[
            {Hno:'10',city:'Noida',country:'India'},
            {Hno:'23',city:'Kolkata',country:'India'},
            {Hno:'67',city:'Delhi',country:'India'},
            {Hno:'90',city:'Hyderabad',country:'India'},
        ]},
        {name:'Sam',email:'sam@gmail.com',address:[
            {Hno:'10',city:'Noida',country:'India'},
            {Hno:'23',city:'Kolkata',country:'India'},
            {Hno:'67',city:'Delhi',country:'India'},
            {Hno:'90',city:'Hyderabad',country:'India'},
        ]},
    
    ]

    return(
        <div>
            <h1>List with Nested Array</h1>
            <Table variant='dark' striped>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data,i)=>
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td><Table variant='dark' striped>
                                <tbody>{
                                data.address.map((item)=>
                                <tr key={i}>
                                    <td>{item.Hno}</td>
                                    <td>{item.city}</td>
                                    <td>{item.country}</td>
                                </tr>)
                                }</tbody></Table></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
