// import logo from "./logo.svg";
// import User from "./components/User.js";
import { useState,useMemo,useRef } from "react";
import "./App.css";
// import Stateclass from "./components/Stateclass";
// import PropStudent from "./components/PropStudent";
import React from "react";
import Dele from "./components/APIExamples/Dele";
import PostExample from "./components/APIExamples/PostExample";
import Previous from "./components/Previous";
// import RefCla from "./components/ClassCompo/RefCla";
// import UsRef from "./components/UsRef";
// import ForwardRefExa from "./components/ForwardRefExa";
// import ControllComponent from "./components/ControllComponent";
// import UncontrolledComponent from "./components/UncontrolledComponent";
// import HighOrderComponent from "./components/HighOrderComponent";
// import Routing from "./components/Routing";
// import GetExample from "./components/APIExamples/GetExample";
// import PostExample from "./components/APIExamples/PostExample";
// import ReuseComponent from "./components/ReuseComponent";
// import ChildComponent from "./components/ChildComponent";
// import UsMem from "./components/UsMem";
// import PropStuclass from "./components/PropStuclass";
// import InputText from "./components/InputText";
// import HideandShow from "./components/HideandShow";
// import Basicform from "./components/Basicform";
// import Profile from "./components/Profile";
// import Effect from "./components/Effect";
// import EffectProp from "./components/EffectProp";
// import StyleExample from "./components/StyleExample";
// import BootstraButton from "./components/BootstraButton";
// import HandlaArray from "./components/HandlaArray";
// import NestedArray from "./components/NestedArray";

// function App() {
  
 /* This is for state with functional Component 
 // const [data, setData] = useState(0);
  // function updateonClick() {
  //   setData(data+1);
  // }
  // console.warn("*************************");
  */


 /* This is Props with functional
const [name,setName]=useState('Vishal')
 // return (
    // <div className="App">
    //   {/* <h1>{data}</h1>
    //   <button onClick={updateonClick}>ClickMe</button> */
    //   {/* <User /> */}
    //   {/* <Stateclass /> */}
//       <h1>Lets Learn</h1>
//       <PropStudent name={name} email="vishal@gmail.com" other={{address:'delhi',mobile:'9090987'}}/>
//       <button onClick={()=>setName("Vishal Singh")}>Change</button>
//       {/* <PropStudent name="Rudransh" email="rudransh@gmail.com" other={{address:'mumbai',mobile:'9090987'}}/>
//       <PropStudent name="Radhya" email="radhya@gmail.com" other={{address:'gorgoan',mobile:'9090987'}}/> */}
//     </div>
//   );
// }

//Props with class Component
/*function App()
{
  return (
    <div className="App">
    <PropStuclass name="Vishal" email="something@gmail.com"/>
    </div>
  )
}*/

// function App()
//   {
//     return(
//       <>
//       <InputText />
//       <HideandShow />
//       </>
//     )
//   }
  //function App()
  //{
    // const [data,setData]=useState(10);
    // const [count,setCount]=useState(100);
   // return(
     // <>
     // <div className="App">
        
     // {/* <HideandShow /> */}
      // {/* <Basicform /> */}
      // {/* <Profile /> */}
      // {/* <Effect /> */}
      // {/* <EffectProp count={count} data={data}/>
      // <button onClick={()=>{setCount(count+1)}}>Update count</button>
      // <button onClick={()=>{setData(data+1)}}>Update count</button> */}
      // {/* <StyleExample /> */}
      // {/* <BootstraButton /> */}
      // {/* <HandlaArray /> */}
      // {/* <NestedArray /> */}
     // </div>
      //</>
   // )
  //}
  /*function App()
  {
    // const users=[
    //   {name:'Anil',email:'anil@gmail.com',phone:'9090'},
    //   {name:'peter',email:'peter@gmail.com',phone:'9191'},
    //   {name:'harry',email:'harry@gmail.com',phone:'9292'},
    //   {name:'smrithi',email:'smrithi@gmail.com',phone:'9090'},
    // ]
    // return(
    //   <div className="App">
    //    {
    //     users.map((item,i)=>
    //     <ReuseComponent data={item} />)
    //    }
    //   </div>
    // )
    /*
    function parentalert(data)
    {
      alert(`${data.name} ${data.email} ${data.phone}`)
    }
  
    return(
      <div className="App">
      <ChildComponent alert={parentalert} />
      </div>
    )
  }
  */
 //function App()
 /*{
  const [count,setCount]=useState(0);
    const [item,setItem]=useState(10);
    const multico=useMemo(()=>{
      console.warn("multicount")
      return count*5
    },[count])
    
    return(
        <>
        <h1>Count is :{count}</h1>
        <h1>Item is :{item}</h1>
        <h1>{multico}</h1>
        <button onClick={()=>setCount(count+1)}>Update Count</button>
        <button onClick={()=>setItem(item*10)}>Update Item</button>
        </>
  )
 }*/
 /*
 function App()
 {
  return(
    <div className="App">
      {/* <RefCla /> /}
      <UsRef />
    </div>
  )
 }*/
 /*
 function App()
 {
  let inputRef=useRef(null);
  function handleInput()
  {
    inputRef.current.value='1000';
    inputRef.current.style.color='red';
    inputRef.current.focus()
  }
  return(
    <div className="App">
      <ForwardRefExa ref={inputRef}/>
      <button onClick={handleInput}>HandleInputFromParent</button>
    </div>
  )
 }*/
 function App()
 {
  return(
    <div className="App">
      {/* <ControllComponent /> 
      <UncontrolledComponent /> */}
      {/* <HighOrderComponent /> */}
      {/* <Routing /> */}
      {/* <GetExample /> */}
      {/* <PostExample /> */}
      {/* <Dele /> */}
      <Previous />
    </div>
  )
 }



export default App;
