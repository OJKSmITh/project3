const initialState = {
  loadding: true,
  error: null,
  isLogin: false,
  data: {
    useremail: "",
  },
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case "USER/LOGIN":
      return { ...state, isLogin: action.payload };
    case "USER/LOGOUT":
      return { ...state, isLogin: false };
    default:
      return state;
  }
};
