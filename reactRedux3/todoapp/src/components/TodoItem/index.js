import './index.css'
import {useDispatch} from 'react-redux'
import {removeData} from '../../actions'
const TodoItem = (props) =>{
    const {item} = props

    const dispatch = useDispatch()

    const onDelete = () =>{
      dispatch(removeData(item.id))
    }
    return(
        <li className="list-item">
        <div className="activity">
        <p >{item.username}</p>
        </div>
        <button className="del-btn" onClick={onDelete}>Del</button>

        </li>
    )
}
export default TodoItem