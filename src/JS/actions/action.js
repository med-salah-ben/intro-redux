import { DECREMENT, INCREMENT , INCREMENT_BY_VALUE } from "../constant/action-types"

export const increment = ()=>{
    return{
        type:INCREMENT 
    }
}

export const decrement = ()=>{
    return{
        type:DECREMENT
    }
}

export const incByValue = (aValue)=>{
    return{
        type:INCREMENT_BY_VALUE,
        payload:aValue
    }
}