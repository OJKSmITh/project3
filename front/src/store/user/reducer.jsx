const initialState = {
    loadding:true,
    error:null,
    data:{
        userid:'',
        isLogin:false
    }
}

export const user = (state=initialState, action) =>{
    console.log(state)
    switch(action.type){
        case "":
            return {...state}
        default:
            return state
    }
}