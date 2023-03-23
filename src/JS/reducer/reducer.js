import { INCREMENT ,DECREMENT ,INCREMENT_BY_VALUE } from "../constant/action-types";

const initialState={
    count :8
}

const countReducer = (state=initialState , {type , payload})=>{
    switch (type) {
        case INCREMENT:
            return {...state , count:state.count+1}
        case DECREMENT:
            return {...state , count:state.count-1}
        case INCREMENT_BY_VALUE:
            return {...state , count : state.count + payload}
        default:
            return state;
    }
}

export default countReducer