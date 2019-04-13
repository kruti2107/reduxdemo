import {ADD_USER} from '../action/actions';

const initialstate={
    user:'',
};

const UserReducer =(state=initialstate,action)=>{
    debugger;
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                user: action.payload
            }
        }
        default:
            return state
    }

};

export  default UserReducer;






