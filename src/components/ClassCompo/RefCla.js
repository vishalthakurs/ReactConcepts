import React, { createRef } from 'react'

export default class RefCla extends React.Component
{
    constructor()
    {
        super();
        this.iref=createRef();
    }

    render()
    {
        return(
            <>  
            
            <input type='text' ref={this.iref} />
            <button onClick={()=>this.iref.current.style.color='red'}>Click me</button>
            </>
        
        )
    }

}