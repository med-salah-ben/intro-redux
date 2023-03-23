import React , {useState}  from "react";
import { useSelector  , useDispatch} from "react-redux";
import {increment , decrement, incByValue} from "./JS/actions/action"

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.countReducer.count);

  const [value , setValue] = useState(0);

  const handleCount = ()=>{
    dispatch(increment())
  }

  const countByValue = (e)=>{
    e.preventDefault()
    dispatch(incByValue(parseInt(value)))
  }

  return (
    <div>
      <button onClick={handleCount} >+</button>
       <h3> {count}</h3>
      <button onClick={()=>dispatch(decrement())} >-</button>
      <form>
        <input type="number" onChange={(e)=>setValue(e.target.value)} defaultValue={0} />
        <button onClick={countByValue}>Plus</button>
      </form>
    </div>
  );
}

export default App;
