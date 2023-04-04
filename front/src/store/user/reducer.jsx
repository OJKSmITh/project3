const initialState = {
  loadding: true,
  error: null,
  isLogin: false,
  data: {
    useremail: "",
    nickname: "",

  },
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER/LOGIN":
      return { ...state, isLogin: true, data:action.payload };
    case "USER/LOGOUT":
      return { ...state, isLogin: false, data:{email:"", nickname:""}};
    default:
      return state;
  }
};
