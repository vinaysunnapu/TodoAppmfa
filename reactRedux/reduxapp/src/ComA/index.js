import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {mulNumber,divNumber} from '../actions/index'

const Index = () =>{

    const myState2 = useSelector((state)=>state.multidivisionNumber)
const dispatch = useDispatch()
 
    const onMulButton = () =>{
        dispatch(mulNumber())
      }
      
      const onDivNumber = () =>{
        dispatch(divNumber())
      }

    return(
    <div>
    <h1>multidivision</h1>
      <h2>{myState2}</h2>
      <button type="button" onClick={onMulButton}>Multiplication</button>
      <button type="button" onClick={onDivNumber}>division</button>
      </div>
    )
}

export default Index