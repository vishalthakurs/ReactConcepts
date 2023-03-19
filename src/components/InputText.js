import React,{Component,useState} from "react";
export default function InputText()
{
    const [text,setText]=useState(null)
  const [print,setPrint]=useState(false)
  function getThedata(event){
    setText(event.target.value);
  }
  function showData()
  {
    setPrint(true);
    console.log(text);
  }
  return (
    <div className="App">
      {
        print?<h1>{text}</h1>:null
      }
      <input type="text" onChange={getThedata}></input>
      <button onClick={showData}>Print</button>
    </div>
  )
}
