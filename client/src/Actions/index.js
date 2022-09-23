const logged_out =() =>{
    return{
        type: 'LOGGED_OUT'
    }
}

const logged_in =() =>{
    return{
        type: 'LOGGED_IN'
    }
}

export {logged_out, logged_in}