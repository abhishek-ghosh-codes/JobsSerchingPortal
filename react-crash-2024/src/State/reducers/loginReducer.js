
const reducer=(state=true , action)=>{
    if(action.type == 'signup'){
        return false;
    }
    else if(action.type == 'signout'){
        return true;
    }
    else{
        return state;
    }
}

export default reducer;