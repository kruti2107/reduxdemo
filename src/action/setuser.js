import { SET_USER_LIST} from "./actions";

export const  setUser = () =>{
    debugger;
    return(dispatch,getState)=>{
        return fetch('https://jsonplaceholder.typicode.com/users').
        then(response=>response.json()).
        then((data)=>{
            return dispatch({
                type:SET_USER_LIST,
                payload:data
            })
            }).catch((error)=>{
                console.log(error)
        })

    }
}
