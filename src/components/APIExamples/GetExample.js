import { useEffect, useState } from "react"
import { Table,Button } from "react-bootstrap";

export default function GetExample()
{
    const [data,setData] =useState([]);
    const [check,setCheck]=useState(false)
    console.log(check)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            return response.json()
        }).then((result)=>{
            console.log('I Run')
            check!=false?setData(result):setData(null)
            
        })
    },[])
    console.log(check);
    
    return(
        <>
        <Button variant="success" onClick={()=>setCheck(true)}>Get</Button>
        {
        data!=null?
        
        <Table bordered striped variant="dark">
            <thead>
                
                <tr>
                    <th>UserId</th>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    
                    data.map((e ,i)=>
                    
                    <tr key={i}>
                        <td>{e.userId}</td>
                        <td>{e.id}</td>
                        <td>{e.title}</td>
                        <td>{e.body}</td>
                    </tr>)
                }
            </tbody>
        </Table>:null
}
        </>
    )
}