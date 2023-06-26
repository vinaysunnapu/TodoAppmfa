

export const increaseNumber = (num) =>{
    return{
        type: 'INCREMENT',
        payload:num
    }
}

export const decreaseNumber = (num) =>{
    return{
        type: 'DECREMENT',
        payload:num
    }
}
