import { SET_USER_LIST} from "../action/actions";
const initialstate={
    userList:[],
    loading:false
};

const SetUserReducer =(state=initialstate,action)=>{
    debugger;
    switch (action.type) {
        case SET_USER_LIST: {
            return {
                ...state,
                userList: action.payload
            }
        }
        default:
            return state
    }

};

export  default SetUserReducer;

