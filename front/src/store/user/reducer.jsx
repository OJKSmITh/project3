const initialState = {
  loadding: true,
  error: null,
  isLogin: false,
  data: {
    email:"",
    nickname: "",
  },
};

export const user = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "USER/LOGIN":
      return { ...state, isLogin: action.payload, data:action.payload };
    case "USER/LOGOUT":
      return { ...state, isLogin: false, data:{email:"", nickname:""}};
    default:
      return state;
  }
};
