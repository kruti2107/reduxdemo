import {createStore,combineReducers} from 'redux';
import UserReducer from './userreducer'
import SetUserReducer from "./setuserreducer";

const rootReducer = combineReducers({
    ruser:UserReducer,
    setuser:SetUserReducer
});

export default rootReducer;
