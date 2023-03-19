import React,{Component} from 'react';

class Stateclass extends Component
{
    constructor(){
        super();
        this.state={
            data:'anil',
        }
    }
    apple()
    {
        this.setState({data:"vishal"});
    }


    render(){
        return ( 
            <>
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.apple()}>Update Data</button>
            </div>
            </>
        );
    }
}

export default Stateclass