import React from "react";
import { Link,Route, Routes } from "react-router-dom";
export default function Routing()
{
    return(
        <React.Fragment>
        
            <Link to='/home'>Home</Link><br></br>
            <Link to='/about'>About</Link>
           <Routes>
                <Route path="/Home" Component={Home}></Route>
                <Route path="/About" Component={About}></Route>
        
           </Routes>
        
        </React.Fragment>
    )
}
function Home()
{
    return <h2>Home</h2>;
}
function About() {
    return <h2>About</h2>;
  }