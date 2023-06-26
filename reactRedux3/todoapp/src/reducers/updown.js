
const getData = () =>{
    const data = JSON.parse(localStorage.getItem('userData'))
    if (data===null){
        return []
    }
    else{
        return data
    }
}

const initialState  = getData()
const updateData = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD':
            return [...state,action.payload]
        case 'REMOVE':
            const filtereState = state.filter(each=>each.id !== action.payload)
           return filtereState
        default:
            return state
    }

}

export default updateData