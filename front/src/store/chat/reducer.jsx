const initialState = {
    chatStatus:false,
}

export const chat = (state=initialState, action)=>{
    switch (action.type) {
        case "CHAT/TRUE":
            return {chatStatus:true}
        case "CHAT/FALSE":
            return {chatStatus:false}
        default:
            return state;
    }
}