import { SIGNED_UP } from "../constants";

export function userSignedUp(state=[],action){
    switch(action.type){
        case SIGNED_UP:
            return {isUserSignedUp:action.data}

        default:
            return state
    }
}