import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MainButton } from "./styled";

export const MainButtonComponent = () => {
  const { isLogin } = useSelector((state) => state.user);
  console.log(isLogin);

  return (
    <>
      {!isLogin ? (
        <MainButton>
          <NavLink to="/signin">
            <div>로그인하여 음악 찾기</div>
          </NavLink>
        </MainButton>
      ) : (
        <MainButton>
          <NavLink to="/music">
            <div>Play GptMusic!!</div>
          </NavLink>
        </MainButton>
      )}

    </>
  );
};
