import React from "react";
import './Style.css';
import style from './custom.module.css'

export default function StyleExample()
{
    return(
        <>
        <h1 className="primary">CSS STyle using seperate File Type 1</h1>
        <h2 style={{color:'white',backgroundColor:'blue'}}>Css Style using inline Type 2</h2>
       <h1 className={style.success}>CSS STyle using modular file</h1>
        </>
    )
}