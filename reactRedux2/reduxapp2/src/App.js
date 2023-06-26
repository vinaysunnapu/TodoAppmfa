
import { increaseNumber,decreaseNumber } from "./actions"
import { useSelector,useDispatch } from "react-redux"

const App = () =>{ 
  const myState = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()

  const onIncrease = () =>{
    dispatch(increaseNumber(100))
  }

  const onDecrease = () =>{
    dispatch(decreaseNumber(100))
  }

  return(
    <div>
      <h1>calculator</h1>
      <h2>{myState}</h2>
      <button onClick={onIncrease}>increase</button>
      <button onClick={onDecrease}>decrease</button>
    </div>
  )
}

export default App 