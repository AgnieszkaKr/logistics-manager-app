const loggedReducer = ( state, action )=>{
    switch (action.type) {
        case 'LOGGED_IN':
            return true
        case 'LOGGED_OUT':
            return false
        default:
            return false
    }
}
export default loggedReducer