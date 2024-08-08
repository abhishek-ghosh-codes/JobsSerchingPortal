import { SIGNED_UP } from "../constants";

export const signed_up=(data)=>{
    return {
        type:SIGNED_UP,
        data:data
    }
}