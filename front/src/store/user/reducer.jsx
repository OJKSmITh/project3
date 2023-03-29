const initialState = {
  loadding: true,
  error: null,
  isLogin: false,
  data: {
    userid: "",
  },
};

export const user = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case "USER/LOGIN":
      return { ...state, isLogin: action.payload };
    case "USER/LOGOUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
};
