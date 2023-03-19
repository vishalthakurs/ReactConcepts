import React,{useEffect} from 'react'
export default function EffectProp(props)
{
    useEffect(()=>{
        alert(`count is :${props.count}`)
    },[props.count]);
    useEffect(()=>{
        alert(`Data is :${props.data}`)
    },[props.data])
    return(
        <>
        <div>
            <h1>Count props :{props.count}</h1>
            <h1>Data props :{props.data}</h1>
        </div>
        </>
    )
}
