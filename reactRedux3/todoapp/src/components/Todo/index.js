import './index.css'
import {useState,useEffect} from 'react'
import TodoItem from '../TodoItem'
import { addData,removeData } from '../../actions'
import {useSelector,useDispatch} from 'react-redux'
import updateData from '../../reducers/updown'




const Todo  = () =>{
    
     const [data,setData] = useState('')
     const myState = useSelector((state)=>state.updateData)
     const dispatch = useDispatch()

     console.log(myState)

     useEffect(()=>{
        localStorage.setItem('userData',JSON.stringify(myState))
     },[myState])

     const onChangeInput = (event) =>{
         setData(event.target.value)
     }

     const onClickAdd = () =>{
        const newData = {
            id: new Date().getTime().toString(),
            username: data
        }

        if (newData.username!==''){

        dispatch(addData(newData))
        setData('')
        }
        else{
            alert('please enetr username')
        }
        
     }

     
    return (
        <div>
        
            <h1 className="main-heading">Todo List Application</h1>
            <div className='input-container'>
            <input value={data} type="text" className="input" onChange={onChangeInput} /> 
            <button type="button" className="btn" onClick={onClickAdd}>Add</button>
            </div>
            <ul className="un-list">
            {myState.map(each=> <TodoItem key={each.id} item={each}/>)}
            </ul>
            
        </div>
    )
}

export default Todo 