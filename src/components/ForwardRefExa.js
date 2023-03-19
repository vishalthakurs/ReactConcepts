import React,{forwardRef} from "react";
function ForwardRefExa(props,inputRef)
{
    return(
        <>
        <input type='text' ref={inputRef}></input>
        </>
    )
}
export default forwardRef(ForwardRefExa);