import { combineReducers } from "redux";
import loginReducer from './loginReducer';

const reducers = combineReducers({
    loginDetails : loginReducer
})

export default reducers