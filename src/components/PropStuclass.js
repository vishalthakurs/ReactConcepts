import React,{Component} from "react";

export default class PropStuclass extends Component{
    render()
    {
        return (
            <div>Student
                <h1>Hello {this.props.name}</h1>
                <h2>Email is {this.props.email}</h2>
            </div>
        )
    }
}