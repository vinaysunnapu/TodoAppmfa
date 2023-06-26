import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {incNumber,decNumber} from './actions/index'

import Index from './ComA/index'

const App = () => {
const myState = useSelector((state)=>state.changeNumber)
const dispatch = useDispatch()

const incrementNumber = () =>{
    dispatch(incNumber())
}

const decrementNumber = () =>{
  dispatch(decNumber())
}



  return (
    <div>
      <h1>React redux tutorial</h1>
      <h2>{myState}</h2>
      <button type="button" onClick={incrementNumber}>increment</button>
      <button type="button" onClick={decrementNumber}>decrement</button>
      <Index/>
    </div>
  )
}

export default App
