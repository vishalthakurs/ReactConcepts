import React,{useState} from "react"
export default function Profile()
{
    const [loggedin,setLoggedIn]=useState(3);
    // if(loggedin)
    // {
    // return(
    //     <>
    //     <div>
    //         <h1>Welcome Vishal</h1>
    //     </div>
    //     </>
    // )
    // }
    // else{
    //     return(
    //         <>
    //         <div><h1>Welcome Guest</h1></div>
    //         </>
    //     )
    // }
    return(
    <>
    {loggedin==1?
    <h1>Welcome Vishal</h1>
    :loggedin==2?
    <h1>Welcome Guest</h1>
    :<h1>Welcome Someone</h1>}
    </>
    )
}