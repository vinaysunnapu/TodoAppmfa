
export const addData = (dta) =>{
    return{
        type: 'ADD',
        payload: dta
    }
}

export const removeData = (id) =>{
    return{
        type: 'REMOVE',
        payload: id
    }
}