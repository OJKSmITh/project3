import { AppRouter } from "./routes/AppRouter";
import { Header } from "./common";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const { isLogin, loadding, error, data } = useSelector((state) => state.user);
  useEffect(() => {
    if (document.cookie.split("=")[0] === "token") {
      const token = document.cookie.split("=")[1];
      (async () => {
        const response = await axios.post("https://api.jjerry.store/auth/sns", {
          token,
        });
        if (response.status === 200 && response.data.email) {
          dispatch({ type: "USER/LOGIN", payload: response.data });
        }
      })();
    }
  }, [document.cookie]);
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
