import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { MainButton } from "./styled";

export const MainButtonComponent = () => {
  const { isLogin } = useSelector((state) => state.user);
  console.log(isLogin);

  return (
    <>
      {isLogin ? (
        <NavLink to="/signin">
          <MainButton>
            <div>로그인하여 음악 찾기</div>
          </MainButton>
        </NavLink>
      ) : (
        <NavLink to="/music">
          <MainButton>
            <div>Play GptMusic!!</div>
          </MainButton>
        </NavLink>
      )}
    </>
  );
};
