const initialState = {
    authCheck:false,
}

export const email = (state =initialState, action)=>{
    switch (action.type) {
        case "EMAIL/TRUE":
            return { authCheck:true}
        case "EMAIL/FALSE":
            return {authCheck:false}
        default:
            return  state;
    }
}