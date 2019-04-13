import {ADD_USER} from "./actions";

export const adduser = username =>{
debugger;
    return(dispatch,getState)=>{

        dispatch( {
           type:ADD_USER,
           payload:username
        })
    }
}

