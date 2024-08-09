export const signUp =()=>{

        return (dispatch)=>{
            dispatch({
                type:'signup'
            })
        }
}

export const signOut =()=>{

    return (dispatch)=>{
        dispatch({
            type:'signOut',
        })
    }
}