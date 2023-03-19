import React from 'react'
export default function PropStudent(props){
    return(
        <>
        <div className="container" style={{backgroundColor: 'skyblue'}}>
            <h1>Student Details</h1>
            <h2>My name is {props.name}</h2>
            <h2> Email is {props.email}</h2>
            <h4>Address :{props.other.address}</h4>
            
        </div>

        </>
    )
}