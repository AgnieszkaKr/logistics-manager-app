import loggedReducer from './logging'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    isLoggedIn: loggedReducer,
})

export default allReducers;