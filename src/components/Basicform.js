import React,{useState} from 'react'
export default function Basicform()
{
    const [name,setName]=useState('');
    const [tnc,setTnc]=useState(false);
    const [interest,setInterest]=useState('');
    const getFormData =(event)=>{
        console.log(name,tnc,interest);
        event.preventDefault();
    }
    return(
        <>
        <div>
            <form onSubmit={getFormData}>
                <input type="text" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}></input><br></br>
                <select onChange={(e)=>{setInterest(e.target.value)}}>
                    <option>Select Option</option>
                    <option>Marvel</option>
                    <option>DC</option>
                </select><br></br>
                <input type="checkbox" onChange={(e)=>{e.setTnc(e.target.checked)}}/><span>Accept Terms and Conditions</span>
                <br></br>
                <button type='submit'>Submit</button>
            
            </form>
        </div>
        </>
    )
}