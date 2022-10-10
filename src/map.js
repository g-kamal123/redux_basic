export const mapToState =(state)=>{
    return{
        ...state
    }
}
export const mapToDispatch =(dispatch)=>{
    return{
        formdata:(val)=>dispatch({
            type:'addData',
            payload:val
        })
    }
}