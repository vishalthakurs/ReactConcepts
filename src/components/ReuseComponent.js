import React from 'react'
export default function ReuseComponent(props)
{
    return(
        <div>
           
            <span>Name :{props.data.name}</span>
            <span> email :{props.data.email}</span>
            <span> Phone :{props.data.phone}</span>
        </div>
    )
}