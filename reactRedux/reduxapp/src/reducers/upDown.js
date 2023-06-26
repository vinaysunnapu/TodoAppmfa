const initialState = 10 

const changeNumber = (state=initialState,action) =>{
    switch(action.type){
        case 'INCREMENT': return state+1;
        case 'DECREMENT': return state-1;
        default: return state;
    }

}

const multidivisionNumber = (state=initialState,action) =>{
    switch(action.type){
        case 'MULTI' : return state * 5;
        case 'DIVIS': return state/5;
        default: return state;
    }
}

export {changeNumber,multidivisionNumber}