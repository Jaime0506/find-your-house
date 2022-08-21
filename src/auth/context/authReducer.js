import { types } from "../types/types";

export const authReducer = (state, action) => {

    // console.log(type)

    if (action.type === types.login) return {...state, logged: true, currentUser: action.payload}
    
    if (action.type === types.logout) return {...state, [logged]: false, [currentUser]: null}

    return state;
};
